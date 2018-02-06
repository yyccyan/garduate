<template>
  <ul>
     <div class="pTitle">
     <p>-热门推荐-</p>
     </div>
    <li v-for="p in products" class="pLi" v-if="(p.id<=6)">
      <router-link :to="{ name: 'detail',  params: { id: p.id }}">
      <div class="fenContent">
      <img :src="p.activeStyleUrl"> <br>
       {{ p.title }}   <br>
       {{ p.price | currency }}
      </div>
        <br>
        <button
          :disabled="!p.inventory"
          @click="addToCart(p)"
          class="addButton">
          添加
        </button>
</router-link>
   </li><br>
    <button class="manyButton">
    <router-link to="/all">
    更多
    </router-link>
    </button>

<div class="newAll">
   <div class="pTitle-1">
       <p>-新品首发-</p>
     </div>
      <li v-for="p in products" class="pLi" v-if="(p.id>6&&p.id<=12)">
        <router-link :to="{ name: 'detail',  params: { id: p.id }}">
        <div class="fenContent-1">
        <img :src="p.activeStyleUrl"> <br>
         {{ p.title }}   <br>
         {{ p.price | currency }}
        </div>
          <br>
          <button
            :disabled="!p.inventory"
            @click="addToCart(p)"
            class="addButton-1">
            添加
          </button>
        </router-link>
     </li><br>
      <button class="manyButton">
      <router-link to="/all">
      更多
      </router-link>
      </button>
     </div>
   </ul>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  data () {
    return {
    }
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters({
      // 映射 this.products 为 store.getters.allProducts
      products: 'allProducts'
    })
  },
  methods: {
    // 使用对象展开运算符,将组件的 methods 映射为 store.dispatch 调用
    ...mapActions([
      // 映射 this.addToCart() 为 this.$store.dispatch('addToCart')
      'addToCart'
    ])
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
