<template>
  <section class="intro-section">
    <div class="intro-inner">
      <div class="arrow-left"><img src="@/assets/index/箭头左.png" alt="" /></div>
      <div class="intro-content">
        <div class="intro-text">
          <div class="title">{{ $t('homePage.weAreWebx') }} </div>
          <p class="intro-desc">{{ $t('homePage.introDesc1') }}
            {{ $t('homePage.introDesc2') }}{{ $t('homePage.introDesc3') }}</p>
          <div class="intro-visual">
            <img src="@/assets/index/插图.png" alt="WebX Illustration" class="floating-image" />
          </div>
        </div>
      </div>
      <div class="arrow-right"><img src="@/assets/index/箭头右.png" alt="" /></div>
    </div>
  </section>
</template>

<script setup>
// 可根据需要添加 props 或 emits
</script>

<style lang="scss" scoped>
// 上下浮动动画
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

// 箭头微微放大动画
@keyframes wiggle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.intro-section {
  // border: 1px solid red;
  width: 1300px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(234,205,118,0.16), rgba(255,255,255,0.16));
  .intro-inner {
    display: flex;
    align-items: center;
    .arrow-left, img {
      width: 80px;
      height: 81px;
    }
    .arrow-right, img {
      width: 80px;
      height: 81px;
    }
    .arrow-left, .arrow-right {
      cursor: pointer;
      transition: transform 0.3s ease;
      img {
        transition: transform 0.3s ease;
      }
      &:hover {
        img {
          animation: wiggle 0.6s ease-in-out;
        }
      }
    }
    .intro-content {
      flex: 1;
      text-align: center;
      width: 1087px;
      height: 860px;
      margin-top: 120px;
      // margin-bottom: 70.9997px;
      // padding-top: 100px;
      border:1px solid transparent;
      .intro-text {
        // margin-top: 120px;
        height: 860px;
        width: 1087px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        border:1px solid transparent;
        .intro-visual {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          .floating-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            width: 1087px;
            height: 860px;
            animation: float 3s ease-in-out infinite;
          }
        }
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 73px;
        font-family: Source Han Sans SC;
        font-weight: 800;
        font-size: 90px;
        color: #000000;
        text-align: center;
        margin-top: 75px;
        position: relative;
        z-index: 2;
      }
      .intro-desc {
        width: 579px;
        margin-top: 132px;
        margin-left: auto;
        margin-right: auto;
        font-family: Source Han Sans SC;
        font-weight: 400;
        font-size: 28px;
        color: rgba(0, 0, 0, 0.7);
        line-height: 50px;
        position: relative;
        z-index: 2;
         white-space: pre-wrap;
      }
    }
  }
}
</style>