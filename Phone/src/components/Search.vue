<template>
  <div class="toubu">
  <nav class="search" :class="{'cur-page': route === '/'}">
  <router-link to="/">
  &nbsp;&nbsp;&nbsp;<img src ="static/logo.jpg">
  </router-link>

     <router-link to="cart" :class="{'cur-page': route === '/cart'}" style="float:right;margin: 37px 180px 10px 0px;font-family:'Microsoft YaHei';">
         购物车 <span v-if="totalItem" class="text-danger" v-text="totalItem" ></span>
     </router-link>
     <span><img src ="/static/car.png"></span>
     <button @click="searchInput()" class="search-btn">搜索</button>
     <input v-model="search" placeholder="搜索关键字试试">
  </nav>
  </div>
</template>

<style lang="css">
.toubu{
background-color:white;
padding-bottom:10px;
margin-bottom:20px;
}
.search img{
   width: 200px;
   height: 50px;
   margin: 15px 0px 15px 0px;
}
.search input,.search button{

   float:right;

}
.search input{
  width: 400px;
  height: 34px;
  margin: 30px 0px 30px 0px;
  border-left:1px solid #5C90B6 ;
  border-top:1px solid #5C90B6 ;
  border-bottom:1px solid #5C90B6 ;
}
.search button{
  width: 78px;
  height: 36px;
  border:0px;
  background-color:#5C90B6;
  color:#FFFFFF;
  font-weight:bold;
  margin: 30px 150px 30px 0px;
  border-radius: 3px;
}
.search span img{
  width: 20px;
  height: 20px;
  float:right;
  margin: 35px 10px 15px 0px;
}

</style>

<script>
import { mapState } from 'vuex'
export default{
  name: 'headerNav',
  data(){
    return{
      route: '/'
    }
  },
  computed: {
    ...mapState({
      added: state => state.cart.added
    }),
    totalItem () {
      //return this.added.length
      return this.$store.state.cart.added.length
    },
  	route () {
  		return this.$route.path
  	}
  }
}
</script>
