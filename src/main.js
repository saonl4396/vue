import Vue from 'vue'
import App from './layouts/App.vue'
import 'default-passive-events'
Vue.config.productionTip = false


import './assets/css/base.css'// 引入全局样式
import './assets/js/font.js'//字体比值的控制
import router from './plugins/router.js'
// import home from '../public/images/head.png';
// console.log(home); 
// 引入拦截器
import './plugins/axios'
// 引入全局过滤器
import './filters';

let vm =new Vue({
  render: h => h(App),
  router,
    data:{
       bNav:false,
       bFoot:false,
       bLoading:true
     }
}).$mount('#app')
export default vm;