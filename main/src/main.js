import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/**
 * Step1 注册子应用
 */
registerMicroApps(
  [
    {
      name: 'react1',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      activeRule: '/react1',
    },
    {
      name: 'vue',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      activeRule: '/vue',
    },
  ],
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
setDefaultMountApp('/react1');

/**
 * Step3 启动应用
 */
start();
