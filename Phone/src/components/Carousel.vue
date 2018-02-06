<template>
 <div ref="root" style="user-select: none;-webkit-user-select: none;overflow: hidden;width:1200px">
  <div class="sliderPanel"
     :class="{transitionAni:ani}"
     :style="{height:height,transform:translateX}">
   <div v-for="item in itemList" class="verticalCenter picbox" :style="{left:item.x+'px'}">
    <img :style="{width:width,top:top}" :src="item.url" style="min-height: 90%">
   </div>
  </div>
  <div @click="clickLeft" class="arrowLeft verticalCenter horizaCenter">
   <img src="/static/arrow.png" style="transform: rotate(180deg)">
  </div>
  <div @click="clickRight" class="arrowRight verticalCenter horizaCenter">
   <img src="/static/arrow.png">
  </div>
  <div class="sliderBar horizaCenter">
   <div v-for="(item,index) in imgArray" @click="clickSliderCircle(index)" class="circle" :class="{circleSelected:item.selected}">
   </div>
  </div>
 </div>
</template>
<script>
 const SCREEN_WIDTH=document.body.clientWidth
 const SCREEN_HEIGHT=document.body.scrollHeight
 var left,center,right
 var selectIndex=0
 var count=0
 var second=3//slider 时间间隔
 var timer=null
 var ani=null
 var debugScale=1.0//测试用可调整为小于1
 var Direction={left:'left',right:'right'};
 var autoDirection=Direction.right
 var canClick=true
 export default({
  data:function(){
   return{
    width:'100%',
    height:500+'px',
    left:300+'px',
    top:0,
    ani:true,
    translateX:'scale('+debugScale+') translateX(0px)',
    imgArray:[
     {
      x:0,
      click_url:'',
      url:'static/banner1.jpg',
      selected:false,
     },
     {
      x:0,
      click_url:'',
      url:'static/banner2.jpg',
     },
     {
      x:0,

      click_url:'',
      url:'static/banner3.jpg',
     },
     {
      x:0,
      click_url:'',
      url:'static/banner4.jpg',

     },
     {
      x:0,
      click_url:'',
      url:'static/banner5.jpg',
     }
    ],
    itemList:[]
   }
  },
  mounted:function(){
   ani=this.$refs.root.querySelector('.sliderPanel')
   count=this.imgArray.length
   this.setIndex(selectIndex)
   //自动滚动切换图片
   this.slideAuto(second)
  },
  methods:{
   clickLeft:function(){
     if(!canClick) return false
    autoDirection=Direction.left
    this.slideAuto(second)
    this.moveLeftAni()
    canClick=false
   },
   clickRight:function(){
    if(!canClick) return false
    autoDirection=Direction.right
    this.slideAuto(second)
    this.moveRightAni()
    canClick=false
   },
   slideRight:function () {
    selectIndex++
    if(selectIndex+1>count){
     selectIndex=0
    }else if(selectIndex<0){
     selectIndex=count-1
    }
    this.setIndex(selectIndex)
   },
   slideLeft:function () {
    selectIndex--
    if(selectIndex+1>count){
     selectIndex=0
    }else if(selectIndex<0){
     selectIndex=count-1
    }
    this.setIndex(selectIndex)
   },
   clickSliderCircle:function (index) {
    this.slideAuto(second)
    this.setIndexPre(index)
   },
   setIndexPre:function (index) {
    if(!canClick) return false
    canClick=false
    if(index==selectIndex)return
    var leftIndex=index
    var centerIndex=selectIndex
    var rightIndex=index
    for(var i=0;i<count;i++){
     if(i==selectIndex){
      this.imgArray[i].selected=true
     }else{
      this.imgArray[i].selected=false
     }
    }
    left=this.imgArray[leftIndex]
    center=this.imgArray[centerIndex]
    right=this.imgArray[rightIndex]
    left=JSON.parse(JSON.stringify(left))
    right=JSON.parse(JSON.stringify(right))
    left.x=-SCREEN_WIDTH
    center.x=0
    right.x=SCREEN_WIDTH
    left.index=leftIndex
    center.index=centerIndex
    right.index=rightIndex
    this.itemList=[left,center,right]
    if(index>selectIndex){
     autoDirection=Direction.right;
      +function(obj){
      obj.anicompted(
       'scale('+debugScale+') translateX('+0+'px)',
       'scale('+debugScale+') translateX('+-SCREEN_WIDTH+'px)',
       function(){
        obj.setIndex(index)
       })
     }(this)
     //右移
    }else if(index<selectIndex){
     //左移
     autoDirection=Direction.left;
     +function(obj){
      obj.anicompted(
       'scale('+debugScale+') translateX('+0+'px)',
       'scale('+debugScale+') translateX('+SCREEN_WIDTH+'px)',
       function(){
        obj.setIndex(index)
       })
     }(this)
    }
   },
   setIndex:function (index) {
    var leftIndex=index-1
    var centerIndex=index
    var rightIndex=index+1
    if(index<=0){
     index=0
     leftIndex=count-1
     centerIndex=index
     rightIndex=index+1
    }else if(index>=count-1){
     index=count-1
     leftIndex=index-1
     centerIndex=index
     rightIndex=0
    }
    selectIndex=index
    for(var i=0;i<count;i++){
      if(i==selectIndex){
       this.imgArray[i].selected=true
      }else{
       this.imgArray[i].selected=false
      }
    }
    left=this.imgArray[leftIndex]
    center=this.imgArray[centerIndex]
    right=this.imgArray[rightIndex]
    left.x=-SCREEN_WIDTH
    center.x=0
    right.x=SCREEN_WIDTH
    left.index=leftIndex
    center.index=centerIndex
    right.index=rightIndex
    this.itemList=[left,center,right]
   },
   slideAuto:function () {
     clearInterval(timer);
     +function (obj) {
      timer=setInterval(function () {
       if(autoDirection==Direction.left){
        obj.moveLeftAni()
       }else{
        obj.moveRightAni()
       }
      },second*1000)
     }(this)
   },
   moveLeftAni:function(){
     +function(obj){
      obj.anicompted(
       'scale('+debugScale+') translateX('+0+'px)',
       'scale('+debugScale+') translateX('+SCREEN_WIDTH+'px)',
       function(){
        obj.slideLeft()
       })
     }(this)
   },
   moveRightAni:function(){
    +function(obj){
      obj.anicompted(
       'scale('+debugScale+') translateX('+0+'px)',
       'scale('+debugScale+') translateX('+-SCREEN_WIDTH+'px)',
       function(){
        obj.slideRight()
       })
     }(this)
   },
   anicompted:function(fromStr,toStr,callBack){
    var handler=null,obj=this
    handler=function(){
     ani.removeEventListener('webkitTransitionEnd',handler,false)
     callBack()
     obj.ani=false
     obj.translateX=fromStr
     canClick=true
    }
    ani.removeEventListener('webkitTransitionEnd',handler,false)
    ani.addEventListener('webkitTransitionEnd',handler,false)
    this.ani=true
    this.translateX=toStr
   }
  }

 })

</script>
<style scoped>
 .transitionAni{
  transition: all 0.8s cubic-bezier(.23,1,.32,1);
 }
.sliderPanel{
  width:1000px;
}
 .arrowLeft{
  transition: all 0.4s ease;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 110px;
  top: 55%;
  background: rgba(0,0,0,0.4);
  border-radius: 6px;
 }
 .arrowLeft:hover{
  background: rgba(0,0,0,0.5);
  transform: scale(1.1);
 }
 .arrowRight{
  transition: all 0.4s ease;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 160px;
    top: 55%;
  background: rgba(0,0,0,0.4);
  border-radius: 6px;
 }
  .arrowRight img{
    width: 30px;
    height: 40px;
    margin: 10px 0px 5px 15px;
  }
  .arrowLeft img{
      width: 30px;
      height: 40px;
      margin: 10px 0px 5px 13px;
    }
 .arrowRight:hover{
  background: rgba(0,0,0,0.6);
  transform: scale(1.1);
 }
 .sliderBar{
  width:100%;
  height: 100%;
 }

 .picbox{
  width: 110%;
  height: 500px;
  position: absolute;
  top: 0;
  margin-left:100px;
  overflow: hidden;
  transition: all 0.45s ease;
 }
</style>
