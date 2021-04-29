import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

import routerApp from './router'


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#mainapp')

/**
 * Step1 注册子应用
 */
registerMicroApps(
  routerApp,
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

/**
 * Step2 设置默认进入的子应用
 */
setDefaultMountApp('/');

/**
 * Step3 启动应用
 */
start();
