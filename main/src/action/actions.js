// main/src/action/actions.ts
import { initGlobalState } from "qiankun";

const actions = initGlobalState({userInfo: {
  name: '张三',
  age: 18,
  sex: '男',
  desc: '法外狂徒张三，行走在法律边缘的人~',
}});

export default actions;