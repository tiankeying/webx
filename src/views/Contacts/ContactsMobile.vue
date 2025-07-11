<template>
  <div>
    <!-- 第一个盒子 -->
    <div>
      <MGradientRectangle />
    </div>
    <!-- 隔断层 -->
    <div class="line">
    </div>
    <!-- 联系模块 -->
    <div class="contact">
      <!-- 联系标题 -->
      <div class="contact-title">
        {{ $t('mediaPage.contactUs') }}
      </div>
      <!-- 联系文本 -->
      <div class="contact-text">
        <p>{{ $t('mediaPage.businessInquiries', { email: 'webx@webx.vip' }) }}</p>
        <p>{{ $t('mediaPage.connectSocialMedia') }}</p>
      </div>
      <!-- 联系按钮 -->
      <div class="contact-button">
        <a href="https://medium.com/@webx" target="_blank" class="icon icon1"><img src="../../assets/icon.png" alt="社交图标"></a>
        <a href="https://x.com/WebX_vip" target="_blank" class="icon icon2"><img src="../../assets/推特.png" alt="推特"></a>
        <a href="mailto:webx@webx.vip" class="icon icon3"><img src="../../assets/邮件,邮箱.png" alt="邮箱"></a>
      </div>
      <!-- 表单 -->
      <div class="contact-form1">
        <form class="contact-form">
          <div class="row">
            <input type="text" :placeholder="$t('mediaPage.firstName')" />
            <input type="text" :placeholder="$t('mediaPage.lastName')" />
          </div>
          <input type="email" :placeholder="$t('mediaPage.email')"
            class="custom-placeholder" />
          <CustomSelect class="select-wrapper" />
          <textarea :placeholder="$t('mediaPage.message')"></textarea>
          <div class="submit-button-container">
            <button class="submit-button-css" type="submit">
              {{ $t('mediaPage.submit') || 'Submit' }}
            </button>
          </div>
          <div class="form-tip">{{ $t('mediaPage.submitTip') }}</div>
        </form>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';
import MGradientRectangle from '../M-Common/M-GradientRectangle.vue';
import CustomSelect from '../M-Common/M-CustomSelect.vue';
console.log('Ecosystem page loaded')
</script>

<style lang="scss" scoped>
.line {
margin-top: 7px;
width: 750px;
height: 100px;
background: #FFFFFF;
box-shadow: 0px 3px 7px 0px rgba(219,219,219,0.79);
}
.contact{
  margin: 85px 30px 0;
  // height: 1000px;
}
.contact-title{
height: 27px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
}
.contact-text{
  margin-top: 50px;
  width: 688px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 22px;
color: #808080;
line-height: 32px;
}
// .contact-text p:last-child{
//   margin-top: 29px;
// }
.contact-button{
  

.icon1 img{
  width: 56px;
  height: 33px;
}
.icon2 img{
  width: 46px;
  height: 38px;
  margin: 0 76px;
}
.icon3 img{
  width: 46px;
  height: 32px;
}
}
.contact-form1{
  margin-top: 89px;
}
.contact-form{
  // width: 619.8px;
      display: flex;
      flex-direction: column;
      .row{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-left: 0px;
        // padding: 9.9994px 12px;
        input{
          width: 330px;
height: 57px;
background: rgba(128,128,128,0.14);
border-radius: 10px;
        }
      }
}
input, select, textarea{
  border: none;
  outline: none;
  padding-left: 24px;
  font-family: Source Han Sans SC;
font-weight: 400;
font-size: 22px;
color: #000000;
line-height: 36px;
}
.custom-placeholder{
  width: 692px;
height: 57px;
background: rgba(128,128,128,0.14);
border-radius: 10px;
margin-top: 32px;
}
.select-wrapper{
  position: relative;
        width: 100%;  // 改为100%与父容器宽度一致
        margin-top: 31px;
        border: 1px solid transparent;  
}
.contact-select{
  width: 100%;  // 改为100%而不是104%
        background: rgba(128,128,128,0.14);
        border-radius: 9.9994px;
        border: 1.0003px solid #ddd;
        outline: none;
        appearance: none ;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url('../../assets/index/箭头下.png');
        background-repeat: no-repeat;
        background-position: right 30px center ;
        background-size: 21px 14px;
        option:hover{
          background-color: #000;
          color: #000 ;
        }
}

textarea{
  width: 692px;
height: 96px;
background: rgba(128,128,128,0.14);
border-radius: 10px;
margin-top: 32px;
}
.submit-button-css{
  width: 162px;
        height: 57px;
        background: #000000;
        border: none;
        border-radius: 9.9994px;
        color: #F2C755;
        font-family: Source Han Sans SC;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 3.9994px 8.0006px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        margin-top: 79px;
}
@keyframes wiggle {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.submit-button-css:active {
  animation: wiggle 0.6s ease-out;
}
.form-tip{
  margin-top: 28px;
  width: 636px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #000000;
line-height: 34px;
}
.footer{
  height: 140px;
}
          
</style>