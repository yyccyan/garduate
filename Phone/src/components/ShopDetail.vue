<template>
  <div class="container">
    <div class="row">
      <div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
        <div class="row">
          <div class="gallery col-md-6 col-sm-6">
            <img :src="iPhone6S.activeStyleUrl" class="img-responsive" alt="">
          </div>
          <div class="detail col-md-6 col-sm-6">
            <h3 class="name"><span v-text="iPhone6S.title"></span></h3>
            <hr>
            <div class="options">
              <dl class="dl-horizontal">
                <dt>描述：</dt>
                <dd><span v-text="iPhone6S.desc"></span></dd>
              </dl>
              <dl class="price dl-horizontal">
                <dt>价格：</dt>
                <dd class="pomegranage"><strong>￥<span v-text="iPhone6S.price"></span></strong></dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>外观：</dt>
                <dd>
                  <ul>
                    <li v-for="(value, key) in iPhone6S.style"
                        @click="changeStyle(key)"
                        :class="{active: iPhone6S.activeStyleUrl == value}">
                        <span v-text="key"></span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>存储容量:</dt>
                <dd>
                  <ul>
                    <li v-for="(value, key) in iPhone6S.storage"
                        @click="changePrice(key)"
                        :class="{active: iPhone6S.price == value}"><span v-text="key"></span></li>
                  </ul>
                </dd>
              </dl>
            </div>

            <button class="btn btn-danger btn-block" @click="addToCart(iPhone6S)" :disabled="iPhone6S.isSelected">
              <span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车
            </button>
          </div>
        </div>
      </div> <!-- ./product -->
    </div>
  </div><!-- ./container -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ShopDetail',
  data () {
		return {
			iPhone6S: {}
		}
	},
	methods: {
    ...mapActions([
      'addToCart'
    ]),
    getDataById (lists, id) {
    	for (let i = 0; i < lists.length; i++) {
    		if (lists[i].id === id) {
    			return lists[i]
    		}
    	}
    	return false
    },
    changeStyle (styleKey) {
      this.iPhone6S.activeStyle = styleKey
      this.iPhone6S.activeStyleUrl = this.iPhone6S.style[styleKey]
    },
    changePrice (storageKey) {
      this.iPhone6S.activeStorage = storageKey
      this.iPhone6S.price = this.iPhone6S.storage[storageKey]
      this.iPhone6S.isSelected = false
    }
  },
  created () {
    let id = this.$route.params.id
    this.iPhone6S = this.getDataById(this.$store.state.products.all, id)
	}
}
</script>
<style lang="css">
.container{
width:1400px;
height:400px;
background-color:white;
font-family: "Microsoft YaHei";

}
.pomegranage {
  color: #c0392b;
}
.gallery img{
  width: 300px;
  height: auto;
  margin-top:10px;
  margin-left:220px;
}
.detail{
  width: 450px;
  height: 600px;
  float: right;
  margin-top:-280px;
  margin-right:420px;
  line-height:25px;
}
.detail dt {
  color: grey;
  width: 80px;
  line-height:40px;

}
.detail dd {
  margin-left: 75px;
  padding: 5px;
  margin-top: -33px;
}
.option ul {
  padding: 0px;
  margin-top: -5px;
}
.option ul > li {
  float: left;
  list-style: none;
  margin-right: 5px;
  padding: 0 8px;
  border: 2px solid #eee;

}
.option ul > li:hover {
  border: 2px solid #c0392b;
}
.option ul .active {
  border: 2px solid #c0392b;
}
.row button{
  width: 450px;
  height: 35px;
  background-color:#5C90B6;
  border:0;
  color:#ffffff;
  font-weight:bold;
  border-radius: 5px;
  margin-top:20px;
}
.row button:hover{
 opacity: 0.7;
}

.detail .name span {
font-size:20px;
color:grey;
font-weight:bold;
}
</style>



