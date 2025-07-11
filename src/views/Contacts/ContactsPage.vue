<template>
  <div class="media-page">
    <div class="gradient-rectangle" style="background: linear-gradient(180deg, rgba(242,224,172,0.5), rgba(255,255,255,0.5));">
      <GradientRectangle />
    </div>

    <div class="line"></div>
    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <div class="contact-title">{{ $t('mediaPage.contactUs') }}</div>
          <div class="desc">{{ $t('mediaPage.businessInquiries', { email: 'webx@webx.vip' }) }}</div>
          <div class="desc-p2">{{ $t('mediaPage.connectSocialMedia') }}</div>
          <div class="social-icons">
            <a href="https://medium.com/@webx" target="_blank" class="icon icon1"><img src="../../assets/icon.png" alt="社交图标"></a>
            <a href="https://x.com/WebX_vip" target="_blank" class="icon icon2"><img src="../../assets/推特.png" alt="推特"></a>
            <a href="mailto:webx@webx.vip" class="icon icon3"><img src="../../assets/邮件,邮箱.png" alt="邮箱"></a>
          </div>
        </div>
        <form class="contact-form">
          <div class="row">
            <input type="text" :placeholder="$t('mediaPage.firstName')" />
            <input type="text" :placeholder="$t('mediaPage.lastName')" />
          </div>
          <input type="email" :placeholder="$t('mediaPage.email')" class="custom-placeholder" />
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
    </section>
    <div class="footer"></div>
  </div>
</template>
<script setup>
import GradientRectangle from '../Common/GradientRectangle.vue'
import CustomSelect from '../Common/CustomSelect.vue'; // Import the component
// 页面静态展示，无需逻辑
</script>

<style lang="scss" scoped>
.gradient-rectangle {
  // border: 1px solid red;
  height: 980px;
}
.media-page {
  background: #fff;
  font-family: Arial, sans-serif;
  .line {
    // border: 1.0003px solid red;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 3.001px 7.0003px 0px rgba(219,219,219,0.79);
  }
  .intro-section {
    background: linear-gradient(180deg, rgba(234,205,118,0.16), rgba(255,255,255,0.16));
    // border: 1px solid red;
    height: 980px;
    .intro-inner {
      margin: 0 auto;
      display: flex;
      align-items: center;
      // position: relative;
      .arrow-left {
        margin-left: 309.9994px;
        width: 80.0006px;
        height: 80.0006px;
      }
      .arrow-right {
        margin-right: 309.9994px;
      }
      .intro-content {
        // border: 1px solid red;
        flex: 1;
        text-align: center;
        height: 980px;
        margin-bottom: 71px;
        padding-top: 100px;
        
        // .intro-visual {
        //   border: 1px solid red;
        //   width: 1087.0003px;
        //   height: 860.0006px;
        //   margin: 0 auto;
        //   border-radius: 50% 50% 60% 60% / 60% 60% 100% 100%;
        // }
      }
      .intro-text {
          background: url('@/assets/index/插图.png') no-repeat center/contain;
          margin-top: 120px;
          // border: 1.0003px solid red;
          height: 860.0006px;
          width: 1087.0003px;
          margin-left: auto;
          margin-right: auto;
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          font-family: Source Han Sans SC;
          font-weight: 800;
          font-size: 90px;
          color: #000000;
          text-align: center;
          margin-top: 75.001px;
          
        }
        .intro-desc {
          width: 579.001px;
          margin-top: 132px;
          margin-left: auto;
          margin-right: auto;
          font-family: Source Han Sans SC;
          font-weight: 400;
          font-size: 27.9994px;
          color: rgba(0, 0, 0, 0.7);
          line-height: 50.0006px;
        }
    }     
  }
  .contact-section {
    // background: #fafafa;
    // padding: 56.0006px 0 80.0006px;
    .contact-inner {
      display: flex;
      justify-content: center;
      gap: 134px;
      margin-top: 82px;
      // align-items: center;
      // justify-content: space-between;
      // align-items: flex-start;
    }
    .contact-info {
      width: 482px;
      height: 420px;
      .contact-title {
        font-family: Alibaba PuHuiTi;
        font-weight: bold;
        font-size: 50px;
        color: #000000;
        margin-bottom: 69px;
      }
      .desc {
        width: 482px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        font-size: 26px;
        color: #808080;
        line-height: 44px;
        text-align: justify;
      }
      .desc-p2 {
        width: 482px;
        text-align: justify;
          font-family: Source Han Sans SC;
          font-weight: 400;
          font-size: 26px;
          color: #808080;
          line-height: 44px;  
          margin-top: 63px;
          margin-bottom: 49px;
      }
      .social-icons {
        font-size: 22px;
        margin-top: 10px;
         
        .icon2 {
          margin: 0 50px;
        }
      }
      .icon1 img {
        width: 31px;
        height:18px;
      }
      .icon2 img {
        width: 25px;
        height:21px;
      }
      .icon3 img {
        width: 24px;
        height:18px;    
      }
      // img{
      //   width: 25px;
        
      // }
    }
    .contact-form {
      width: 693px;
      display: flex;
      flex-direction: column;
      
      .row {
        display: flex;
        justify-content: space-between;
        // gap: 25.0003px;
        // padding: 9.9994px 12px;
        margin:0 !important;
        padding: 0 !important;
        
        input {
          // flex: 1;
          width: 331px;
          // height: 57px;
          background: rgba(128,128,128,0.1);
          border-radius: 10px;
          // border: 1px solid red;
          margin:0 !important;
        padding: 0 !important;
      
        padding-left: 12px !important;
        margin-bottom: 32px !important;
        }
        input::placeholder{
          // padding-left: 12px !important;
          // color: red;
          padding: 18px 0 !important;
        }
      }
      
      input, select, textarea {
        padding-left: 12px !important;
        margin-bottom: 32px;
        height: 57px;
        border: 1px solid transparent;
        border-radius: 10px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        font-size: 26px;
        background: rgba(128,128,128,0.1);
      }
      input::placeholder, textarea::placeholder {
        padding: 0 !important;
        margin-left: 23px;
        color: #808080;
        font-size: 26px;
        font-family: Source Han Sans SC;  
      }
      .select-wrapper {
        position: relative;
        width: 100%;  // 改为100%与父容器宽度一致
        margin-bottom: 32px;     
      }
      .contact-select {
        width: 100%;  // 改为100%而不是104%
        background: rgba(128,128,128,0.1);
        border-radius: 10px;
        // border: 1px solid red;
        outline: none;
        appearance: none; 
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url('../../assets/index/箭头下.png');
        background-repeat: no-repeat;
        background-position: right 29px center; 
        background-size: 21px 14px;
        option:hover {
          background-color: #000;
          color: #000;               
        }
      }
      // .contact-select::placeholder {
      //   color: #808080;
      //   font-size: 26px;
      //   font-family: Source Han Sans SC;  
      // }
      textarea {
        height: 96px;
        background: rgba(128,128,128,0.1);
        border-radius: 10px;
        margin-bottom: 141px;
        
      }
      
      // 添加呼吸动画效果
      .submit-button-container {
        cursor: pointer;
        display: inline-block;
        
        &:hover .submit-button-css {
          animation: breathe 0.6s ease-out;
          transform: scale(1.05);
        }
      }
          
      .submit-button-css {
        width: 184px;
        height: 65px;
        background: #000000;
        border: none;
        border-radius: 10px;
        color: #F2C755;
        font-family: Source Han Sans SC;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 8.0006px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(242, 199, 85, 0.3), transparent);
          transition: left 0.5s ease;
        }
          
        &:hover::before {
          left: 100%;
        }
          
        &:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          background: #1a1a1a;
        }
          
        &:active {
          transform: translateY(1.0003px);
          box-shadow: 0 2.0006px 4px rgba(0, 0, 0, 0.2);
        }
      }
          
      // 定义呼吸动画关键帧
      @keyframes breathe {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);  
        }
      }
      
      .submit-btn {
        background: #000;
        color: #ffe9a7;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        padding: 10px 0;
        font-size: 18px;
        margin-top: 8.0006px;
        cursor: pointer;
        width: 140.0006px;
        align-self: flex-start;
        box-shadow: 0 2.0006px 3.9994px #eee;
      }
      .form-tip {
        margin-top: 22px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        line-height: 44.0006px;
      }
      
      .custom-placeholder {
        background: rgba(128,128,128,0.14);
        border-radius: 10px;
      }
    }
  }
}
.footer {
  height: 205px;        
}
</style>