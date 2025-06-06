<template>
  <div>
    <!-- 第一个盒子 -->
    <div style="background: linear-gradient(180deg,#F2E0AC, #FFFFFF)">
      <GradientRectangle />
    </div>
    <div class="homeConet">
      <p class="text-white text-center text-2xl font-bold mb-4">
        {{ $t('homePage.welcomeToWebx') }}
      </p>
      <p class="text-white text-center text-5xl font-bold mb-8">
        {{ $t('homePage.smartEngine') }}
      </p>
      <div class="flex justify-center items-center space-x-4">
        <div class="bg-white bg-opacity-20 rounded-full px-6 py-3 text-white text-lg font-semibold">
          Web3 & Al Business Accelerator
        </div>
        <div class="bg-white bg-opacity-20 rounded-full px-6 py-3 text-white text-lg font-semibold">
          Digital Infrastructure Pioneer
        </div>
      </div>
      <div class="flex justify-center items-center space-x-4 mt-4">
        <div class="bg-white bg-opacity-20 rounded-full px-6 py-3 text-white text-lg font-semibold">
          Spanning E-commerce, Payment,Entertainment
        </div>
        <div class="bg-white bg-opacity-20 rounded-full px-6 py-3 text-white text-lg font-semibold">
          Capital-Industry Synergy Hub
        </div>
        <div class="bg-white bg-opacity-20 rounded-full px-6 py-3 text-white text-lg font-semibold">
          Trillion-Dollar Market Connector
        </div>
      </div>
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t('homePage.globalPresence') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/中国.png" :alt="$t('homePage.mainlandChina')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">
            {{ $t('homePage.mainlandChina') }}
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/香港.png" :alt="$t('homePage.hongKongChina')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">
            {{ $t('homePage.hongKongChina') }}
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/迪拜.png" :alt="$t('homePage.dubai')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">{{ $t('homePage.dubai') }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/马来西亚.png" :alt="$t('homePage.malaysia')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">{{ $t('homePage.malaysia') }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/美国.png" :alt="$t('homePage.us')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">{{ $t('homePage.us') }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src="../../assets/index/欧洲.png" :alt="$t('homePage.europe')" class="w-24 h-24 mb-4" />
          <p class="text-xl font-semibold text-gray-800">{{ $t('homePage.europe') }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t('homePage.webxEcosystem') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
          <img src="../../assets/images/home/ecosystem-business.png" :alt="$t('ecosystemPage.webxBusiness')"
            class="w-24 h-24" />
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">
              {{ $t('ecosystemPage.webxBusiness') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('ecosystemPage.webxBusinessDescription1') }}
              {{ $t('ecosystemPage.webxBusinessDescription2') }}
            </p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
          <img src="../../assets/images/home/ecosystem-game.png" :alt="$t('ecosystemPage.webxGame')"
            class="w-24 h-24" />
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">
              {{ $t('ecosystemPage.webxGame') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('ecosystemPage.webxGameDescription1') }}
              {{ $t('ecosystemPage.webxGameDescription2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import BusinessCard from '@/views/Common/BusinessCard.vue'
import BusinessCardR from '@/views/Common/BusinessCardR.vue'
import GradientRectangle from '../Common/GradientRectangle.vue'
import { ref } from 'vue';

// 导入图片
import businessMainImage from '@/assets/index/插图：WebX Business.png'
import gameMainImage from '@/assets/index/插图：WebX Game.png'
import carIcon from '@/assets/index/汽车.png'
import dressIcon from '@/assets/index/裙子.png'
import cartIcon from '@/assets/index/购物车.png'
import rocketIcon from '@/assets/index/火箭.png'
import gameVideoIcon from '@/assets/index/游戏影片.png'
import gameConsoleIcon from '@/assets/index/游戏机.png'

const openWebxGame = () => {
  window.open('https://g.webx.ai', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}

const openWebxBusiness = () => {
  window.open('https://b.webx.ai', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}

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

// 手动定义39个点的位置、颜色和大小
const dots = ref([
  // 示例数据，你需要替换为实际的39个点坐标
  { x: 90, y: 270, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 125, y: 300, color: '#3126AE', size: 8, scale: 1 },
  { x: 235, y: 302, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 220, y: 345, color: '#FF3366', size: 8, scale: 1 },
  { x: 190, y: 400, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 270, y: 380, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 310, y: 245, color: '#3126AE', size: 8, scale: 1 },
  { x: 290, y: 180, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 355, y: 543, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 410, y: 578, color: '#3126AE', size: 8, scale: 1 },
  { x: 365, y: 608, color: '#FF3366', size: 8, scale: 1 },
  { x: 453, y: 630, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 495, y: 215, color: '#FF3366', size: 8, scale: 1 },
  { x: 453, y: 235, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 605, y: 435, color: '#FF3366', size: 8, scale: 1 },
  { x: 640, y: 390, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 675, y: 300, color: '#FF3366', size: 8, scale: 1 },
  { x: 710, y: 290, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 695, y: 465, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 660, y: 520, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 715, y: 620, color: '#3126AE', size: 8, scale: 1 },
  { x: 785, y: 465, color: '#FF8B1A', size: 8, scale: 1 },
  { x: 785, y: 355, color: '#FF8B1A', size: 8, scale: 1 },


]);

// 悬浮时放大
const hoverDot = (index) => {
  dots.value[index].scale = 1.5;
};

// 离开时恢复
const resetDot = (index) => {
  dots.value[index].scale = 1;
};
</script>

<style scoped lang="scss">
.homeConet01 {
  width: 100%;
  text-align: center;
  margin: 0 0 10.9375vw;
  background-image: url('../../assets/index/渐变矩形.png');
  background-repeat: no-repeat;
  /* 通常需要这个 */
  min-height: 100vw;
  /* 确保元素有高度 */
  text-align: center;
  padding: 5.5vw 16.25vw 0;
}

.homeConet01_img {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gradient-text {
  color: #191919;
}

.homeConet {
  // padding: 0 16.25vw;
  // // border: 1px solid #F2BE45;
  // margin-top: 50px;
width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 创建3列 */
  gap: .1042vw;
  /* 设置项目之间的间隙 */
  list-style: none;
  /* 去掉默认的列表样式 */
  padding: 0;
}

.grid-item1{
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/01.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  display: flex;
    // align-items: flex-end;
    /* 将内容对齐到底部 */
    justify-content: center;
    padding-top: 15.0521vw;
   }
.grid-item2 {
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/02.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
    // align-items: flex-end;
    /* 将内容对齐到底部 */
    justify-content: center;
    padding-top: 15.0521vw;
}

.grid-item3 {
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/03.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
    // align-items: flex-end;
    /* 将内容对齐到底部 */
    justify-content: center;
    padding-top: 15.0521vw;
}


.grid-item4 {
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/04.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
    // align-items: flex-end;
    /* 将内容对齐到底部 */
    justify-content: center;
    padding-top: 15.0521vw;

}
.grid-item5 {
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/05.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
    // align-items: flex-end;
    /* 将内容对齐到底部 */
    justify-content: center;
    padding-top: 15.0521vw;
}

.grid-item6 {
  width: 23.3333vw;
    height: 20.3646vw;
  background-image: url(../../assets/index/06.png);
  background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
    // align-items: flex-end;
    justify-content: center;
    /* 将内容对齐到底部 */
    padding-top: 15.0521vw;
}

.grid-container p {
  font-size: 1.0417vw;
  /* 设置文字大小 */
  font-family: Source Han Sans SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    line-height: 2.0833vw;
}
.grid-item1,
.grid-item2,
.grid-item3,
.grid-item4,
.grid-item5,
.grid-item6 {
  // ... existing code ...
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: rotate(-15deg);
  }
}


.homeConet2{
  display: flex;
  justify-content: center;
}
.homeConet2_text {
  font-family: Alibaba PuHuiTi;
    font-weight: bold;
    font-size: 2.6042vw;
  text-align: center;

  margin-bottom: 6.4583vw;
  span {
    color: #F2BE45;
  }
}

.homeConet02_text {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 2.6042vw;
  text-align: center;
  margin-top: 10vw;
  margin-bottom: 6.9792vw;

  span {
    color: #F2BE45;
  }
}

.homeConet03_text {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 2.6042vw;
  text-align: center;
  margin-top: 10vw;
  margin-bottom: 2.1354vw;

  span {
    color: #F2BE45;
  }
}

.homeConet02 {

  .homeConet02_img img {
    width: 100%;
    /* 图片宽度填满父容器 */
    height: 100%;
    /* 图片高度填满父容器 */
    object-fit: cover;
    /* 自适应填充（可选：contain/cover） */
  }

    .homeConet03 {
      display: flex;
      justify-content: center;
      align-items: center;
      // position: relative;
    }

  .homeConet03_img-1 {
    width: 4.4792vw;
    height: 4.2708vw;
    background-image: url('../../assets/index/logo.png');
    background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
    background-repeat: no-repeat;
    /* 水平居中 */
   margin-left:16.6667vw;
    // transform: translateX(68.4375vw);
    animation: rotate360 5s linear infinite;
    /* 添加旋转动画 */
    margin-bottom: 3.8542vw;
  }


  .homeConetImg{
    background-image: url('../../assets/index/地图.png');
    background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
    background-repeat: no-repeat;
    position: relative;
    width: 68.4375vw;
    height: 34.1146vw;
    .homeConetImg-dot {
        margin-top: 2.1875vw;
        margin-left: 4.5313vw;
        width: 53.0729vw;
        height: 23.9063vw;
        /* 添加上下移动动画 */
        animation: floatUpDown 3s ease-in-out infinite;
      }
  }

  /* 定义360度旋转动画 */
  @keyframes rotate360 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
      /* 初始角度 */
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
      /* 旋转360度 */
    }
  }

  
 
  // .homeConet03_img {
  // width: 68.4375vw;
  // height: 34.1146vw;
 
  //   text-align: center;
  //   // padding: 134px 0 74px;
  // }

  .dot {
    position: absolute;
    border-radius: 50%;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.8;
    cursor: pointer;
  }

  .dot:hover {
    opacity: 1;
  }

}

.homeConet03_box {
  display: grid;
    grid-template-columns: repeat(3, 1fr);
  //   /* 创建3列 */
  //   list-style: none;
    // display: flex;
    // flex-wrap: wrap;
      // justify-content: center;
      // align-items: center;
    // width: 68.75vw;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // width: 100%;
  // max-width: 1200px;
  width: 67.7083vw;
row-gap: 1.6146vw;

  /* 水平居中 */

  // margin-bottom: 274px;
}
.homeConet03_box .item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6667vw 2.5vw;
    /* 行间距和列间距可根据需要调整 */
  /* 每个item宽度，可根据实际调整 */
  margin-bottom: 0;
  margin-left: 10.4167vw;
}
.homeConet03_box .item:nth-child(3n + 1) {
  margin-left: 0;
  /* 第一列的item左外边距为0 */
}


.homeConet03_box .item img {
  width: 2.8125vw;
    height: 2.8125vw;
  object-fit: contain;
}

.homeConet03_box .item span {
  display: block;
  text-align: left;
font-size: 1.5625vw;
  color: #333;
}


.item img {
  
  object-fit: contain;
  flex-shrink: 0;
  align-self: flex-start;
  /* 图片顶部对齐 */
}

.item span {
  flex: 1;
  text-align: left;
  
  white-space: nowrap;
  /* 禁止换行 */
  line-height: 1.3;
  padding-top: .5208vw;
  /* 微调文字垂直位置 */
}

.homeConet04_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 67.7083vw;
  margin: 0 auto;
  gap: 2.0833vw;
}

.homeConet04_box>div {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 48%;
  
}

.btn-1{
  background-image: url(../../assets/index/矩形1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 20.2083vw;
  height: 7.2396vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.125vw;
  cursor: pointer;
  .text{
    font-family: Source Han Sans SC;
font-weight: 500;
font-size: 1.5625vw;
color: #000000;
text-align: center;
margin-top:-0.7813vw;
  }
  .jiantou1{
    background-image: url(../../assets/index/箭头.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 2.0313vw;
    height: 1.9792vw;
    margin-top: -0.4167vw;
  }
}
.btn-2{
  background-image: url(../../assets/index/矩形2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 20.2604vw;
  height: 7.2396vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.125vw;
  cursor: pointer;
 .text{
  font-family: Source Han Sans SC;
font-weight: 500;
font-size: 1.5625vw;
color: #000000;
text-align: center;
margin-top:-0.7813vw;
 }

.jiantou2{
  background-image: url(../../assets/index/箭头.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 2.0313vw;
  height: 1.9792vw;
  margin-top: -0.4167vw;
 }
}

.btn-1:hover,
.btn-2:hover {
  animation: bounce 0.6s ease-out;
}

/* 响应式设计 */
@media (max-width: 40vw) {
  .homeConet04_box {
    flex-direction: column;
    align-items: center;
    gap: 3.125vw;
  }

  .homeConet04_box>div {
    width: 100%;
    min-height: 31.25vw;
  }
}

/* 按钮容器 */
.btn,
.btn2 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.0833vw 0;
}

/* 统一按钮样式 */
.custom-btn {
  padding: 1.8229vw 1.3021vw;
  font-size: 1.5625vw;
  display: inline-flex;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px #F2BE45 solid;
}

.custom-icon {
  width: 2.0313vw;
  height: 2.0313vw;
  margin-left: .7813vw;
}

.main-image-wrapper {
  position: relative;
  display: inline-block;
  /* 使容器适应图片大小 */
}

.main-image {
  width: 100%;
  display: block;
}

/* 浮动动画 */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

/* 新增：上下移动动画 */
@keyframes floatUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
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


</style>