<template>
  <div>
    <!-- WebX Business 模块 -->
    <div class="business">
      <!-- business标题 -->
      <div class="business-title">{{ $t('ecosystemPage.webxBusiness') }}</div>
      <!-- business主图 -->
      <MBusinessCard :mainImage="businessMainImage" :floatingIcons="businessIcons"
        :size="{ width: '512px', height: '556px' }" />
      <!-- business文本 -->
      <div class="business-text">
        <p>{{ $t('ecosystemPage.webxBusinessDescription1') }}</p>
        <p>{{ $t('ecosystemPage.webxBusinessDescription2') }}</p>
      </div>
      <!-- business按钮 -->
      <div class="business-button" @click="openWebxBusiness">
        {{ $t('ecosystemPage.about') }}
      </div>
    </div>

    <!-- WebX Game 模块 -->
    <div class="game">
      <!-- game标题 -->
      <div class="game-title">{{ $t('ecosystemPage.webxGame') }}</div>
      <!-- game主图 -->
      <MGameCard :mainImage="gameMainImage" :floatingIcons="gameIcons" :size="{ width: '512px', height: '556px' }" />
      <!-- game文本 -->
      <div class="game-text">
        <p>{{ $t('ecosystemPage.webxGameDescription1') }}</p>
        <p>{{ $t('ecosystemPage.webxGameDescription2') }}</p>
      </div>
      <!-- game按钮 -->
      <div class="game-button" @click="openWebxGame">
        {{ $t('ecosystemPage.about') }}
      </div>
    </div>
    <!-- Collaborator模块 -->
    <!-- 背景图 -->
    <div class="background-image">
      <!-- <img src="@/assets/m-index/橙色背景.png" alt="橙色背景"> -->
      <div class="collaborator">
        <!-- Collaborator标题 -->
        <div class="collaborator-title">{{ $t('ecosystemPage.webxCollaborator') }}</div>
        <!-- Collaborator主图 -->
        <div class="collaborator-main-image">
          <!-- 图片1 -->
          <div class="card-container1" @click="openWebxPay">
            <img :src="cardImage1" alt="" class="main-image">
          </div>
          <!-- 图片2 -->
          <div class="card-container2" @click="openWebxAsset">
            <img :src="cardImage2" alt="" class="main-image">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script setup>
import { ref,computed } from 'vue';
import MBusinessCard from '../M-Common/M-BusinessCard.vue';
import MGameCard from '../M-Common/M-GameCard.vue';
import { useI18n } from 'vue-i18n'
// 导入图片
import businessMainImage from '@/assets/index/插图：WebX Business.png'
import gameMainImage from '@/assets/index/插图：WebX Game.png'
import carIcon from '@/assets/index/汽车.png'
import dressIcon from '@/assets/index/裙子.png'
import cartIcon from '@/assets/index/购物车.png'
import rocketIcon from '@/assets/index/火箭.png'
import gameVideoIcon from '@/assets/index/游戏影片.png'
import gameConsoleIcon from '@/assets/index/游戏机.png'

// Business Card 数据
const businessIcons = ref([
  { src: carIcon, className: 'car', alt: '汽车图标' },
  { src: dressIcon, className: 'dress', alt: '裙子图标' },
  { src: cartIcon, className: 'cart', alt: '购物车图标' }
]);

const gameIcons = ref([
  { src: rocketIcon, className: 'car2', alt: '火箭图标' },
  { src: gameVideoIcon, className: 'dress2', alt: '游戏影片图标' },
  { src: gameConsoleIcon, className: 'cart2', alt: '游戏机图标' }
]);

// 获取当前语言
const { locale } = useI18n()
console.log(locale.value);
// 预加载所有语言图片
const images = import.meta.glob('@/assets/m-index/卡片*.png', { eager: true, import: 'default' })

// 根据语言动态计算卡片图片路径
const cardImage1 = computed(() => {
  return locale.value === 'en' 
    ? images['/src/assets/m-index/卡片1E.png']
    : images['/src/assets/m-index/卡片1Z.png']  // 假设中文版图片为卡片1C.png
})

const cardImage2 = computed(() => {
  return locale.value === 'en' 
    ? images['/src/assets/m-index/卡片2E.png'] 
    : images['/src/assets/m-index/卡片2Z.png']  // 假设中文版图片为卡片2C.png
})

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

<style scoped lang="scss">
.business,.game{
  
  padding: 56px 29px 0;
  width: 100%;
  max-width: 750px;
}
.business-title{
  width: 264px;
height: 29px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
}
.business-text{
  width: 691px;
height: 213px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 20px;
color: #808080;
line-height: 32px;
word-break: break-word;
margin-top: 15px;
margin-bottom: 33px;
  // text-align: justify;
}

.business-button,.game-button {
  background-image: url(@/assets/index/黄色按钮.png);
  background-size: 100% 100%;
  width: 174px;
  height: 48px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size:20px;;
  color: #000000;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  cursor: pointer;
  /* 移除原有的transition */
  margin: 0 auto;
}

.business-button:active,.game-button:active {
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

.game{
  margin-top: 93px;
}

.game-title{
  width: 213px;
height: 29px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
transform: translateY(37px);
}

.game-text{
  width: 689px;
height: 181px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 20px;
color: #808080;
line-height: 32px;
margin-top: 25px;
margin-bottom: 33px;
}

.background-image{
  margin-top: 124px;
  width: 100%;
  // height: 990px;
  background-image: url('@/assets/m-index/橙色背景.png');
  background-size: 100% 100%;
  // transform: translateY(-218px);
}

.collaborator{
  // transform: translateY(218px);
  margin: 0 6px;
}

.collaborator-title{
  width: 332px;
height: 29px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
margin-left: 23px;
transform: translateY(8px);
}

.card-container1 .main-image{
width: 735px;
height: 342px;
}

.card-container2 .main-image{
width: 735px;
height: 342px;
}
.card-container2{
  transform: translateY(-65px);
}

// .card-container1:hover, .card-container2:hover {
  
// }


</style>