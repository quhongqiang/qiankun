<template>
  <div class="hello">
    <div>姓名：{{userInfo && userInfo.name}}</div>
    <div>年龄：{{userInfo && userInfo.age}}</div>
    <div>性别：{{userInfo && userInfo.sex}}</div>
    <div>描述：{{userInfo && userInfo.desc}}</div>
    <br />
    <button @click="changeInfo">逮捕嫌疑人</button>
  </div>
</template>

<script>
import actions from "@/action/actions";
export default {
  name: 'HelloWorld',
  data() {
    return {
      userInfo: {
        name: '这是元项目',
        age: 11,
        sex: '男',
        desc: '十四行诗是所所所所'
      }
    }
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      console.log(state, 'statestate111')
      const { userInfo } = state;

      // 获取用户信息
      this.userInfo = userInfo;
    }, true);
  },
  methods: {
    changeInfo() {
      let userInfo = {
        name: '被抓的张三',
        age: 26,
        sex: '男',
        desc: '违法的事，不可做啊~',
      }
      actions.setGlobalState({userInfo});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
