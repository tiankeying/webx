<template>
  <div>
    <!-- Updates卡片模块 -->
    <div class="section-Updates">
      <!-- Updates标题 -->
      <div class="Updates-title">
        {{ $t('contactsPage.webxEcosystemUpdates') }}
        <!-- Tooltip Image with Hover Effect -->
        <div class="more-wrapper" @click="openWebxBusiness">
          <img
            :src="showTooltip ? moreBlack : more"
            alt="more"
            class="more-icon"
          />
          <div v-if="showTooltip" class="tooltip">
            More
            <span class="tooltip-arrow"></span>
          </div>
        </div>
      </div>
      <!-- Updates卡片1 -->
      <div :class="`Updates-card${index + 1}`" v-for="(card, index) in updatesCards" :key="index">
        <!-- Updates卡片标题 -->
        <div class="card1-title">
          {{ $t(card.title) }}
        </div>
        <!-- Updates卡片日期 -->
        <div class="card1-data">
          <div class="data-left">{{ $t('ecosystemPage.webxBusiness') }}</div>
          <div class="data-right">
            {{ $t(card.date) }}
          </div>

        </div>
        <!-- Updates卡片图片 -->
        <div :class="`card${index + 1}-image`">
          <img :src="card.image" :alt="$t(card.title)" @click="handleImageClick(card.link)" style="cursor: pointer;" />
        </div>
        <!-- Updates卡片内容 -->
        <div :class="`card${index + 1}-content`">
          {{ $t(card.content) }}
        </div>
      </div>

    </div>
    <!-- 卡片排列模块1 -->
    <div class="section-card">
      <!-- 标题 -->
      <div class="card-title">
        {{ $t('contactsPage.webxUpdates') }}
      </div>
      <!-- 卡片容器 -->
      <div class="card-container">
        <div :class="`card${index + 1}` " v-for="(card, index) in webxUpdatesCards" :key="index">
          <img :src="card.image" :alt="$t(card.title)" loading="lazy" @click="handleImageClick(card.link)"/>
          <div class="h3">{{ $t(card.title) }}</div>
          <div class="span card-p2" :class="[locale === 'en' ? 'author-text-en' : 'author-text-zh']">
            {{ formattedBySummerZhen(card.date) }}
          </div>
          <!-- <div class="span card-p2">{{ $t(card.author) }}</div> -->
        </div>
      </div>
    </div>


    <!-- 卡片排列模块2 -->
    <div class="section-card1">
      <!-- 标题 -->
      <div class="card-title">
        {{ $t('contactsPage.industryUpdates') }}
      </div>
      <!-- 卡片容器 -->
      <div class="card-container1">
        <div v-for="(card, index) in industryUpdatesCards" :key="index" :class="`cards${index + 1}`">
          <img :src="card.image" :alt="$t(card.title)" @click="handleImageClick(card.link)" style="cursor: pointer;"
            loading="lazy" />
          <div class="h3">{{ $t(card.title) }}</div>
          <div class="span card-p1" :class="[locale === 'en' ? 'author-text-en' : 'author-text-zh']">
            {{ formattedBySummerZhen(card.author) }}
          </div>
        </div>
      </div>
    </div>
    <!-- 视频模块 -->
    <div class="video-container">
      <!-- 标题 -->
      <div class="video-title">
        {{ $t('contactsPage.hubShowcase') }}
      </div>
      <!-- 视频 -->
      <section class="section hub-showcase">
        <video ref="videoPlayer" class="rounded-video " loop :muted="isMuted" playsinline @ended="isPlaying = false" :key="locale">
          <source :src="videoSource" type="video/mp4">
          <!-- <source src="../../assets/index/0a0a0e804f804ba4e109f3fcb4cd34a8.mp4" type="video/mp4"> -->
          {{ $t('contactsPage.videoNotSupported') }}
        </video>

        <div class="video-overlay mobile-video-overlay" :class="{ 'playing': isPlaying }" @click="togglePlayPause">
          <img :src="isPlaying ? playIcon : pauseIcon" alt="Play/Pause Button" class="play-pause-btn mobile-play-pause-btn"
            :class="{ 'clicked': isAnimating }" />
          <button @click.stop="toggleMute" class="mute-btn">
            {{ isMuted ? '🔇' : '🔊' }}
          </button>
        </div>
        <!-- 视频进度条 -->
        <div class="video-progress-container" @click="seekVideo">
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
    <!-- 背景图 -->
    <!-- <div class="background-image">
      <img src="../../assets/index/背景图.png" alt="Background Image" />
     </div> -->
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n'
import playIcon from '../../assets/index/播放.png';
import pauseIcon from '../../assets/index/暂停.png';
import cardImage1 from '../../assets/index/配图1.png';
import cardImage2 from '../../assets/index/配图2.png';
import cardImage3 from '../../assets/index/配图3.png';
import updatesImage1 from '../../assets/index/插图1(1).png';
import updatesImage2 from '../../assets/index/插图2(1).png';
import updatesImage3 from '../../assets/index/插图3(1).png';
import industryImage1 from '../../assets/index/插图1(2).png';
import industryImage2 from '../../assets/index/插图2(2).png';
import industryImage3 from '../../assets/index/插图3(2).png';
import more from '../../assets/index/更多.png';
import moreBlack from '../../assets/index/更多黑.png';
// 使用动态导入来避免文件名编码问题
const ENvideo = new URL('../../assets/m-index/（压缩手机版）WebX-企宣视频英文版English.mp4', import.meta.url).href;
const ZHVideo = new URL('../../assets/m-index/（压缩手机版）WebX-企宣视频 中英文双语字幕版.mp4', import.meta.url).href;


const { t } = useI18n()
const videoPlayer = ref(null);
const isPlaying = ref(false);
const isAnimating = ref(false);
const { locale } = useI18n() // Assuming you might need locale for other parts

const showTooltip = ref(false);

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
    return ZHVideo; // 中文视频，请替换为实际的中文视频文件名
  }
});

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

const openWebxBusiness = () => {
  window.open('https://medium.com/@WebXBusiness/', '_blank');
};

// 定义卡片数据
const updatesCards = [
  {
    title: 'contactsPage.trillionDollarSurge',
    date: 'contactsPage.dateMay302025',
    image: cardImage3,
    content: 'contactsPage.digitalEconomyEra',
    link: 'https://medium.com/@WebXBusiness/what-kind-of-consumer-rights-do-we-truly-need-7d28bf36424e',
  },
  {
    title: 'contactsPage.coreOfCVAS',
    date: 'contactsPage.dateMay282025',
    image: cardImage1,
    content: 'contactsPage.webxBusinessDescription',
    link: 'https://medium.com/@WebXBusiness/where-does-your-money-go-value-evaporation-and-user-silence-in-the-digital-consumption-era-1ccf0873a9c6',
  },
  {
    title: 'contactsPage.howCompaniesLeverageCVAS',
    date: 'contactsPage.dateJun182025',
    image: cardImage2,
    content: 'contactsPage.cvasCommercialSuccess',
    link: 'https://medium.com/@WebXBusiness/why-we-need-consumer-led-commerce-platforms-more-than-ever-webx-business-redefines-who-owns-the-f69c053a3824',
  }
];

const webxUpdatesCards = [
  {
    title: 'contactsPage.consumerCentricEconomy',
    date: 'contactsPage.dateMay2225',
    image: updatesImage1,
    link:'https://x.com/WebX_vip/status/1953045456898146799',
  },
  {
    title: 'contactsPage.revolutionizingDigitalPayments',
    date: 'contactsPage.dateMay102025',
    image: updatesImage2,
    link:'https://medium.com/@webx/practice-of-stablecoins-in-the-emerging-financial-landscape-438cc4672619',
  },
  {
    title: 'contactsPage.buildingRWA',
    date: 'contactsPage.dateMay052025',
    image: updatesImage3,
    link:'https://medium.com/@webx/tips-for-using-digital-currency-for-payment-7c0e39f09a25',
  }
];

const industryUpdatesCards = [
  {
    title: 'contactsPage.hongKongStablecoin',
    author: 'contactsPage.byBrandonKaeMarch242025',
    image: industryImage1,
    link: 'https://news.marketersmedia.com/hackquest-secures-dollar41-million-in-funding-led-by-animoca-brands-and-open-campus-to-tackle-web3s-critical-developer-shortage/89166781'
  },
  {
    title: 'contactsPage.stakingSectorOverview',
    author: 'contactsPage.coinGeckoMarch202024',
    image: industryImage2,
    link: 'https://www.coingecko.com/research/publications/2025-q2-crypto-report'
    
  },
  {
    title: 'contactsPage.rwaReport',
    author: 'contactsPage.bySummerZhenMay212025',
    image: industryImage3,
     link: 'https://metrics.w3bstream.com/news/2025-07-03/the-depin-report-2025-transforming-infrastructure-through-decentralization'
    
  }
];

// 图片点击跳转函数 (If you need this for other images in MediaMobile.vue)
const handleImageClick = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};

// 事件处理函数
const handlePlay = () => {
  isPlaying.value = true;
};

const handlePause = () => {
  isPlaying.value = false;
};

// 绑定视频事件监听器的函数
const bindVideoEvents = () => {
  if (videoPlayer.value) {
    // 移除之前的事件监听器以避免重复绑定
    videoPlayer.value.removeEventListener('play', handlePlay);
    videoPlayer.value.removeEventListener('pause', handlePause);
    videoPlayer.value.removeEventListener('timeupdate', updateVideoTime);
    videoPlayer.value.removeEventListener('loadedmetadata', updateVideoTime);
    videoPlayer.value.removeEventListener('durationchange', updateVideoTime);
    
    // 重新绑定事件监听器
    videoPlayer.value.addEventListener('play', handlePlay);
    videoPlayer.value.addEventListener('pause', handlePause);
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


onMounted(async () => {
    await nextTick();
    
    // 等待视频元素完全加载
    setTimeout(() => {
      if (videoPlayer.value) {
        bindVideoEvents();
        
        // 初始状态检查，如果视频自动播放，则设置isPlaying为true
        if (videoPlayer.value.autoplay) {
          isPlaying.value = true;
        } else {
          videoPlayer.value.pause();
          isPlaying.value = false;
        }
        
        // 设置初始静音状态
        isMuted.value = videoPlayer.value.muted;
        
        // 手动触发一次时间更新
        updateVideoTime();
      }
    }, 100);
  });

onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.removeEventListener('play', handlePlay);
    videoPlayer.value.removeEventListener('pause', handlePause);
    videoPlayer.value.removeEventListener('timeupdate', updateVideoTime);
    videoPlayer.value.removeEventListener('loadedmetadata', updateVideoTime);
    videoPlayer.value.removeEventListener('durationchange', updateVideoTime);
  }
});

// 通用的替换逗号为换行符函数
function formattedBySummerZhen(key) {
  console.log(key);
  
  const text = t(key)
  console.log(text);
  
  if (typeof text === 'string') {
    return text.replace(',', '\n')
  }
  return text
}
console.log('Ecosystem page loaded')
</script>

<style lang="scss" scoped>
.section-Updates{
margin: 58px 30px 0;
}

.Updates-title{
  max-width: 100%; // 替代 width: 451px
    width: auto;
// height: 36px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 83px;
}

.more-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
  // margin-top: 10px; /* Adjust as needed for mobile */
}

.more-icon {
  width: 41.1px; /* Adjusted for mobile, original was 52px */
  height: 9.5px;
}

.tooltip {
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%) translateY(-5px); /* Adjusted for mobile */
  background-color: #000;
  color: #fff;
  padding: 4px 10px; /* Adjusted for mobile */
  border-radius: 4px; /* Adjusted for mobile */
  font-size: 14px; /* Adjusted for mobile */
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  opacity: 0.95;
  pointer-events: none;
}
.tooltip-arrow {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent; /* Adjusted for mobile */
  border-right: 6px solid transparent; /* Adjusted for mobile */
  border-top: 6px solid #000; /* Adjusted for mobile */
  content: '';
}

.card1-title{
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
line-height: 29px;
}

.Updates-card1 .card1-title{
// height: 57px;
}

.Updates-card2 .card1-title{
// height: 52px;
}

.Updates-card3 .card1-title{
// height: 24px;
}

.Updates-card2,.Updates-card3{
  margin-top: 92px;
}

.card2-title,.card3-title{
  font-family: Source Han Sans SC;
    font-weight: bold;
    font-size: 22px;
    color: #000000;
}

// .card1-title{
// width: 688px;
// height: 92px;
// }

.card2-title{
width: 688px;
height: 91px;
}

.card3-title{
width: 689px;
height: 57px;
}

.card1-data,.card2-data,.card3-data{
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin-top: 34px;
}
.data-left{
  width: 168.8px;
height: 46.1px;
background: #F2F2F2;
opacity: 0.9;
text-align: center;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #808080;
line-height: 46.1px;
}
.data-right{
  margin-left: 38px;
  // width: 105px;
height: 19px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #808080;
line-height: 24px;
}

.card1-content,.card2-content,.card3-content{
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #808080;
line-height: 26px;
max-width: 690px;
  min-width: 690px;
  // height: 71px;
  white-space: pre-line;
  border:1px solid transparent;
}

.card1-image,.card2-image,.card3-image{
  width: 689px;
    height: 330px;
  margin: 28px 0 29px 0;

// max-width: 100%;
}

.card1-image img,.card2-image img,.card3-image img{
  width: 689px;
    height: 330px;
}
.section-card,.section-card1{
margin-top: 128px;
margin-left: 29px;
margin-right: 31px;
}

.card-title{
// height: 36px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
margin-left: 2px;

// border: 1px solid #000;
}
.card-container{
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border:1px solid transparent;
}

.card-container1{
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid transparent;
  
}

.card1 img,.card2 img,.card3 img{
  width: 339px;
  height: 171px;
}

.cards3{
  margin-top: 38px;
}
.cards1 img,.cards2 img,.cards3 img{
  width: 336px;
  height: 169px;
}

.card1 .h3{
  width: 263px;
height: 76px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
margin-top: 23px;
margin-bottom: 5px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
.card2 .h3{
  width: 340px;
height: 75px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
// line-height: 26px;
margin-top: 24px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
.card3 .h3{
  width: 276px;
// height: 72px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
// line-height: 26px;
margin-top: 22px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}


.cards1 .h3{
  width: 273px;
height: 79px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
margin-bottom: 29px;
margin-top: 23px;
border: 1px solid transparent;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
.cards2 .h3{
  width: 330px;
height: 75px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
margin-bottom: 29px;
margin-top: 24px;
// overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3; /* 大致控制在 3 行内，根据 line-height 来决定 */
  -webkit-box-orient: vertical;
  border: 1px solid transparent;
}
.cards3 .h3{
overflow: hidden;
  width: 330px;
// height: 40px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 22px;
color: #000000;
margin-bottom: 24px;
margin-top: 24px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
border: 1px solid transparent;
}

.card-p2{
  width: 140px;
  height: 50px;
margin-top: 24px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #808080;
white-space: pre-line;
}

.card3{
  margin-top: 38px;
}
.card-p1{
  width: 339px;
// height: 41px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #808080;
// line-height: 1;
border: 1px solid transparent;
white-space: pre-wrap; 
}

.author-text-en{
line-height: 14px;
transform: translateY(10px);
border: 1px solid transparent;
}
.author-text-cn{ 
  line-height: 24px;
}

.video-container{
  margin-top: 134px;
}
.video-title{
margin-left: 31px;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 36px;
color: #000000;
}
.video-container .hub-showcase{
  position: relative; // 使 overlay 能够相对于视频定位
  width: 691px; // Adjusted for mobile, assuming full width
  max-width: 691px;
  // height: 396.9px;
  margin: auto;
  // left: -20.0006px; // May need adjustment for mobile
  margin-bottom: 132px; // Adjusted for mobile
  margin-top: 41px;
}

.video-container .hub-showcase video{
  width: 100%;
  // height: 748.9997px; // Height might need to be auto or responsive for mobile
  aspect-ratio: 16 / 9; // Common video aspect ratio
  cursor: pointer;
  display: block; // 移除视频底部的空白间隙
}

.video-container .video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease; /* 添加淡入淡出过渡效果 */
}

/* 当鼠标悬停在hub-showcase区域时显示播放控制 */
.video-container .hub-showcase:hover .video-overlay {
  background: rgba(0, 0, 0, 0.2);
}

.video-container .play-pause-btn {
 width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 2px;
}

/* 当视频播放时，隐藏播放按钮 */
.video-container .video-overlay.playing .play-pause-btn {
  background: transparent;
  box-shadow: none;
}

/* 悬停时显示按钮 */
.video-container .video-overlay.playing:hover .play-pause-btn {
  opacity: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.video-container .play-pause-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.video-container .play-pause-btn.clicked {
  animation: pulse 1s ease-out;
}

.video-container .play-pause-btn.clicked {
  animation: playPauseClickEffect 1s ease-out forwards;
}

@keyframes playPauseClickEffect {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
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

.video-container .mute-btn {
  position: absolute;
  top: 10px; // Adjusted for mobile
  right: 10px; // Adjusted for mobile
  width: 36px; // Adjusted for mobile
  height: 36px; // Adjusted for mobile
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(84, 120, 141, 0.8), rgba(84, 120, 141, 0.6));
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2),
    0 1px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px; // Adjusted for mobile
  color: #333;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  opacity: 1; /* 静音按钮始终可见 */
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.video-container .rounded-video {
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 15px;
  object-fit: cover;
  display: block;
}

/* 视频进度条样式 */
.video-progress-container {
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  z-index: 10;
  cursor: pointer;
}

.video-progress-bar {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
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
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.video-progress-container:hover .video-progress-thumb {
  opacity: 1;
}

.video-time-display {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #ffffff;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .video-progress-container {
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  
  .video-time-display {
    font-size: 9px;
  }
  
  .video-progress-bar {
    height: 2px;
  }
  
  .video-progress-thumb {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 360px) {
  .video-progress-container {
    bottom: 8px;
    left: 8px;
    right: 8px;
  }
  
  .video-time-display {
    font-size: 8px;
  }
  
  .video-progress-bar {
    height: 2px;
  }
  
  .video-progress-thumb {
    width: 6px;
    height: 6px;
  }
}
</style>