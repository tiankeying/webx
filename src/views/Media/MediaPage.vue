<template>
  <div class="media-page">
    <div style="background: linear-gradient(180deg, rgba(242,224,172,0.5), rgba(255,255,255,0.5));">
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
            <span class="icon icon1"><img src="../../assets/icon.png" alt=""
                style=" width: 1.6146vw;height:.9375vw"></span>
            <span class="icon icon2"><img src="../../assets/推特.png" alt=""
                style=" width: 1.3021vw;height:1.0938vw"></span>
            <span class="icon icon3"><img src="../../assets/邮件,邮箱.png" alt=""
                style=" width: 1.25vw;height:.9375vw"></span>
          </div>
        </div>
        <form class="contact-form">
          <div class="row">
            <input type="text" :placeholder="$t('mediaPage.firstName')" />
            <input type="text" :placeholder="$t('mediaPage.lastName')" />
          </div>
          <input type="email" :placeholder="$t('mediaPage.email')"
            style="background: rgba(128,128,128,0.14);border-radius: .5208vw;" />
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
    <div style="height: 10.625vw;"></div>
  </div>
</template>
<script setup>
import GradientRectangle from '../Common/GradientRectangle.vue'
import CustomSelect from '../Common/CustomSelect.vue'; // Import the component
// 页面静态展示，无需逻辑
</script>
<style lang="sass" scoped>
.media-page
  background: #fff
  font-family: Arial, sans-serif
  .line
    // border: .0521vw solid red
    height: 5.2083vw
    background: #FFFFFF
    box-shadow: 0vw .1563vw .3646vw 0vw rgba(219,219,219,0.79)
  .intro-section
    background: linear-gradient(180deg, rgba(234,205,118,0.16), rgba(255,255,255,0.16));
    
    .intro-inner
      margin: 0 auto
      display: flex
      align-items: center
      // position: relative
      .arrow-left
        margin-left: 16.1458vw
        width: 4.1667vw
        height: 4.1667vw
      .arrow-right
        margin-right: 16.1458vw
      .intro-content
        flex: 1
        text-align: center
        
        height: 56.25vw
        margin-bottom: 3.6979vw
        padding-top: 5.2083vw
        .intro-text
          background: url('@/assets/index/插图.png') no-repeat center/contain
          margin-top: 6.25vw
          border: .0521vw solid red
          height: 44.7917vw
          width: 56.6146vw
          margin-left: auto
          margin-right: auto
        .title
          display: flex
          align-items: center
          justify-content: center
          height: 4.6875vw
          font-family: Source Han Sans SC
          font-weight: 800
          font-size: 4.6875vw
          color: #000000
          text-align: center
          margin-top: 3.9063vw
          
        .intro-desc
          width: 30.1563vw
          margin-top: 6.875vw
          margin-left: auto
          margin-right: auto
          font-family: Source Han Sans SC
          font-weight: 400
          font-size: 1.4583vw
          color: rgba(0, 0, 0, 0.7)
          line-height: 2.6042vw
        // .intro-visual
        //   width: 56.6146vw
        //   height: 44.7917vw
        //   margin: 0 auto
        //   border-radius: 50% 50% 60% 60% / 60% 60% 100% 100%
         
  .contact-section
    // background: #fafafa
    // padding: 2.9167vw 0 4.1667vw
    .contact-inner
      display: flex
      justify-content: center
      gap: 6.9792vw
      margin-top: 4.2708vw
      // align-items: center
      // justify-content: space-between
      // align-items: flex-start
    .contact-info
      width: 25.1042vw
      .contact-title
        line-height: 2.6042vw
        font-family: Alibaba PuHuiTi
        font-weight: bold
        font-size: 2.6042vw
        color: #000000
        margin-bottom: 3.6458vw
      .desc
        font-family: Source Han Sans SC
        font-weight: 400
        font-size: 1.3542vw
        color: #808080
        line-height: 2.2917vw
      .desc-p2 
          font-family: Source Han Sans SC
          font-weight: 400
          font-size: 1.3542vw
          color: #808080
          line-height: 2.2917vw  
          margin-top: 3.2813vw
          margin-bottom: 2.5vw
      .social-icons
        font-size: 1.1458vw
        margin-top: .5208vw
         
        .icon2
          margin: 0 2.6042vw
    .contact-form
      width: 37.3958vw
      display: flex
      flex-direction: column
      
      .row
        display: flex
        gap: 1.3021vw
        padding: .5208vw .625vw
        
        input
          flex: 1
          height: 2.9688vw
          background: rgba(128,128,128,0.14)
          border-radius: .5208vw
      
      input, select, textarea
        margin-bottom: 1.6667vw
        padding: .5208vw .625vw
        border: .0521vw solid #ddd
        border-radius: .2083vw
        font-size: 1.3542vw
        background: #fff
      input::placeholder, textarea::placeholder
        color: #000
        font-size: 1.3542vw
        font-family: Source Han Sans SC  
      .select-wrapper
        position: relative
        width: 100%  // 改为100%与父容器宽度一致
        margin-bottom: 1.6667vw      
      .contact-select
        width: 100%  // 改为100%而不是104%
        background: rgba(128,128,128,0.14)
        border-radius: .5208vw
        border: .0521vw solid #ddd
        outline: none
        appearance: none 
        -webkit-appearance: none
        -moz-appearance: none
        background-image: url('../../assets/index/箭头下.png')
        background-repeat: no-repeat
        background-position: right 1.5104vw center 
        background-size: 1.0938vw .7292vw
        option:hover
          background-color: #000
          color: #000               
      textarea
        height: 5vw
        background: rgba(128,128,128,0.14)
        border-radius: .5208vw
        margin-bottom: 7.3958vw
      
      // 添加呼吸动画效果
      .submit-button-container
        cursor: pointer
        display: inline-block
        
        &:hover .submit-button-css
          animation: breathe 0.6s ease-out
          transform: scale(1.05)
          
      .submit-button-css
        width: 9.5833vw
        height: 3.3854vw
        background: #000000
        border: none
        border-radius: 0.5208vw
        color: #F2C755
        font-family: Source Han Sans SC
        font-weight: bold
        font-size: 1.25vw
        cursor: pointer
        box-shadow: 0 0.2083vw 0.4167vw rgba(0, 0, 0, 0.2)
        transition: all 0.3s ease
        position: relative
        overflow: hidden
        
        &::before
          content: ''
          position: absolute
          top: 0
          left: -100%
          width: 100%
          height: 100%
          background: linear-gradient(90deg, transparent, rgba(242, 199, 85, 0.3), transparent)
          transition: left 0.5s ease
          
        &:hover::before
          left: 100%
          
        &:hover
          box-shadow: 0 0.3125vw 0.625vw rgba(0, 0, 0, 0.3)
          background: #1a1a1a
          
        &:active
          transform: translateY(0.0521vw)
          box-shadow: 0 0.1042vw 0.2083vw rgba(0, 0, 0, 0.2)
          
      // 定义呼吸动画关键帧
      @keyframes breathe
        0%
          transform: scale(1)
        30%
          transform: scale(1.1)
        100%
          transform: scale(1)  
      
      .submit-btn
        background: #000
        color: #ffe9a7
        font-weight: bold
        border: none
        border-radius: .3125vw
        padding: .5208vw 0
        font-size: .9375vw
        margin-top: .4167vw
        cursor: pointer
        width: 7.2917vw
        align-self: flex-start
        box-shadow: 0 .1042vw .2083vw #eee
      .form-tip
        margin-top: 1.1458vw
        font-family: Source Han Sans SC
        font-weight: 400
        font-size: .9375vw
        color: #000000
        line-height: 2.2917vw


      
</style>