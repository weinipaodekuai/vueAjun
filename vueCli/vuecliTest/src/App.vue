
<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
    </div>

    <!--导航-->
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">hi页面</router-link> |
      <router-link :to="{name:'hi1',params:{username:'ajun',id:'888'}}">hi页面1</router-link> |
      <router-link to="/hi/hi2">hi页面2</router-link>
    </div>

    <p>{{$route.name}}</p>

    <!--路由页面-->
    <transition name="fade">
      <router-view ></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
