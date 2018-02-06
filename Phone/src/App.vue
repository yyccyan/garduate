<template>
  <div id="app">
     <login></login>
     <search v-show="$route.path!='/order'"></search>
     <carousel v-show="$route.path=='/'"></carousel>
    <router-view></router-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
import header from './components/headerNav.vue'
import carousel from './components/Carousel.vue'
import login from './components/Login.vue'
import search from './components/Search.vue'
import footerNav from './components/footerNav.vue'
export default {
  name: 'app',
  components: {
    'appHeader': header,
    'carousel': carousel,
        'login': login,
        'search': search,
        'footerNav': footerNav
  }
}

</script>
<style>
  @import './../static/css/base.css';
</style>

