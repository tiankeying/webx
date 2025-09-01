<template>
  <div class="home-mobile">
    <!-- 第一个盒子 -->
    <div>
      <MGradientRectangle />
    </div>
    <!-- 第二个盒子 -->
    <div class="homeConet1">
      <div class="homeConet1_text"><span>{{ $t('homePage.welcome') }}</span> {{ $t('homePage.ToWebx') }}</div>
      <div class="grid-container">
        <div class="grid-item1" @click="animateItem('item1')" :class="{ 'tilt-animation': activeItem === 'item1' }">
          <p>{{ $t('homePage.smartEngine') }}</p>
        </div>
        <div class="grid-item2" @click="animateItem('item2')" :class="{ 'tilt-animation': activeItem === 'item2' }">
          <p>{{ $t('homePage.web3AlAccelerator') }}</p>
        </div>
        <div class="grid-item3" @click="animateItem('item3')" :class="{ 'tilt-animation': activeItem === 'item3' }">
          <p>{{ $t('homePage.digitalInfrastructurePioneer') }}</p>
        </div>
        <div class="grid-item4" @click="animateItem('item4')" :class="{ 'tilt-animation': activeItem === 'item4' }">
          <p style="margin: 0;line-height: 1.5;width: 145px;max-width: 145px;white-space: pre-line;">{{ $t('homePage.spanningEcommerce') }}</p>
        </div>
        <div class="grid-item5" @click="animateItem('item5')" :class="{ 'tilt-animation': activeItem === 'item5' }">
          <p>{{ $t('homePage.capitalIndustrySynergyHub') }}</p>
        </div>
        <div class="grid-item6" @click="animateItem('item6')" :class="{ 'tilt-animation': activeItem === 'item6' }">
          <p>{{ $t('homePage.trillionDollarMarketConnector') }}</p>
        </div>
      </div>
    </div>
    <!-- 第三个盒子 -->
    <div class="homeConet2">
      <div class="homeConet2_text"> {{ $t('homePage.globalPresence') }}<span> {{ $t('homePage.global') }}</span> {{
        $t('homePage.presence') }}</div>
      <!-- 地图 - 修改开始 -->
      <div class="homeConet03 mobile-map-container" ref="mapSectionRef"> <div class="homeConetImg">
          <img src="../../assets/m-index/地图.png" alt="World Map" class="homeConetImg-dot">
        </div>
        <div class="homeConet03_img-1 mobile-logo">
        </div>
        <div class="map-markers-overlay">
          <div class="map-marker" id="marker-europe-mobile">
            <img src="../../assets/index/欧洲.png" alt="Europe"><span>{{ $t('homePage.europe') }}</span>
          </div>
          <div class="map-marker" id="marker-us-mobile">
            <img src="../../assets/index/美国.png" alt="US"><span>{{ $t('homePage.us') }}</span>
          </div>
          <div class="map-marker" id="marker-dubai-mobile">
            <img src="../../assets/index/迪拜.png" alt="Dubai"><span>{{ $t('homePage.dubai') }}</span>
          </div>
          <div class="map-marker" id="marker-malaysia-mobile">
            <img src="../../assets/index/马来西亚.png" alt="Malaysia"><span>{{ $t('homePage.malaysia') }}</span>
          </div>
          <div class="map-marker" id="marker-hk-mobile">
            <img src="../../assets/index/香港.png" alt="Hong Kong"><span>{{ $t('homePage.hongKongChina') }}</span>
          </div>
          <div class="map-marker" id="marker-mainland-china-mobile">
            <img src="../../assets/index/中国.png" alt="Mainland China"><span>{{ $t('homePage.mainlandChina')
              }}</span>
          </div>
        </div>
      </div>
      <!-- 地图 - 修改结束 -->
    </div>
    <!-- 第四个盒子 -->
    <div class="homeConet3">
      <div class="homeConet3_text"> {{ $t('homePage.webx') }}<span> {{ $t('homePage.Ecosystem') }}</span> </div>
      <!-- WebX Business 模块 -->
      <MBusinessCard :mainImage="businessMainImage" :floatingIcons="businessIcons"
        :size="{ width: '512px', height: '556px' }" />
      <!-- 按钮 -->
      <div class="homeConet3_btn1" @click="openWebxBusiness">
        <div class="text" style="text-align: justify;">{{ $t('ecosystemPage.webxBusiness') }}</div>
        <div class="jiantou1"></div>
      </div>

      <!-- WebX Game 模块 -->
      <MGameCard :mainImage="gameMainImage" :floatingIcons="gameIcons" :size="{ width: '508.7px', height: '623px' }" />
      <!-- 按钮 -->
      <div class="homeConet3_btn2" @click="openWebxGame">
        <div class="text" style="text-align: justify;">{{ $t('ecosystemPage.webxGame') }}</div>
        <div class="jiantou2"></div>
      </div>

      <!-- 视频播放器部分 -->
      <div class="mobile-video-section">
        <div class="homeConet3_text">{{ $t('homePage.title') }}</div>
        <section class="section hub-showcase mobile-hub-showcase">
          <video ref="videoPlayer" class="rounded-video mobile-rounded-video" loop :muted="isMuted" playsinline @ended="isPlaying = false" :key="locale">
            <source :src="videoSource" type="video/mp4">
            {{ $t('contactsPage.videoNotSupported') }}
          </video>

          <div class="video-overlay mobile-video-overlay" :class="{ 'playing': isPlaying }" @click="togglePlayPause">
            <img :src="isPlaying ? playIcon : pauseIcon" alt="Play/Pause Button" class="play-pause-btn mobile-play-pause-btn"
              :class="{ 'clicked': isAnimating }" />
            <!-- 静音按钮 -->
            <button @click.stop="toggleMute" class="mute-btn mobile-mute-btn">
              {{ isMuted ? '🔇' : '🔊' }}
            </button>
          </div>
          <!-- 视频进度条 -->
          <div class="video-progress-container mobile-progress-container" @click="seekVideo">
            <div class="video-progress-bar">
              <div class="video-progress-fill" :style="{ width: progressPercentage + '%' }"></div>
              <div class="video-progress-thumb" :style="{ left: progressPercentage + '%' }"></div>
            </div>
            <div class="video-time-display">
              <span class="current-time">{{ formatTime(currentTime) }}</span>
              <span class="duration">{{ formatTime(duration) }}</span>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue'; // 新增 onMounted, onUnmounted
import MGradientRectangle from '../M-Common/M-GradientRectangle.vue';
import MBusinessCard from '../M-Common/M-BusinessCard.vue';
import MGameCard from '../M-Common/M-GameCard.vue';
// import Navbar from '../../components/Navbar.vue'

// 导入图片
import businessMainImage from '@/assets/index/插图：WebX Business.png'
import gameMainImage from '@/assets/index/插图：WebX Game.png'
import carIcon from '@/assets/index/汽车.png'
import dressIcon from '@/assets/index/裙子.png'
import cartIcon from '@/assets/index/购物车.png'
import rocketIcon from '@/assets/index/火箭.png'
import gameVideoIcon from '@/assets/index/游戏影片.png'
import gameConsoleIcon from '@/assets/index/游戏机.png'

import ENvideo from '../../assets/m-index/（压缩手机版）WebX-企宣视频英文版English.mp4';
import ZHVideo from '../../assets/m-index/（压缩手机版）WebX-企宣视频 中英文双语字幕版.mp4';
import playIcon from '../../assets/index/播放.png';
import pauseIcon from '../../assets/index/暂停.png';


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

const { t, locale } = useI18n()

// 视频播放器相关变量
const videoPlayer = ref(null);
const isPlaying = ref(false);
const isAnimating = ref(false);
const isMuted = ref(true);

// 进度条相关变量
const currentTime = ref(0);
const duration = ref(0);
const progressPercentage = computed(() => {
  return duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0;
});

// 根据语言动态切换视频源
const videoSource = computed(() => {
  if (locale.value === 'en') {
    return ENvideo; // 英文视频
  } else {
    return ZHVideo; // 中文视频
  }
});

// 播放/暂停切换函数
const togglePlayPause = () => {
  if (videoPlayer.value) {
    if (isPlaying.value) {
      videoPlayer.value.pause();
    } else {
      videoPlayer.value.play();
    }
    // 触发动画
    isAnimating.value = true;
    setTimeout(() => {
      isAnimating.value = false;
    }, 1000); // 动画持续1秒
  }
};

// 切换静音状态的函数
const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted;
    isMuted.value = videoPlayer.value.muted;
  }
};

// 格式化时间显示
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// 点击进度条跳转视频
const seekVideo = (event) => {
  if (videoPlayer.value && duration.value > 0) {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration.value;
    videoPlayer.value.currentTime = newTime;
  }
};

// 更新视频时间
const updateVideoTime = () => {
  if (videoPlayer.value) {
    currentTime.value = videoPlayer.value.currentTime;
    duration.value = videoPlayer.value.duration || 0;
  }
};

const activeItem = ref(null);

const animateItem = (itemName) => {
  activeItem.value = itemName;
  setTimeout(() => {
    activeItem.value = null; // 动画结束后移除类
  }, 600); // 动画时长为0.6s
};

// 绑定视频事件监听器的函数
const bindVideoEvents = () => {
  if (videoPlayer.value) {
    videoPlayer.value.addEventListener('play', () => {
      isPlaying.value = true;
    });
    videoPlayer.value.addEventListener('pause', () => {
      isPlaying.value = false;
    });
    videoPlayer.value.addEventListener('timeupdate', updateVideoTime);
    videoPlayer.value.addEventListener('loadedmetadata', updateVideoTime);
    videoPlayer.value.addEventListener('durationchange', updateVideoTime);
    // 初始状态检查，如果视频自动播放，则设置isPlaying为true
    if (videoPlayer.value.autoplay) {
      isPlaying.value = true;
    }
  }
};

// 监听语言变化，重新绑定视频事件
watch(locale, async () => {
  await nextTick(); // 等待DOM更新
  bindVideoEvents();
});

// 新增地图相关逻辑 开始
const mapSectionRef = ref(null);
const markersAnimated = ref(false);
let mapObserver = null;

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.1, // 元素可见10%时触发
  };

  mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (!markersAnimated.value) {
          const markers = entry.target.querySelectorAll('.map-marker');
          markers.forEach(marker => marker.classList.add('is-floating'));
          // const globalIcon = entry.target.querySelector('.global-connection-icon'); // 如果需要，可以添加全局图标
          // if (globalIcon) globalIcon.classList.add('is-floating');
          markersAnimated.value = true;
        }
      } else {
        // 可选：移出视口时移除动画，以便重新触发或节省资源
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

  // 初始绑定视频事件
  bindVideoEvents();
});

onUnmounted(() => {
  if (mapObserver && mapSectionRef.value) {
    mapObserver.unobserve(mapSectionRef.value);
  }
  if (mapObserver) {
    mapObserver.disconnect();
  }
});
// 新增地图相关逻辑 结束

// const backgroundImage = new URL('@/assets/static/index_img/OpenVault-1.png', import.meta.url).href;
// const currentBackgroundImage = ref(backgroundImage);
const openWebxGame = () => {
  try {
    const newWindow = window.open('https://g.webx.ai', '_blank')
    if (!newWindow) {
      // 如果弹窗被阻止，使用当前页面跳转
      window.location.href = 'https://g.webx.ai'
    }
  } catch (error) {
    console.error('打开链接失败:', error)
    window.location.href = 'https://g.webx.ai'
  }
}

const openWebxBusiness = () => {
  try {
    const newWindow = window.open('https://b.webx.ai', '_blank')
    if (!newWindow) {
      window.location.href = 'https://b.webx.ai'
    }
  } catch (error) {
    console.error('打开链接失败:', error)
    window.location.href = 'https://b.webx.ai'
  }
}



</script>

<style scoped lang="scss">
.home-mobile{
  width: 100%;
}

.homeConet1,.homeConet2,.homeConet3 {
  width: 100%;
}

.homeConet1_text,
.homeConet2_text,
.homeConet3_text {
  text-align: center;
  line-height: 29px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 36px;
  span {
    color: #F2BE45;
  }
}

.homeConet1{
margin-top: 98px;
}
.homeConet1_text{
  margin-bottom: 33px;
}
.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
gap: 13px 14px; // 新增：行间距13px，列间距14px
  /* 设置项目之间的间隙 */
  list-style: none;
  /* 去掉默认的列表样式 */
  padding: 0;
}

/* 新增倾斜动画 */
@keyframes tilt-effect {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.tilt-animation {
  animation: tilt-effect 0.6s ease-in-out;
}

.grid-item1,
.grid-item2,
.grid-item3,
.grid-item4,
.grid-item5,
.grid-item6 {
  width: 338px;
    height: 289px;
    background-size: 100% 100%;
      /* 背景图大小调整为与div一样大 */
      background-repeat: no-repeat;
      text-align: center;
      display: flex;
      align-items: flex-end;
      /* 将内容对齐到底部 */
        justify-content: center;
        // border: 1px solid #ccc;
        border-radius: 10px; /* 新增：10px 圆角 */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 新增：卡片阴影效果 */
  background-image: url('../../assets/m-index/01.png');
  
}

.grid-item2 {
  background-image: url('../../assets/m-index/02.png');
 
}

.grid-item3 {
  background-image: url('../../assets/m-index/03.png');
}


.grid-item4 {
  background-image: url('../../assets/m-index/04.png');
}

.grid-item5 {
  background-image: url('../../assets/m-index/05.png');
}

.grid-item6 {
  background-image: url('../../assets/m-index/06.png');
}

.grid-container p {
  font-size: 18px;
  /* 设置文字大小 */
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  line-height: 40px;
  margin: 0;
  padding-bottom:30px;
  width: 290px;
}

.homeConet2 {
  margin-top: 106px;
}

.homeConet2_text{
  margin-bottom: 45px;
}

// 新增 HomePage.vue 中的地图相关样式，并进行移动端适配
.homeConet03.mobile-map-container {
  position: relative;
  width: 100%;
  margin: 0 auto; // 居中
  // 根据需要调整高度，或者让内容撑开
}

.homeConetImg {
  background-image: url('../../assets/index/矩形 1.png'); // 深蓝色背景图
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 750px;
  max-width: 750px; // 移动端通常占满宽度
  // margin: 0 auto;
  height: 424.2px; // 高度自适应，或设定一个基于视口的高度，例如 60vh
  min-height: 424.2px; // 最小高度，防止内容过少时塌陷
  display: flex;
  // justify-content: center;
  // align-items: center;
  overflow: hidden;

  .homeConetImg-dot {
    display: block;
    max-width: 750px; // 地图图片在容器内的最大宽度
    width: 750px;
    max-height: 358px; // 地图图片最大高度，根据实际图片调整
    margin-top: 36px;
    margin-bottom: 30px;
    object-fit: contain;
    border: 1px solid transparent;
  }
}

.homeConet03_img-1.mobile-logo {
  border: 1px solid transparent;
  // 移动端旋转logo样式
  max-width: 46px; // 调整大小
  min-width: 46px;
  max-height: 45px;
  min-height: 45px;
  background-image: url('../../assets/index/logo (1).png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  // 调整定位，使其在移动端地图的合适位置
  bottom: 30px; 
  left: 30px; 
  animation: rotate360Logo 5s linear infinite; // 使用新的动画名以避免冲突
}

.map-markers-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; 
}

@keyframes floatUpDownAnimation {
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); } // 调整浮动高度
}

.map-marker {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  pointer-events: auto;
  opacity: 0;
  transform: translateY(10px); // 调整初始位移
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  img {
    width: 43px; // 调整图标大小
    height: 45px;
    // margin-bottom: 16px; // 调整图标与文字间距
  }

  span {
    font-size: 14px; // 调整文字大小
    // color: #FFFFFF;
    color: #F2BE45;
    font-weight: bold;
    font-family: 'Source Han Sans SC';
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
}

.map-marker.is-floating {
  opacity: 1;
  transform: translateY(0);
  animation: floatUpDownAnimation 3s ease-in-out infinite 0.5s;
}

// 针对移动端调整标记点的位置
// 注意：这些百分比是相对于 .map-markers-overlay (即 .homeConetImg) 的
// 您需要根据实际地图图片和布局进行精确调整
#marker-europe-mobile { 
  top: 50px;
  left:327px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  span{
    margin-left: 8px;
  }
  }
#marker-us-mobile { 
  top: 77px;
  left:150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  span{
    margin-left: 10px;
  } 
  } // 示例，美国在地图上偏左上
#marker-dubai-mobile { top: 123px; left: 412px; span{
    margin-top: 25px;
  } }
#marker-malaysia-mobile { top:200px; left: 594px; flex-direction: row;
  align-items: center;
  border: 1px solid transparent;span{
    margin-left: 11px;
  }}
#marker-hk-mobile { top: 141px; left: 481px; min-width: 101px;
  max-width: 108px;span{
    margin-top: 21px;
  }} // 香港
#marker-mainland-china-mobile { top: 124px; left:548px;min-width: 88px;
  max-width: 92px;flex-direction: row;
  align-items: center;
  border: 1px solid transparent; span{
    margin-left: 6px;
  }} // 中国大陆


@keyframes rotate360Logo { // 新的logo旋转动画名
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.homeConet3 {
  margin-top: 137px;
  margin-bottom: 104px;
}
.homeConet3_text{
  margin-bottom: 27px;
}

.homeConet3_btn1 {
  background-image: url(../../assets/index/矩形1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 321.2px;
  height: 115.1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 53px;
  padding-right: 43px;
  // padding: 0 60px;
  cursor: pointer;
  margin:0 auto;
  .text {
    font-family: Source Han Sans SC;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    text-align: center;
    margin-top: -15.001px;
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
    width: 32.3px;
    height: 31.5px;
    margin-top: -8.0006px;
  }
}

.homeConet3_btn2 {
  background-image: url(../../assets/index/矩形2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 321.2px;
  height: 115.1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 75px;
  padding-right: 44px;
  // padding: 0 60px;
  cursor: pointer;
  margin:0 auto;

  .text {
    font-family: Source Han Sans SC;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    text-align: center;
    margin-bottom:15px;
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
    width: 32.3px;
    height: 31.5px;
    margin-bottom: 15px;
  }
}

.homeConet3_btn1:active,.homeConet3_btn2:active {
  animation: bounce 0.6s ease-out;
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

/* 移动端视频播放器样式 */
.mobile-video-section {
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 0 20px;
}

.mobile-hub-showcase {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.mobile-rounded-video {
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 15px;
  object-fit: cover;
  display: block;
}

.mobile-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease;
}

.mobile-video-overlay:hover {
  background: rgba(0, 0, 0, 0.2);
}

.mobile-play-pause-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 2px;
}

/* 当视频播放时，隐藏播放按钮的背景 */
.mobile-video-overlay.playing .mobile-play-pause-btn {
  background: transparent;
  box-shadow: none;
}

.mobile-play-pause-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.mobile-play-pause-btn.clicked {
  animation: pulse 1s ease-out;
}

.mobile-mute-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-mute-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* 响应式调整 */
@media (max-width: 480px) {
  .mobile-video-section {
    padding: 0 15px;
    margin-top: 40px;
  }
  
  .mobile-play-pause-btn {
    width: 50px;
    height: 50px;
  }
  
  .mobile-mute-btn {
    width: 35px;
    height: 35px;
    font-size: 14px;
    top: 10px;
    right: 10px;
  }
  
  .mobile-rounded-video {
    max-height: 300px;
  }
}

/* 移动端视频进度条样式 */
.mobile-progress-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 12px;
  border-radius: 0 0 15px 15px;
}

.video-progress-bar {
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 6px;
}

.video-progress-fill {
  height: 100%;
  background-color: #ffffff;
  border-radius: 2px;
  transition: width 0.1s ease;
}

.video-progress-thumb {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: left 0.1s ease;
}

.video-time-display {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
}

.current-time, .duration {
  font-family: 'Arial', sans-serif;
}

/* 移动端进度条响应式 */
@media (max-width: 480px) {
  .mobile-progress-container {
    padding: 6px 10px;
    border-radius: 0 0 10px 10px;
  }
  
  .video-progress-bar {
    height: 3px;
    margin-bottom: 5px;
  }
  
  .video-progress-thumb {
    width: 10px;
    height: 10px;
  }
  
  .video-time-display {
    font-size: 10px;
  }
}
</style>