<template>
  <div>
    <header class="header">
      <nav class="nav nav-home" :class="{'cur-page': route === '/'}">
        <router-link to="/">
          商品列表
        </router-link>
      </nav>
    </header>
  </div>
</template>

<style lang="css">
.header{
  height:40px;
  background-color: #F7F7F7;
  border-bottom: 1px solid #D8D8D8;
  border-top: 1px solid #D8D8D8;
  margin-top: -30px;
}
.nav-home{
   line-height: 40px;
   margin-left: 50px;

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
