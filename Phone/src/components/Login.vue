<template>
  <div>
    <div class="login">
        <div class="top-page">
          <div class="top-page-l">&nbsp;Tel：123-456-789}&nbsp;|&nbsp;E-mail：phone@163.com
              <li><a href="#" style="border-left:#000 1px solid;">&nbsp;退出用户&nbsp;</a></li>


              <router-link to="/order">
              <li><a href="/">你好，请登录&nbsp;</a>
              </li>
               </router-link>
                <router-link to="/" :class="{'cur-page': route === '/'}">
                  <li class="first"><a href="/">首页&nbsp;</a></li>
                </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="css">
a{
  font-family:"Microsoft YaHei";
	color: #000;
	text-decoration:none;
}
.first a{
display:inline-block;
margin-right:30px;
color:red;
}
.login{
	background-color: #F7F7F7;
	height: 35px;
	border-bottom: 1px solid #D8D8D8;
}
.top-page{
	width: 1230px;
	height: 35px;
	margin: 0 auto;
	font: 13px 'Microsoft YaHei';
}
.top-page-l{
    line-height: 35px;
}
.top-page-l  li{
    line-height: 35px;
    float: right;
    list-style:none;

}
a:hover {
	color:red;
}

</style>

<script>

</script>
