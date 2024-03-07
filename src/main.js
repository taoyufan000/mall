// import Vue from 'vue'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'

import { createStore } from 'vuex'
import mutations from './store/mutation'
import actions from './store/action'

// import env from './env'
// import store from './store'
// import { createApp } from 'vue'
// createApp(App).config.globalProperties.$http = axios
// createApp(App).use(store).use(router).mount('#app')

// new Vue({
//     router,
//     render:h=>h(App),
// }).mount('#app')

const mock = false;
if(mock){
    require('./mock/api')
}


//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://test-imooc.com/api';
axios.defaults.timeout = 8000;
// let a = env.baseURL;
// axios.defaults.baseURL = a; 
//接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    let path = location.hash;
    if(res.status == 0){
        return res.data;
    }else if(res.status == 10){
        if(path != path){
            window.location.href = '/#/login';
        }
        // window.location.href = '/#/login';
    }else{
        alert(res.msg);
        return Promise.reject(res);
    }
});
  
// vuex创建一个新的 store 实例
const store = createStore({
    state(){
        return{
            username:'',//用户名
            cartcount:0//购物车商品数量
        } 
    },
    mutations,
    actions,
    // mutations: {
    //     saveUserName(state,username){
    //         state.username = username;
    //     }
    //   },
    //   actions: {
    //     saveUserName(context,username){
    //         context.commit('saveUserName',username);
    //     }
    //   }
    

})

// Vue.config.productionTip = false

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueLazyload,{
    loading:'/imgs/loading-svg/loading-bars.svg'
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$cookie = VueCookie
app.mount('#app')