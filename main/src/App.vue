<template>
  <div class="mainapp">
    <header class="mainapp-header">
      <h1>这里是个头部公用</h1>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li @click="goToUrl('/react1')">react1</li>
        <li @click="goToUrl('/vue')">Vue</li>
        <li @click="goToUrl('/jquery')">jquery</li>
      </ul>
      <!-- 子应用  -->
      <main id="subapp-viewport"></main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainapp',
    methods: {
      goToUrl(subapp) {
        history.pushState(null, subapp, subapp)
      }
    },
  }
</script>

<style lang="scss">
body {
  margin: 0;
}
.mainapp {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  line-height: 1;
}
.mainapp-header {
  >h1 {
    color: #333;
    font-size: 36px;
    font-weight: 700;
    margin: 0;
    padding: 36px;
  }
}
.mainapp-main {
  display: flex;
  .mainapp-sidemenu {
    width: 130px;
    list-style: none;
    margin: 0;
    margin-left: 40px;
    padding: 0;
    border-right: 2px solid #aaa;
    >li {
      color: #aaa;
      margin: 20px 0;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
      &:hover {
        color: #444;
      }
      &:first-child {
        margin-top: 5px;
      }
    }
  }
}

#subapp-container {
  flex-grow: 1;
  position: relative;
  margin: 0 40px;
  .subapp-loading {
    color: #444;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }
}

</style>
