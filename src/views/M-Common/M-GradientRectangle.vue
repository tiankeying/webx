<template>
  <section class="intro-section">
    <div class="intro-inner">
      <div class="arrow-left"><img src="@/assets/index/箭头左.png" alt="" /></div>
      <div class="intro-content">
        <div class="intro-text">
          <div class="title">{{ $t('homePage.weAreWebx') }} </div>
          <p class="intro-desc">{{ $t('homePage.introDesc1') }} {{ $t('homePage.introDesc2') }}<br />{{
            $t('homePage.introDesc3') }}</p>
        </div>
        <div class="intro-visual">
          <img src="@/assets/index/插图.png" alt="WebX Illustration" class="floating-image" />
        </div>
      </div>
      <div class="arrow-right"><img src="@/assets/index/箭头右.png" alt="" /></div>
    </div>
  </section>
</template>

<script setup>
// 可根据需要添加 props 或 emits
</script>

<style lang="sass" scoped>
// 上下浮动动画
@keyframes float
  0%, 100%
    transform: translateY(0px)
  50%
    transform: translateY(10px)

// 箭头微微放大动画
@keyframes wiggle
  0%, 100%
    transform: scale(1)
  50%
    transform: scale(1.3) 

.intro-section
  border: 1px solid transparent
  background: linear-gradient(180deg, rgba(234,205,118,0.16), rgba(255,255,255,0.16))
  .intro-inner
    max-width: 750px
    width: 100%
    height: 520px
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: center
    position: relative
    .arrow-left, .arrow-right
      z-index: 200
      position: absolute
      top: 50%
      transform: translateY(-50%)
      cursor: pointer
      transition: transform 0.3s ease
      img
        width: 39px
        height: 39px
        transition: transform 0.3s ease
      &:active
        img
          animation: wiggle 0.6s ease-out
    .arrow-left
      left: 30px
    .arrow-right
      right: 30px
    .intro-content
      
      flex: 1
      text-align: center
      height: 509px
      max-width: 644px
      padding-top: 67px
      margin: 0 53px
      margin-top: 11px
      position: relative
      .intro-visual
          border: 1px solid transparent
          position: absolute
          top: 0
          left: 0
          width: 642.8px
          height: 508.6px
          z-index: 1
          .floating-image
            width: 642.8px
            max-width: 642.8px
            height: 508.6px
            object-fit: contain
            animation: float 3s ease-in-out infinite
      .intro-text
        
        width: 100%
        max-width: 644px
        display: flex
        flex-direction: column
        align-items: center
      .title
        border: 1px solid transparent
        display: flex
        align-items: center
        justify-content: center
        height: 66px
        // width: 519px
        font-family: Source Han Sans SC
        font-weight: 800
        font-size: 80px
        color: #000000
        text-align: center
        position: relative
        z-index: 2
      .intro-desc
        border: 1px solid transparent
        width: 366px
        height: 81px
        margin-top: 43px
        margin-bottom: 0
        text-align: center
        font-family: Source Han Sans SC
        font-weight: 400
        font-size: 20px
        color: rgba(0, 0, 0, 0.7)
        line-height: 30px
        position: relative
        z-index: 2
.arrow-left,
.arrow-right
  z-index: 100
</style>