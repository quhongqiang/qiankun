import './public-path';
import Vue from 'vue';
import App from './App.vue';
import actions from "@/action/actions";

Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  console.log(props, 'prosp')
  if (Object.keys(props).length != 0) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  const { container } = props;

  instance = new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}
