<template>
  <div class="mainapp" id="mainapp">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goToUrl('/react1')">react1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="goToUrl('/vue1')">vue1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 14px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <el-button @click="writeBtn">写入数据</el-button> -->
        </el-header>
        <el-main>
          <main id="subapp-viewport"></main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import actions from "@/action/actions";
  export default {
    name: 'mainapp',
    mounted() {
      actions.onGlobalStateChange((state, prevState) => {
        console.log("改变前 ", prevState.userInfo);
        console.log("改变后",  state.userInfo);
      });
    },
    methods: {
      goToUrl(subapp) {
        history.pushState(null, subapp, subapp)
      },
      // writeBtn() {
      //   let userInfo = {
      //     name: '曲小强',
      //     age: 27,
      //     sex: '男',
      //     desc: '肥宅快乐水，活力一整天。'
      //   }
      //   actions.setGlobalState({userInfo});
      // }
    },
  }
</script>
<style>
  html,body,#mainapp {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
</style>
<style lang="scss">
.mainapp {
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
}
</style>
