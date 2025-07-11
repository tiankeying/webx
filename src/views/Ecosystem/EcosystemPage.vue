<template>
  <div>
    <!-- Business Card -->
    <div class="business">
      <div class="business-card1">
        <div>
          <div class="business-card-wrapper">
            <div class="business-card-content">
              <div class="title">{{ $t('ecosystemPage.webxBusiness') }}</div>
              <div>
                <p>{{ $t('ecosystemPage.webxBusinessDescription1') }}</p>
                <p>{{ $t('ecosystemPage.webxBusinessDescription2') }}</p>
              </div>
            </div>
            <!-- <div class="business-card-btn">
              <div style="width: 90.048px; height: 24px;">{{ $t('ecosystemPage.about') }}</div>
            </div> -->
          </div>
        </div>
        <!-- WebX Business 模块 -->
        <div class="business-card-img">
          <BusinessCard :mainImage="businessMainImage" :floatingIcons="businessIcons"
            :buttonText="$t('ecosystemPage.webxBusiness')" :size="{ width: '512.0006px', height: '800px' }"
            :showButton="false" />
        </div>

      </div>
      <div class="business-btn" @click="openWebxBusiness">
        <div class="business-card-btn">
          <div>{{ $t('ecosystemPage.about') }}</div>
        </div>
      </div>
    </div>
    <!-- Game Card 模块 -->
    <div class="game-card">
      <!-- Game Card 模块 -->
      <div>
        <BusinessCardR :mainImage="gameMainImage" :floatingIcons="gameIcons" :buttonText="$t('ecosystemPage.webxGame')"
          :size="{ width: '515.1994px', height: '692.0006px' }" :showButton="false" />
      </div>
      <div class="game-card-wrapper">
        <div class="title">{{ $t('ecosystemPage.webxGame') }}</div>
        <div class="content">
          <p>{{ $t('ecosystemPage.webxGameDescription1') }}<br />
            <br /><span>{{ $t('ecosystemPage.webxGameDescription2') }}</span>
          </p>
        </div>
        <div class="business-card-btn" @click="openWebxGame">
          <div>{{ $t('ecosystemPage.about') }}</div>
        </div>
      </div>

    </div>
    <!--Collaborator  -->
    <div class="collaborator">
      <div class="collaborator-wrapper">
        <div class="title">{{ $t('ecosystemPage.webxCollaborator') }}</div>
        <div class="content1">
          <div class="content-wrapper1" @click="openWebxPay">
            <div class="card-container">
              <img :src="cardImage1" alt="" class="main-image">
            </div>
          </div>
          <div class="content-wrapper2" @click="openWebxAsset">
            <div class="card-container">
              <img :src="cardImage2" alt="" class="main-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BusinessCard from '@/views/Common/BusinessCard.vue'
import BusinessCardR from '@/views/Common/BusinessCardR.vue'
// 导入图片
import businessMainImageSrc from '@/assets/index/插图：WebX Business.png'
import gameMainImageSrc from '@/assets/index/插图：WebX Game.png'
import carIcon from '@/assets/index/汽车.png'
import dressIcon from '@/assets/index/裙子.png'
import cartIcon from '@/assets/index/购物车.png'
import rocketIcon from '@/assets/index/火箭.png'
import gameVideoIcon from '@/assets/index/游戏影片.png'
import gameConsoleIcon from '@/assets/index/游戏机.png'

// 获取当前语言
const { locale } = useI18n()
console.log(locale.value);
// 预加载所有语言图片
const images = import.meta.glob('@/assets/index/卡片*.png', { eager: true, import: 'default' })

// 根据语言动态计算卡片图片路径
const cardImage1 = computed(() => {
  return locale.value === 'en'
    ? images['/src/assets/index/卡片1E.png']
    : images['/src/assets/index/卡片1Z.png']  // 假设中文版图片为卡片1C.png
})

const cardImage2 = computed(() => {
  return locale.value === 'en'
    ? images['/src/assets/index/卡片2E.png']
    : images['/src/assets/index/卡片2Z.png']  // 假设中文版图片为卡片2C.png
})

// Business Card 数据
const businessIcons = ref([
  { src: carIcon, className: 'car', alt: '汽车图标' },
  { src: dressIcon, className: 'dress', alt: '裙子图标' },
  { src: cartIcon, className: 'cart', alt: '购物车图标' }
]);
const businessMainImage = ref(businessMainImageSrc)

const gameIcons = ref([
  { src: rocketIcon, className: 'car2', alt: '火箭图标' },
  { src: gameVideoIcon, className: 'dress2', alt: '游戏影片图标' },
  { src: gameConsoleIcon, className: 'cart2', alt: '游戏机图标' }
]);
const gameMainImage = ref(gameMainImageSrc)


const openWebxBusiness = () => {
  window.open('https://b.webx.ai', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}
const openWebxGame = () => {
  window.open('https://g.webx.ai', '_blank')
}
const openWebxPay = () => {
  window.open('https://p.webx.ai', '_blank')
}
const openWebxAsset = () => {
  window.open('https://a.webx.ai', '_blank')
}
</script>

<style lang="scss" scoped>
.business{
  margin-top: 122px;
}
.business-card1{
  display: flex;
  // border:1px solid red;
  justify-content: center;
  max-width: 1920px;
  gap: 40px;
  align-items: flex-end;
}
.business-card-content{
  // border: 1px solid red;
  min-width: 712px;
  min-height: 503px;
  max-width: 712px;
  max-height: 503px;
}
.business-card {
  display: flex;
  justify-content: center;
  // align-items: center;
  gap: 40px;
  align-items: flex-end;
  // border: 1px solid red;
  max-width: 512px;
  max-height: 648px;
  min-width: 512px;
  min-height: 648px;
}

.business-card-wrapper {
  width: 712px;
  display: flex;
  flex-direction: column;
}

.business-card-wrapper .title {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50px;
  color: #000000;
  margin-bottom: 86px;
}

.business-card-wrapper p {
  width: 712px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 26px;
  color: #808080;
  line-height: 44.0006px;
  word-break: break-word;
  text-align: justify;
}

.business-card-img {
  max-width: 510px;
  height: 594px;
  margin-left: 37.0003px;
}

.business-btn{
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.business-card-btn {
  background-image: url(@/assets/index/黄色按钮.png);
  background-size: cover;
  width: 262px;
  height: 92px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
  text-align: center;
  padding: 0 86.016px;
  margin-top: 91px;
  margin-bottom: 215px;
  line-height: 75.001px;
  cursor: pointer;
  /* 移除原有的transition */
}

.business-card-btn:hover {
  /* 触发瞬间放大然后还原的动画 */
  animation: bounce 0.6s ease-out;
}

/* 瞬间放大还原动画 */
@keyframes bounce {
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

.game-card {
  display: flex;
  // align-items: flex-end;
  justify-content: center;
  gap: 95px;
  // border: 1px solid red;
  height: 692px;
  margin-bottom: 275px;
}

.game-card-wrapper {
  // width: 650.0006px;
  // height: 692px;

}

.game-card-wrapper .title {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50.0006px;
  color: #000000;
  padding-top: 57px;
  padding-bottom: 86px;
}

.game-card-wrapper .content {
  width: 650px;
  height: 292px;
  word-break: break-word;
  text-align: justify;
  margin-bottom: 95px;
}

.game-card-wrapper p {
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 26.0006px;
  color: #808080;
  line-height: 44.0006px;

}

.game-card-wrapper span {

  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 26.0006px;
  color: #808080;
  line-height: 44.0006px;
}


.collaborator-wrapper .title {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50.0006px;
  color: #000000;
  margin-bottom: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  height: 688px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 236.0006px;
}

.content1 {
  max-width: 1300px;
  height: 688px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  margin-bottom: 236.0006px;
  transition: transform 0.3s ease;
  background-image: url(@/assets/index/图层.png);
  background-size: 50% 120%;
  background-repeat: no-repeat;
  background-position: center;
}

/* 整个content容器的悬停浮动效果 */
.content1:hover {
  transform: translateY(-10px);
  animation: float 2s ease-in-out infinite;
}

.content-wrapper1,
.content-wrapper2 {
  cursor: pointer;

}

/* 浮动动画关键帧 */
@keyframes float {

  0%,
  100% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.content-wrapper1 img {
  width: 677px;
  height: 650px;
}

.content-wrapper2 img {
  width: 675.001px;
  height: 687.001px;
}
</style>