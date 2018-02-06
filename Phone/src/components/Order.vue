<template>
<div class="zong">
<img src="static/images/background.jpg" class="dengluImg">
 <div id="order">
        <img src ="static/logo.jpg">

       <div class="con">
        <h3 class="nav">登录</h3>
                <input type="text" v-model='user.username'placeholder=" 请输入你的用户名" ><br><br>
                <input type="password" v-model='user.password' placeholder=" 请输入你的密码"><br><br>
                <bottom><input type="submit" value="登录" @click='check'></bottom>
           </div>
  </div>
  </div>
</template>

<script>
  export default{
             nameS:'Order',
             data(){
                 return {
                     user:{
                         username:'',
                         password:'',
                     }
                 }
             },
           methods: {
              check(){
               if(this.user.username == 'qaz' && this.user.password == '123'){
               alert('恭喜您，登录成功');
               window.location.href='/'
                 }
                 else{
                 alert('用户名密码错误，请重新输入')
                 }
               }
             }
          }
</script>
<style>
.zong{
width:1200px;
height:500px;
}

#order{
   width: 300px;
   height: 300px;
   margin: -450px 0px 20px 500px;
   font-family: "Microsoft YaHei";
   border-radius: 5px;
   background-color:white;
    background-color:rgba(255,255,255,0.2);
}
.dengluImg{
position:relative;
z-index:-2;
width:150%;
height:650px;
margin-top:-50px;
}
#order img{
  width: 30%;
  height: auto;
  margin: 20px 0px 0px 100px;
  opacity: 82%;
}
.con{
   text-align: center;
   margin-top:-10px;
}
.con input{
    border-radius: 3px;
    width: 200px;
    height: 30px;
    border: 0px;
}
.con bottom input{
   background-color:#5C90B6;
   color:	#ffffff;
   font-weight:bold;
}
.nav{
   color:	white;
   font-family: "Microsoft YaHei";
   margin-top:20px;
   margin-bottom:10px;
}
</style>
