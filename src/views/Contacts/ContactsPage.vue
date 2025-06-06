<template>
  <div>
    <section class="section">
      <h2>{{ $t('contactsPage.webxEcosystemUpdates') }}</h2>
      <div class="card-container container1">
        <div class="card1 large">
          <div class="h3">{{ $t('contactsPage.coreOfCVAS') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('homePage.webx') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateMay302025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.webxBusinessDescription') }}</div>
        </div>
        <div class="card1-img1"><img src="../../assets/index/配图1.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link1)" style="cursor: pointer;" /></div>
      </div>


      <div class="card-container container2">
        <div class="card1 large">
          <div class="h3">{{ $t('contactsPage.howCompaniesLeverageCVAS') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('homePage.webx') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateMay282025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.cvasCommercialSuccess') }}</div>
        </div>
        <div class="card1-img1"><img src="../../assets/index/配图2.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link2)" style="cursor: pointer;" /></div>
      </div>

      <div class="card-container container3">
        <div class="card1 large">
          <div class="h3" style="height: 67.72px;">{{ $t('contactsPage.trillionDollarSurge') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('homePage.webx') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateMay222025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.digitalEconomyEra') }}</div>
        </div>
        <div class="card1-img"><img src="../../assets/index/配图3.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link3)" style="cursor: pointer;" /></div>
      </div>
    </section>


    <section class="section">
      <h2>{{ $t('contactsPage.webxUpdates') }}</h2>
      <div class="card2-container">
        <div class="card2">
          <img src="../../assets/index/插图1(1).png" alt="WebX Update 1" />
          <div class="h3">{{ $t('contactsPage.consumerCentricEconomy') }}</div>
          <div class="span card-p2">{{ $t('contactsPage.dateMay222025') }}</div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图2(1).png" alt="WebX Update 2" />
          <div class="h3">{{ $t('contactsPage.revolutionizingDigitalPayments') }}</div>
          <div class="span card-p2">{{ $t('contactsPage.dateMay102025') }}</div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图3(1).png" alt="WebX Update 3" />
          <div class="h3">{{ $t('contactsPage.buildingRWA') }}</div>
          <div class="span card-p2">{{ $t('contactsPage.dateMay052025') }}</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{{ $t('contactsPage.industryUpdates') }}</h2>
      <div class="card2-container">
        <div class="card2">
          <img src="../../assets/index/插图1.png" alt="Industry 1" @click="handleImageClick(imageLinks.industry1)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.hongKongStablecoin') }}</div>
          <div class="span card-p3">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.bySummerZhenMay212025')
              }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图2.png" alt="Industry 2" @click="handleImageClick(imageLinks.industry2)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.stakingSectorOverview') }}</div>
          <div class="span card-p3">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.byBrandonKaeMarch242025')
              }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图3.png" alt="Industry 3" @click="handleImageClick(imageLinks.industry3)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.rwaReport') }}</div>
          <div class="span card-p3">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.coinGeckoMarch202024')
              }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>{{ $t('contactsPage.hubShowcase') }}</h2>
    </section>

    <section class="section hub-showcase">
      <video ref="videoPlayer" class="rounded-video" loop :muted="isMuted" playsinline @ended="isPlaying = false">
        <source src="../../assets/index/0a0a0e804f804ba4e109f3fcb4cd34a8.mp4" type="video/mp4">
        {{ $t('contactsPage.videoNotSupported') }}
      </video>

      <div class="video-overlay" @click="togglePlayPause">
        <img :src="isPlaying ? playIcon : pauseIcon" alt="Play/Pause Button" class="play-pause-btn"
          :class="{ 'clicked': isAnimating }" />
        <!-- 可以添加一个静音按钮 -->
        <button @click.stop="toggleMute" class="mute-btn">
          {{ isMuted ? '🔇' : '🔊' }}
        </button>
      </div>
    </section>

  </div>
</template>
<script setup>

import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import playIcon from '../../assets/index/播放.png';
import pauseIcon from '../../assets/index/暂停.png';
const { t } = useI18n()
const videoPlayer = ref(null);
const isPlaying = ref(false);
const isAnimating = ref(false);
const { locale } = useI18n()

const isMuted = ref(true);

// 切换静音状态的函数
const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted;
    isMuted.value = videoPlayer.value.muted;
  }
};


// 通用的替换逗号为换行符函数
function formattedBySummerZhen(key) {
  const text = t(key)
  if (typeof text === 'string') {
    return text.replace(',', '\n')
  }
  return text
}

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

// 图片点击跳转函数
const handleImageClick = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};

// 定义每张图片对应的跳转链接
const imageLinks = {
  industry1: 'https://www.theblock.co/post/347076/research-staking-sector-overview', // 香港稳定币相关链接
  industry2: 'https://assets.coingecko.com/reports/Research/RWA-Report-2024-Rise-of-Real-World-Assets-in-Crypto.pdf? ', // 质押行业概览链接
  industry3: 'https://www.reuters.com/world/asia-pacific/hong-kong-passes-stablecoin-bill-one-step-closer-issuance-2025-05-21/' // RWA报告链接
};

// 添加生态系统更新部分的链接
const ecosystemLinks = {
  link1: 'https://medium.com/@WebXBusiness/beyond-buy-buy-buy-how-cvas-consumer-value-added-services-enhances-your-quality-life-and-72bce4258a84',
  link2: 'https://medium.com/@WebXBusiness/author-webx-business-212c204161c2',
  link3: 'https://medium.com/@WebXBusiness/trillion-level-cvas-consumer-value-added-services-market-surge-a-deep-dive-into-how-cvas-rewards-3d631266b8b7'
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
    }
  }
});

console.log('Ecosystem page loaded')
</script>

<style lang="scss" scoped>
.section,.section1 {
  width: 70.3125vw;
  margin: auto;
}

.section:first-of-type{
  margin-top: 11.0625rem;
  max-width: 73.9583vw;
  // border: 1px solid #000000;
  margin-bottom: 10.625rem;
}
.section:first-of-type .card1 .h3{
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 1.25vw;
  color: #000000;
  line-height: 1.7708vw;
  word-break: normal;
  white-space: normal;
  overflow-wrap: break-word;
  margin-bottom: 1.6146vw;
  text-align: justify;
    /* 均匀对齐文本边缘 */
}

/* 第一个 .h3 的特定样式 */
.card-container.container1 .card1 .h3 {
  width: 33.9063vw;
  height: 3.0729vw;
}

/* 第二个 .h3 的特定样式 */
.card-container.container2 .card1 .h3 {
  width: 33.9063vw;
}
/* 第三个 .h3 的特定样式 */
.card-container.container3 .card1 .h3 {
  width: 33.9063vw;
}

.data{
  display: flex;
  align-items: center;
}
.data-left{
width: 6.25vw;
  height: 2.5521vw;
  background: #F2F2F2;
  opacity: 1;
  font-family: Source Han Sans SC;
    font-weight: 400;
    font-size: .9375vw;
    color: #8E8E8E;
    text-align: center;
    line-height: 2.5521vw;
}

.data-right{
  margin-left: 1.6667vw;
    height: .9375vw;
font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: .9375vw;
  color: #808080;
  line-height: 1.25vw;
}

.title{
  // width: 36.25vw;
    font-family: Source Han Sans SC;
    font-weight: 400;
    font-size: .9375vw;
    color: #808080;
    // line-height: 1.25vw;
    text-align: justify;
      /* 均匀对齐文本边缘 */
}

/* 第一个 .h3 的特定样式 */
.card-container.container1 .card1 .title {
  width: 36.25vw;
  height: 3.0729vw;
  margin-top: 1.6667vw;
}

/* 第二个 .h3 的特定样式 */
.card-container.container2 .card1 .title {
  width: 36.7188vw;
  margin-top: 1.6146vw;
  overflow-wrap: break-word;
  white-space: normal;
    word-break: normal;
}
/* 第三个 .h3 的特定样式 */
.card-container.container3 .card1 .title {
  width: 36.25vw;
  margin-top: 1.6667vw;
}


.card1, .card2{
  // padding: .8333vw;
  flex: 1 1 30%;
  box-sizing: border-box;
  background: #fff;
}

.card1-img img{
  cursor: pointer;
  width: 26.8229vw;
  height: 12.8125vw;
  transition: transform 0.3s ease;
}

.card1-img1 img{
  cursor: pointer;
    width: 26.3021vw;
     height: 12.6042vw;
    transition: transform 0.3s ease;
}

.card1-img img:hover, .card1-img1 img:hover {
  transform: translateY(-10px);
}

.card2-container img{
  cursor: pointer;
  width: 21.8229vw;
  height: 10.9375vw;
  transition: transform 0.3s ease;
}

.card2-container img:hover {
  transform: translateY(-10px);
}

.card2-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.0938vw;
  margin-bottom: 8.8542vw
}

.card2-container img{
width: 21.8229vw;
height: 10.9375vw;
}

.card2-container .h3{
  margin-top: 1.7708vw;
  width: 20.5729vw;
    font-family: Source Han Sans SC;
    font-weight: bold;
    font-size: 1.25vw;
    color: #000000;
    line-height: 1.7708vw;
    min-height: 5.2083vw;
}

.card2-container .span{ 
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: .9375vw;
  color: #808080;
  line-height: 1.25vw;
}

.card2-container .card-p2{
  margin-top: 1.9271vw;
}
.card2-container .card-p3 {
  margin-top: 1.25vw;
}

.section h2 {
  margin-bottom: 2.9167vw;
  font-family: Alibaba PuHuiTi;
    font-weight: bold;
    font-size: 2.6042vw;
    color: #000000;
}

.card-container {
  display: flex;
  gap: 1.0417vw;
  flex-wrap: wrap;
}

.container1{
  margin-bottom: 4.1146vw;
}

.container2{
  margin-bottom: 4.5313vw;
}

.card-container h3 {
  font-family: Source Han Sans SC;
    font-weight: bold;
    font-size: 1.25vw;
    color: #000000;
    line-height: 1.7708vw;
}

.card.large {
  flex: 2;
}
.hub-showcase{
  position: relative; // 使 overlay 能够相对于视频定位
  width: 67.8646vw;
  // margin:auto;
  left: -1.0417vw;
  margin-bottom: 11rem;
 
}
.hub-showcase video{
  width: 100%;
  height: 39.0104vw;
  cursor: pointer;
  display: block; // 移除视频底部的空白间隙
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0; /* 默认隐藏 */
  transition: opacity 0.3s ease; /* 添加淡入淡出过渡效果 */
}

/* 当鼠标悬停在hub-showcase区域时显示播放控制 */
.hub-showcase:hover .video-overlay {
  opacity: 1;
}

.play-pause-btn {
  width: 5vw;
  height: 5vw;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.play-pause-btn.clicked {
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

/* 确保静音按钮始终可见 */
.mute-btn {
  position: absolute;
  top: 1.5vw;
  right: 1.5vw;
  width: 3vw;
  height: 3vw;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(84, 120, 141, 0.8), rgba(84, 120, 141, 0.6));
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  color: #333;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  opacity: 1; /* 静音按钮始终可见 */
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section1 p {
 margin: 0;
 margin-top: 1.1979vw;
font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 1.25vw;
  color: #000000;
  line-height: 1.7708vw;
}

.btn {
 margin-bottom: 11rem;
 margin-top: 3.2813vw;
 padding: 0;
}
.section1 img{
  width: 67.8646vw;
  height: 4.375vw;
  /* animation: breathe 2s ease-in-out infinite; */ /* Remove this line */
  
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
.section1 img:hover {
  /* transform: translateY(-10px); */ /* This might conflict or be overridden by the animation. If you want both, you might need to adjust the animation or apply transform differently. */
  animation: bounce 0.6s ease-out; /* Add this line */
}

.rounded-video {
  border-radius: 1.25vw;
  /* 或 50% 变成圆形，或你想要的值 */
  overflow: hidden;
  /* 保证圆角不被内容撑破 */
  display: block;
  /* 避免 video 默认的内联行为造成间隙 */
  aspect-ratio: 1 / 1;
    /* 强制为正方形（现代浏览器支持） */
    object-fit: cover;
    /* 防止视频拉伸 */
}

</style>
