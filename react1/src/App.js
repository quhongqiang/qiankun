import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import actions from './actions';

function App() {
  const [ userInfo, setUserInfo] = useState({
    name: '阿达十多万',
    age: 16,
    sex: '女',
    desc: '阿打算打打瓦达adad阿达啊啊'
  });
  useEffect(() => {
    actions.onGlobalStateChange(state => {
      const { userInfo } = state;
      setUserInfo(userInfo);
    }, true);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>姓名：{userInfo?.name}</div>
        <div>年龄：{userInfo?.age}</div>
        <div>性别：{userInfo?.sex}</div>
        <div>描述：{userInfo?.desc}</div>
        <br />
        <button onClick={ () => {
          let userInfo = {
            name: '出狱的张三',
            age: 28,
            sex: '男',
            desc: '不要忘记，吾等为何而战~',
          }
          actions.setGlobalState({userInfo});
        }}>刑满释放</button>
        <br />
      </header>
    </div>
  );
}

export default App;
