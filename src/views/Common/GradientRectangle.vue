<template>
  <section class="intro-section">
    <div class="intro-inner">
      <div class="arrow-left"><img src="@/assets/index/箭头左.png" alt="" style="width: 4.1667vw;height:4.2188vw" /></div>
      <div class="intro-content">
        <div class="intro-text">
          <div class="title">{{ $t('homePage.weAreWebx') }} </div>
          <p class="intro-desc">{{ $t('homePage.introDesc1') }}
            {{ $t('homePage.introDesc2') }}<br />
            {{ $t('homePage.introDesc3') }}</p>
          <div class="intro-visual">
            <img src="@/assets/index/插图.png" alt="WebX Illustration" class="floating-image" />
          </div>
        </div>
      </div>
      <div class="arrow-right"><img src="@/assets/index/箭头右.png" alt="" style="width: 4.1667vw;height:4.2188vw" /></div>
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
    transform: translateY(-20px)

// 箭头微微放大动画
@keyframes wiggle
  0%, 100%
    transform: scale(1)
  50%
    transform: scale(1.1)

.intro-section
  width: 67.7083vw
  margin: 0 auto
  background: linear-gradient(180deg, rgba(234,205,118,0.16), rgba(255,255,255,0.16))
  .intro-inner
    display: flex
    align-items: center
    .arrow-left, .arrow-right
      cursor: pointer
      transition: transform 0.3s ease
      img
        transition: transform 0.3s ease
      &:hover
        img
          animation: wiggle 0.6s ease-in-out
    .intro-content
      flex: 1
      text-align: center
      height: 56.25vw
      margin-bottom: 3.6979vw
      padding-top: 5.2083vw
      .intro-text
        margin-top: 6.25vw
        height: 44.7917vw
        width: 56.6146vw
        margin-left: auto
        margin-right: auto
        position: relative
        .intro-visual
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          z-index: 1
          .floating-image
            width: 100%
            height: 100%
            object-fit: contain
            animation: float 3s ease-in-out infinite
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
        position: relative
        z-index: 2
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
        position: relative
        z-index: 2
</style>