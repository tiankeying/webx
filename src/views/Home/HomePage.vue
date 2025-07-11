<template>
  <div>
    <!-- 第一个盒子 -->
    <div style="background: linear-gradient(180deg, rgba(242,224,172,0.5), rgba(255,255,255,0.5));">
      <GradientRectangle />
    </div>
    <div class="homeConet">
      <!-- 第二个盒子 -->
      <div class="homeConet2_text"><span>{{ $t('homePage.welcome') }}</span> {{ $t('homePage.ToWebx') }}</div>
      <div class="homeConet2">

        <div class="grid-container">
          <div class="grid-item1">
            <p>{{ $t('homePage.smartEngine') }}</p>
          </div>
          <div class="grid-item2">
            <p>{{ $t('homePage.web3AlAccelerator') }}</p>
          </div>
          <div class="grid-item3">
            <p>{{ $t('homePage.digitalInfrastructurePioneer') }}</p>
          </div>
          <div class="grid-item4">
            <p style="margin: 0;line-height: 1.5; white-space: pre-wrap;">{{ $t('homePage.spanningEcommerce') }}</p>
          </div>
          <div class="grid-item5">
            <p>{{ $t('homePage.capitalIndustrySynergyHub') }}</p>
          </div>
          <div class="grid-item6">
            <p>{{ $t('homePage.trillionDollarMarketConnector') }}</p>
          </div>
        </div>

      </div>
      <!-- 第三个盒子 -->
      <div class="homeConet02">
        <div class="homeConet02_text"> {{ $t('homePage.globalPresence') }} <span> {{ $t('homePage.global') }}</span> {{
          $t('homePage.presence') }}</div>
        <div class="homeConet03" ref="mapSectionRef">
          <div class="homeConetImg">
            <img src="../../assets/index/地图.png" alt="World Map" class="homeConetImg-dot">
          </div>
          <div class="homeConet03_img-1">
          </div>
          <div class="map-markers-overlay">
            <div class="map-marker" id="marker-europe">
              <img src="../../assets/index/欧洲.png" alt="Europe"><span>{{ $t('homePage.europe') }}</span>
            </div>
            <div class="map-marker" id="marker-us">
              <img src="../../assets/index/美国.png" alt="US"><span>{{ $t('homePage.us') }}</span>
            </div>
            <div class="map-marker" id="marker-dubai">
              <img src="../../assets/index/迪拜.png" alt="Dubai"><span>{{ $t('homePage.dubai') }}</span>
            </div>
            <div class="map-marker" id="marker-malaysia">
              <img src="../../assets/index/马来西亚.png" alt="Malaysia"><span>{{ $t('homePage.malaysia') }}</span>
            </div>
            <div class="map-marker" id="marker-hk">
              <img src="../../assets/index/香港.png" alt="Hong Kong"><span>{{ $t('homePage.hongKongChina') }}</span>
            </div>
            <div class="map-marker" id="marker-mainland-china">
              <img src="../../assets/index/中国.png" alt="Mainland China"><span>{{ $t('homePage.mainlandChina') }}</span>
            </div>
          </div>
        </div>
        <!-- <div class="homeConet03_img-1"></div>  -->
        <!-- This is the rotating logo, check its position if it overlaps -->
      </div>
      <!-- Old homeConet03_box is now integrated into map-markers-overlay -->

      <!-- 第四个盒子 -->
      <div class="homeConet02">
        <div class="homeConet03_text"> {{ $t('homePage.webx') }}<span> {{ $t('homePage.Ecosystem') }}</span> </div>
        <div class="homeConet04_box">
          <!-- WebX Business 模块 -->
          <div class="business-card1">
            <BusinessCard :mainImage="businessMainImage" :floatingIcons="businessIcons" :showButton="false"
            buttonText="WebX Business" :size="{ width: '512px', height: '600px' }" />
          </div>

          <!-- WebX Game 模块 -->
          <div class="game-card1">
            <BusinessCardR :mainImage="gameMainImage" :floatingIcons="gameIcons" :showButton="false"
            buttonText="WebX Game" :size="{ width: '472px', height: '634px' }" />
          </div>
        </div>
        <div class="btn-box">
          <div class="btn-1" @click="openWebxBusiness">
            <div class="text" style="text-align: justify;">{{ $t('ecosystemPage.webxBusiness') }}</div>
            <div class="jiantou1"></div>
          </div>
          <div class="btn-2" @click="openWebxGame">
            <div class="text" style="text-align: justify;">{{ $t('ecosystemPage.webxGame') }}</div>
            <div class="jiantou2"></div>
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
import { ref, onMounted, onUnmounted } from 'vue';


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

const mapSectionRef = ref(null);
const markersAnimated = ref(false);
let mapObserver = null;

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.1,
  };

  mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); // Add is-visible to the map container itself
        if (!markersAnimated.value) {
          const markers = entry.target.querySelectorAll('.map-marker');
          markers.forEach(marker => marker.classList.add('is-floating'));
          const globalIcon = entry.target.querySelector('.global-connection-icon');
          if (globalIcon) globalIcon.classList.add('is-floating'); // Also animate global icon
          markersAnimated.value = true;
        }
      } else {
        // Optional: remove animation when out of view to re-trigger or save resources
        // if (markersAnimated.value) {
        //   const markers = mapSectionRef.value.querySelectorAll('.map-marker');
        //   markers.forEach(marker => marker.classList.remove('is-floating'));
        //   markersAnimated.value = false;
        // }
      }
    });
  }, options);

  if (mapSectionRef.value) {
    mapObserver.observe(mapSectionRef.value);
  }
});

onUnmounted(() => {
  if (mapObserver && mapSectionRef.value) {
    mapObserver.unobserve(mapSectionRef.value);
  }
  if (mapObserver) {
    mapObserver.disconnect();
  }
});

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
  margin: 0 0 210px;
  background-image: url('../../assets/index/渐变矩形.png');
  background-repeat: no-repeat;
  /* 通常需要这个 */
  min-height: 1920px;
  /* 确保元素有高度 */
  text-align: center;
  padding: 105.6px 312px 0;
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
  // padding: 0 312px;
  // // border: .0521vw solid #F2BE45;
  // margin-top: 2.6042vw;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 创建3列 */
  gap: 2.0006px;
  /* 设置项目之间的间隙 */
  list-style: none;
  /* 去掉默认的列表样式 */
  padding: 0;
}

.grid-item1 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/01.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  display: flex;
  // align-items: flex-end;
  /* 将内容对齐到底部 */
  justify-content: center;
  padding-top: 289.0003px;
}

.grid-item2 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/02.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  // align-items: flex-end;
  /* 将内容对齐到底部 */
  justify-content: center;
  padding-top: 289.0003px;
}

.grid-item3 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/03.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  // align-items: flex-end;
  /* 将内容对齐到底部 */
  justify-content: center;
  padding-top: 289.0003px;
}


.grid-item4 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/04.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  // align-items: flex-end;
  /* 将内容对齐到底部 */
  justify-content: center;
  padding-top: 289.0003px;

}

.grid-item5 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/05.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  // align-items: flex-end;
  /* 将内容对齐到底部 */
  justify-content: center;
  padding-top: 289.0003px;
}

.grid-item6 {
  width: 447.9994px;
  height: 391.0003px;
  background-image: url(../../assets/index/06.png);
  background-size: 100% 100%;
  /* 背景图大小调整为与div一样大 */
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  // align-items: flex-end;
  justify-content: center;
  /* 将内容对齐到底部 */
  padding-top: 289.0003px;
}

.grid-container p {
  font-size: 20.0006px;
  /* 设置文字大小 */
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  line-height: 39.9994px;
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


.homeConet2 {
  display: flex;
  justify-content: center;
  
}

.homeConet2_text {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-top: 210px;
  margin-bottom: 124px;

  span {
    color: #F2BE45;
  }
}

.homeConet02_text {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50.0006px;
  text-align: center;
  margin-top: 192px;
  margin-bottom: 134.0006px;

  span {
    color: #F2BE45;
  }
}

.homeConet03_text {
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50.0006px;
  text-align: center;
  margin-top: 192px;
  margin-bottom: 40.9997px;

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
    position: relative; // Changed to relative for absolute positioning of children
    width: 100%; // Ensure it spans to center map content if needed
    // display: flex; // Removed as children are absolutely positioned or block
    // justify-content: center;
    // align-items: center;
  }

  .homeConet03_img-1 {
    max-width: 100px;
    min-width: 100px;
    max-height: 96px;
    min-height: 96px;
    background-image: url('../../assets/index/logo (1).png');
    background-size: 100% 100%;
    /* 背景图大小调整为与div一样大 */
    background-repeat: no-repeat;
    margin: 0;
    /* 水平居中 */
    // margin-left: 275px;
    // transform: translateX(1314px);
    animation: rotate360 5s linear infinite;
    /* 添加旋转动画 */
    // margin-bottom: 74.0006px;
    position: absolute;
    top: 751px;
    left: 309px;
  }


  .homeConetImg {
    background-image: url('../../assets/index/矩形 1.png'); // This should be the dark blue background from your image
    background-size: cover; // Or 100% 100% if it's a specific shape
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 1920px; // Or a specific width like 1200px with margin auto
    max-width: 1920px; // Example max width
    height: 944px; // Adjust as needed, or use aspect-ratio
    // display: flex; // To center the map image if it's smaller than container
    // justify-content: center;
    // align-items: center;
    overflow: hidden; // Prevent markers from appearing outside if map is smaller
    max-height: 944px;
    
    .homeConetImg-dot {
      // This is the actual world map image with continents/lines
      display: block;
      min-width: 1563px; // Make map responsive within its container
        min-height: 707px;
      max-width: 1563px; // Make map responsive within its container
      max-height: 707px;
      // height: auto; // Maintain aspect ratio
      object-fit: contain; // Ensure whole map is visible, or 'cover'
      // border: 1px solid red;
      margin-top: 140px;
        margin-left: 200px;
    }
  }

  /* 定义360度旋转动画 */
  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
      /* 初始角度 */
    }

    to {
      transform: rotate(360deg);
      /* 旋转360度 */
    }
  }



  // .homeConet03_img {
  // width: 1314px;
  // height: 655.0003px;

  //   text-align: center;
  //   // padding: 6.9792vw 0 3.8542vw;
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

/* Styles for .homeConet03_box and its .item are replaced by .map-markers-overlay and .map-marker */

.map-markers-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Container doesn't block map interactions */
}

@keyframes floatUpDownAnimation {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
    /* Adjust float height */
  }
}

.map-marker {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  pointer-events: auto;
  /* Markers can be interacted with if needed */
  opacity: 0;
  /* Initially hidden for scroll animation */
  transform: translateY(20px);
  /* Start slightly lower for entry animation */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  img {
    width: 85px;
    /* Adjust size as per your image */
    height: 87px;
    // margin-bottom: 47px;
  }

  span {
    font-family: Source Han Sans SC;
      font-weight: bold;
      font-size: 28px;
      color: #F2BE45;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    /* Optional: text shadow for readability */
  }
}

.map-marker.is-floating {
  opacity: 1;
  transform: translateY(0);
  animation: floatUpDownAnimation 3s ease-in-out infinite 0.5s;
  /* 0.5s delay after appearing */
}

/* Adjusted positions based on the provided image. These are estimates and might need fine-tuning. */
/* These are relative to the .map-markers-overlay container (which covers .homeConetImg) */
#marker-europe {
  top: 169px;
  left: 904px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  span{
    margin-left: 16px;
  }
}

#marker-us {
  width: 330px;
  min-width: 208px;
  max-width: 330px;
  top: 224px;
  left: 556px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  span {
    margin-left: 22px;
  }
}

#marker-dubai {
  top: 310px;
  left: 1072px;
  border: 1px solid transparent;
  span{
    margin-top: 50px;
  }
}

#marker-malaysia {
  top: 474px;
  left: 1438px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  span{
    margin-left: 22px;
  }
}

#marker-hk {
  width: 190px;
  min-width: 178px;
  max-width: 190px;
  top: 350px;
  left:1227px;
  border: 1px solid transparent;
  span {
    margin-top: 41px;
  }
}

/* Hong Kong, China */
#marker-mainland-china {
  // width: 300px;
  min-width: 199px;
  max-width: 230px;
  top: 315px;
  left: 1345px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  
}

/* Mainland China */

.global-connection-icon {
  position: absolute;
  bottom: 10%; // Adjust as needed
  left: 5%; // Adjust as needed
  width: 60px; // Adjust size
  height: 60px; // Adjust size
  opacity: 0; // For scroll animation
  transform: scale(0.5) translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.homeConet03.is-visible .global-connection-icon,
.global-connection-icon.is-floating {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.global-connection-icon.is-floating {
  animation: floatUpDownAnimation 3.5s ease-in-out infinite alternate 0.5s;
  /* 0.5s delay after appearing */
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
  padding-top: 9.9994px;
  /* 微调文字垂直位置 */
}

.homeConet04_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1326px;
  max-height: 650px;
  min-width: 1326px;
    min-height: 650px;
  margin: 0 280px;
  gap: 40px;
  border: 1px solid transparent;
}

.business-card1{
  width: 512px;
  height: 594px;
  border: 1px solid transparent;
}

.game-card1{
  width: 472px;
  height: 634px;
  margin-right: 33px;
  border: 1px solid transparent;
}

.homeConet04_box>div {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 48%;
}

.btn-1 {
  background-image: url(../../assets/index/矩形1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 388px;
  height: 139px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 0 60px;
  cursor: pointer;
border: 1px solid transparent;
  .text {
    font-family: Source Han Sans SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    text-align: center;
    margin-top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* 水平居中文字（多行时） */
    width: 100%;
    height: 100%;
  }

  .jiantou1 {
    background-image: url(../../assets/index/箭头.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 39px;
    height: 38px;
    margin-top: -8px;
    border: 1px solid transparent;
  }
}

.btn-2 {
  background-image: url(../../assets/index/矩形2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 389px;
  height: 139px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  cursor: pointer;
border: 1px solid transparent;
  .text {
    font-family: Source Han Sans SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    text-align: center;
    margin-top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* 水平居中文字（多行时） */
    width: 100%;
    height: 100%;
  }

  .jiantou2 {
    background-image: url(../../assets/index/箭头.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 39px;
    height: 38px;
    margin-top: -8px;
  }
}

.jiantou1,
.jiantou2 {
  margin-left: 12px;
  /* 让箭头和文字有间距 */
  display: flex;
  align-items: center;
}

.btn-1:hover,
.btn-2:hover {
  animation: bounce 0.6s ease-out;
}

/* 响应式设计 */
// @media (max-width: 768px) {
//   .homeConet04_box {
//     flex-direction: column;
//     align-items: center;
//     gap: 60px;
//   }

//   .homeConet04_box>div {
//     width: 100%;
//     min-height: 600px;
//   }
// }

/* 按钮容器 */
.btn,
.btn2 {
  width: 100%;
  max-width: 388px;
  min-width: 388px;
  height: 139px;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

/* 统一按钮样式 */
.custom-btn {
  padding: 35px 25px;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  background-color: #FFFFFF;
  border: .0521vw #F2BE45 solid;
}

.custom-icon {
  width: 39px;
  height: 39px;
  margin-left: 15px;
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

  0%,
  100% {
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

.btn-box {
  display: flex;
  justify-content: space-between;
  max-width: 1180px; // 与 .homeConet04_box 保持一致
  min-width: 1164px;
  margin: 0 auto;
  margin-bottom: 239px;
}

/* Ensure the main map container (.homeConet02) has a clear background if map image is transparent */
.homeConet02 {
  // If the map image itself (地图.png) doesn't have the blue background from your screenshot,
  // you might need to set it on .homeConetImg or .homeConet03
  // For example, if 矩形 1.png is just a blue rectangle, and 地图.png is transparent with just continents/lines:
  // .homeConetImg { background-color: #0A2540; } // Example dark blue
}
</style>