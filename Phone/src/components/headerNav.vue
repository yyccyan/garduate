<template>
  <div>
    <header class="header">

      <nav class="nav nav-home" :class="{'cur-page': route === '/'}">
        <router-link to="/">
          商品列表
        </router-link>
      </nav>
      <nav class="nav nav-cart" :class="{'cur-page': route === '/cart'}">
        <router-link to="cart">
          购物车 <span v-if="totalItem" class="text-danger" v-text="totalItem" ></span>
        </router-link>
      </nav>
    </header>
  </div>
</template>



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
