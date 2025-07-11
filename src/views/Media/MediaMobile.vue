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
          <img :src="card.image" :alt="$t(card.title)" loading="lazy" />
          <div class="h3">{{ $t(card.title) }}</div>
          <div class="span card-p2">{{ $t(card.date) }}</div>
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
        <video ref="videoPlayer" class="rounded-video" loop :muted="isMuted" playsinline @ended="isPlaying = true">
          <source src="../../assets/index/0a0a0e804f804ba4e109f3fcb4cd34a8.mp4" type="video/mp4">
          {{ $t('contactsPage.videoNotSupported') }}
        </video>

        <div class="video-overlay" @click="togglePlayPause">
          <img :src="isPlaying ? playIcon : pauseIcon" alt="Play/Pause Button" class="play-pause-btn"
            :class="{ 'clicked': isAnimating }" />
          <button @click.stop="toggleMute" class="mute-btn">
            {{ isMuted ? '🔇' : '🔊' }}
          </button>
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
import { ref, onMounted, computed } from 'vue';
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

const { t } = useI18n()
const videoPlayer = ref(null);
const isPlaying = ref(false);
const isAnimating = ref(false);
const { locale } = useI18n() // Assuming you might need locale for other parts

const showTooltip = ref(false);

const isMuted = ref(true);

// 切换静音状态的函数
const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted;
    isMuted.value = videoPlayer.value.muted;
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
    title: 'contactsPage.howCompaniesLeverageCVAS',
    date: 'contactsPage.dateJun182025',
    image: cardImage2,
    content: 'contactsPage.cvasCommercialSuccess',
    link: 'https://medium.com/@WebXBusiness/ai-driven-smart-supply-chain-making-every-product-more-affordable-e82743ee71f9',
  },
  {
    title: 'contactsPage.trillionDollarSurge',
    date: 'contactsPage.dateMay302025',
    image: cardImage3,
    content: 'contactsPage.digitalEconomyEra',
    link: 'https://medium.com/@WebXBusiness/webx-business-blending-multicultural-consumer-scenarios-in-a-globalized-strategy-133841819ba1',
  },
  {
    title: 'contactsPage.coreOfCVAS',
    date: 'contactsPage.dateMay282025',
    image: cardImage1,
    content: 'contactsPage.webxBusinessDescription',
    link: 'https://medium.com/@WebXBusiness/behind-the-algorithm-how-webx-business-delivers-ai-powered-personalized-d4c1b191d5ce',
  }
];

const webxUpdatesCards = [
  {
    title: 'contactsPage.consumerCentricEconomy',
    date: 'contactsPage.dateMay2225',
    image: updatesImage1
  },
  {
    title: 'contactsPage.revolutionizingDigitalPayments',
    date: 'contactsPage.dateMay102025',
    image: updatesImage2
  },
  {
    title: 'contactsPage.buildingRWA',
    date: 'contactsPage.dateMay052025',
    image: updatesImage3
  }
];

const industryUpdatesCards = [
  {
    title: 'contactsPage.hongKongStablecoin',
    author: 'contactsPage.bySummerZhenMay212025',
    image: industryImage1,
    link: 'https://www.techflowpost.com/article/detail_26772.html?utm_source=substack&utm_medium=email'
  },
  {
    title: 'contactsPage.stakingSectorOverview',
    author: 'contactsPage.byBrandonKaeMarch242025',
    image: industryImage2,
    link: 'https://www.wublock123.com/article/47/45023?utm_source=substack&utm_medium=email'
    
  },
  {
    title: 'contactsPage.rwaReport',
    author: 'contactsPage.coinGeckoMarch202024',
    image: industryImage3,
    link: 'https://reports.tiger-research.com/p/maple-finance-onchain-asset-management-chn?utm_source=substack&utm_medium=email'
  }
];

// 图片点击跳转函数 (If you need this for other images in MediaMobile.vue)
const handleImageClick = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};




onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.addEventListener('play', () => {
      isPlaying.value = true;
    });
    videoPlayer.value.addEventListener('pause', () => {
      isPlaying.value = false;
    });
    // 初始状态检查，如果视频自动播放，则设置isPlaying为true
    if (videoPlayer.value.autoplay) {
      isPlaying.value = true;
    } else {
      // If not autoplaying, ensure video is paused initially
      videoPlayer.value.pause();
      isPlaying.value = false;
    }
    // Set initial muted state based on video player's actual muted state
    isMuted.value = videoPlayer.value.muted;
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
margin-bottom: 82px;
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
  margin-right: 31px;
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



.Updates-card2,.Updates-card3{
  margin-top: 78px;
}

.card1-title,.card2-title,.card3-title{
  font-family: Source Han Sans SC;
    font-weight: bold;
    font-size: 22px;
    color: #000000;
}

.card1-title{
width: 688px;
height: 92px;
}

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
  margin-top: 30px;
}
.data-left{
  width: 168.8px;
height: 46.1px;
background: #F2F2F2;
opacity: 0.9;
text-align: center;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #808080;
line-height: 46.1px;
}
.data-right{
  margin-left: 38px;
  // width: 105px;
height: 18px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #808080;
line-height: 24px;
}

.card1-content,.card2-content,.card3-content{
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #808080;

}

.card1-content{
  max-width: 641px;
  height: 74px;
   white-space: pre-line;
}

.card2-content{
  max-width: 690px;
  height: 74px;
   white-space: pre-line;
}


.card3-content{
  max-width: 689px;
  height: 48px;
   white-space: pre-line;
}

.card1-image,.card2-image,.card3-image{
  width: 687.7px;
    height: 330.9px;
  margin: 28px 0;
// max-width: 100%;
}

.card1-image img,.card2-image img,.card3-image img{
  width: 687.7px;
  height: 330.9px;
  border-radius: 20px;
}
.section-card,.section-card1{
margin-top: 128px;
margin-left: 29px;
margin-right: 31px;
}

.section-card1{
  margin-top: 133px;
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
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container1{
  margin-top: 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid transparent;
}

.card1 img,.card2 img,.card3 img{
  width: 335px;
  height: 168px;
}

.cards3{
  margin-top: 45px;
}
.cards1 img,.cards2 img,.cards3 img{
  width: 336px;
  height: 169px;
  border-radius: 20px;
}

.card1 .h3{
  width: 318px;
height: 67px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
margin-top: 27px;
}
.card2 .h3{
  width: 317px;
height: 67px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
// line-height: 26px;
margin-top: 26px;
}
.card3 .h3{
  width: 290px;
height: 41px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
// line-height: 26px;
margin-top: 28px;
}


.cards1 .h3{
  width: 314px;
height: 67px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
margin-bottom: 23px;
margin-top: 29px;
border: 1px solid transparent;
}
.cards2 .h3{
  width: 309px;
height: 67px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
margin-bottom: 23px;
margin-top: 27px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3; /* 大致控制在 3 行内，根据 line-height 来决定 */
  -webkit-box-orient: vertical;
  border: 1px solid transparent;
}
.cards3 .h3{
  width: 306px;
height: 67px;
font-family: Source Han Sans SC;
font-weight: bold;
font-size: 18px;
color: #000000;
margin-bottom: 24px;
margin-top: 35px;
white-space: pre-line;
border: 1px solid transparent;
}




.card-p2{
  width: 140px;
margin-top: 23px;
font-family: Source Han Sans SC;
font-weight: 400;
font-size: 18px;
color: #808080;

}

.card3{
  margin-top: 42px;
  // border: 1px solid red;
}
.card-p1{
// height: 41px;
font-family: Source Han Sans SC;
font-weight: 400;
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
  margin-top: 128px;
  
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
  width: 91.84%; // Adjusted for mobile, assuming full width
  max-width: 688.8px;
  // height: 396.9px;
  margin: auto;
  // left: -20.0006px; // May need adjustment for mobile
  margin-bottom: 133px; // Adjusted for mobile
  margin-top: 42px;
  
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
  cursor: pointer;
  opacity: 1; /* 默认隐藏 */
  transition: opacity 0.3s ease; /* 添加淡入淡出过渡效果 */
}

/* 当鼠标悬停在hub-showcase区域时显示播放控制 */
.video-container .hub-showcase:hover .video-overlay {
  opacity: 1;
}

.video-container .play-pause-btn {
  width: 60px; // Adjusted for mobile
  height: 60px; // Adjusted for mobile
  transition: transform 0.3s ease, opacity 0.3s ease;
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
  border-radius: 12px; // Adjusted for mobile
  overflow: hidden;
  display: block;
  object-fit: cover;
}
</style>