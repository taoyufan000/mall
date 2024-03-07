<template>
  <div id ="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import axios from 'axios'
// import storage from './storage/index'

export default {
  name:'app',
  components:{

  },
  data(){
    return{
      res:{}
    } 
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    // alert('aaa');
    //本地加载请求静态json文件的形式
    // axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //通过easy-mock平台实现数据mock
    // axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });

    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    // storage.clear('a','user');

  },
  methods:{
    getUser(){
      this.$axios.get('/user').then((res={})=>{
        //to-do   保存到vuex里面
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.$axios.get('/carts/products/sum').then((res=0)=>{
        //to-do   保存到vuex里面
        this.$store.dispatch('saveCartCount',res)
      })
    },
  }
}
</script>


<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
