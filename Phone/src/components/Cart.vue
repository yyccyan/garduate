<template>
  <div class="cart">
    <p v-show="!products.length" class="gouwuche">
    <i>购物车空空如也！</i>
    </p>
     <table class="detial-wrap" v-show="products.length">
          <div class="top-head">
            <p>商品</p>
            <p>价格</p>
            <p>数量</p>
          </div>
      <li v-for="p in products" class="cartList" >
      <div class="ojbk">
         <img :src="p.activeStyleUrl" class="cartImg">
          <p class="biaoti">{{ p.title }}</p>
          <p class="biaoti-2">{{ p.price | currency }}</p>
          <p class="biaoti-3"> {{ p.quantity }}</p>

       </div>
        <hr>
       </li>

    <div class="dixia">
    <p class="allPrice">总额:{{ total | currency }}</p>
    <p class="jieZhang"><button :disabled="!products.length" @click="checkout(products)" >结账</button></p>

    <br>
    </div>
    </table>
  </div>


</template>
<style lang="css">
.cart{
width:1200px;
background-color:white;
margin-left:80px;
margin-bottom:50px;
}

.top-head{
height:50px;
width:1200px;
background-color:#5C90B6;
}
.top-head p {
margin-top:14px;
color:white;
display:inline-block;
float:left;
margin-left:150px;
margin-right:200px;
}
.cartList{
text-decoration:none;
list-style-type:none;
display:inline-block;
}
.cartList p{
display:inline-block;
}
.detial-wrap{
font-family:"Microsoft YaHei";
}
h2{
width:1200px;
display:block;
text-align:center;
font-family:"Microsoft YaHei";
}
.gouwuche{
display:block;
text-align:center;
height:100px;
font-family: "Microsoft YaHei";
line-height:100px;
}
.cartImg{
  display:block;
  float:left;
  width: 70px;
  height: auto;
  border: 1px solid gainsboro;
  margin-top:20px;
  margin-left:50px;
}
.dixia{
 display:inline-block;
 width:1200px;
 text-align:center;
 margin-top:10px;
}
.dixia .jieZhang button{
display:inline-block;
margin-top:20px;
width:150px;
height:35px;
border-radius: 5px;
color:white;
background-color:#5C90B6;
text-decoration:none;
font-family:"Microsoft YaHei";
margin-bottom:50px;
}
.allPrice{
color:indianred;;
font-weight:bold;
}
.ojbk{
 display:inline-block;
width:1200px;
}
.biaoti{
 display:block;
 width:200px;
 margin-left:20px;
 margin-top:40px;
}
.biaoti-2{
          display:block;
          margin-left:160px;
          margin-top:40px;
         }
.biaoti-3{
           display:block;
           margin-left:330px;
           margin-top:40px;
          }
hr{
width:1150px;
border:1 solid #E3E4E5;
}

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
     route: '/'
    }
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products);
      alert("已购买！");
    },
  }
  }

</script>

