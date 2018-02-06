<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__region">
            <span>Region</span>
            <select class="footer__region__select">
              <option value="en-US">USA</option>
              <option value="zh-CN">China</option>
              <option value="in">India</option>
            </select>
          </div>
          <div class="footer__secondary__nav">
            <span>&nbsp;&nbsp;&nbsp;Copyright © 2018 IMooc All Rights Reserved.</span><br/><br/>
            <a href="http://us.lemall.com/us/aboutUs.html">
              关于我们
            </a>
            <a href="http://us.lemall.com/us/termsofUse.html">
              新手指南
            </a>
            <a href="http://us.lemall.com/us/privacyPolicy.html">
              配送方式
            </a>
            <a href="http://us.lemall.com/us/privacyPolicy.html">
               支付方式
            </a>
            <a href="http://us.lemall.com/us/privacyPolicy.html">
               售后服务
             </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style>
.footer {
  background-color: #eaeaea;
  color: #333;
  position: relative;
  margin-top: 70px;
}

.footer__wrap {
  max-width: 1280px;
  margin: 0 auto;
}

.footer__primary .footer__inner {
  height: 104px;
}

.footer__secondary {
  border-top: 1px solid rgba(51, 51, 51, 0.15);
}

.footer__secondary .footer__inner {
  height: 100px;
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

.footer__region {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 36px;
}

.footer__region span {
  color: #ada9a5;
}

.footer__secondary__nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 410px;
}

.footer__secondary__nav a,
.footer__secondary__nav span {
  color: 	#696969;
  font:14px "Microsoft YaHei";
  margin-left: 3.3125em;
}
  .footer__secondary__nav a,
  .footer__secondary__nav span {
    margin-left: 1.5em;
  }
a:hover {
	color:red;
}
</style>

<script>

</script>
