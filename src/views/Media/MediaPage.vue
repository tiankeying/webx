<template>
  <div>
    <section class="section">
     <div class="webx-ecosystem-updates">
       <!-- <h2>{{ $t('contactsPage.webxEcosystemUpdates') }}</h2> -->
     
        <h2>{{ $t('contactsPage.webxEcosystemUpdates') }}</h2>

    <!-- Your content here -->

    <!-- Tooltip Image with Hover Effect -->
    <div class="more-wrapper" @mouseover="showTooltip = true" @mouseleave="showTooltip = false"  @click="openWebxBusiness">
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
      <div class="card-container container1">
        <div class="card1 large">
          <div class="h3">{{ $t('contactsPage.trillionDollarSurge') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('ecosystemPage.webxBusiness') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateMay302025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.digitalEconomyEra') }}</div>
        </div>
        <div class="card1-img1"><img src="../../assets/index/配图3.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link3)" style="cursor: pointer;" /></div>
      </div>


      <div class="card-container container2">
        <div class="card1 large">
          <div class="h3">{{ $t('contactsPage.coreOfCVAS') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('ecosystemPage.webxBusiness') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateMay282025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.webxBusinessDescription') }}</div>
        </div>
        <div class="card1-img1"><img src="../../assets/index/配图1.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link1)" style="cursor: pointer;" /></div>
      </div>

      <div class="card-container container3">
        <div class="card1 large">
          <div class="h3 h3-h">{{ $t('contactsPage.howCompaniesLeverageCVAS') }}</div>
          <div class="data">
            <div class="data-left">{{ $t('ecosystemPage.webxBusiness') }}</div>
            <div class="data-right">
              {{ $t('contactsPage.dateJun182025') }}
            </div>
          </div>
          <div class="title">{{ $t('contactsPage.cvasCommercialSuccess') }}</div>
        </div>
        <div class="card1-img"><img src="../../assets/index/配图2.png" alt="Ecosystem Image"
            @click="handleImageClick(ecosystemLinks.link2)" style="cursor: pointer;" /></div>
      </div>
    </section>


    <section class="section">
      <h2>{{ $t('contactsPage.webxUpdates') }}</h2>
      <div class="card2-container">
        <div class="card2">
          <img src="../../assets/index/插图1(1).png" alt="WebX Update 1" />
          <div class="card2-h3">{{ $t('contactsPage.consumerCentricEconomy') }}</div>
          <!-- <div class="span card-p2">{{ $t('contactsPage.dateMay2225') }}</div> -->
          <div class="span card-p2" :class="[locale === 'en' ? 'author-text-en1' : 'author-text-zh1']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.dateMay2225')
            }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图2(1).png" alt="WebX Update 2" />
          <div class="h3">{{ $t('contactsPage.revolutionizingDigitalPayments') }}</div>
          <!-- <div class="span card-p2">{{ $t('contactsPage.dateMay102025') }}</div> -->
          <div class="span card-p2" :class="[locale === 'en' ? 'author-text-en1' : 'author-text-zh1']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.dateMay102025')
            }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图3(1).png" alt="WebX Update 3" />
          <div class="h3">{{ $t('contactsPage.buildingRWA') }}</div>
          <!-- <div class="span card-p2">{{ $t('contactsPage.dateMay052025') }}</div> -->
          <div class="span card-p2" :class="[locale === 'en' ? 'author-text-en1' : 'author-text-zh1']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.dateMay052025')
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{{ $t('contactsPage.industryUpdates') }}</h2>
      <div class="card2-container">
        <div class="card2">
          <img src="../../assets/index/插图1(2).png" alt="Industry 1" @click="handleImageClick(imageLinks.industry1)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.hongKongStablecoin') }}</div>
          <div class="span card-p3" :class="[locale === 'en' ? 'author-text-en2' : 'author-text-zh2']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.byBrandonKaeMarch242025')
            }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图2(2).png" alt="Industry 2" @click="handleImageClick(imageLinks.industry2)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.stakingSectorOverview') }}</div>
          <div class="span card-p3" :class="[locale === 'en' ? 'author-text-en2' : 'author-text-zh2']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.coinGeckoMarch202024')
            }}</span>
          </div>
        </div>
        <div class="card2">
          <img src="../../assets/index/插图3(2).png" alt="Industry 3" @click="handleImageClick(imageLinks.industry3)"
            style="cursor: pointer;" />
          <div class="h3">{{ $t('contactsPage.rwaReport') }}</div>
          <div class="span card-p3" :class="[locale === 'en' ? 'author-text-en2' : 'author-text-zh2']">
            <span style=" white-space: pre-line;">{{ formattedBySummerZhen('contactsPage.bySummerZhenMay212025')
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
import more from '../../assets/index/更多.png';
import moreBlack from '../../assets/index/更多黑.png';
const { t } = useI18n()
const videoPlayer = ref(null);
const isPlaying = ref(false);
const isAnimating = ref(false);
const { locale } = useI18n()

const isMuted = ref(true);

const showTooltip = ref(false);

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
  industry1: 'https://www.techflowpost.com/article/detail_26772.html?utm_source=substack&utm_medium=email', // RWA报告链接
  industry2: 'https://www.wublock123.com/article/47/45023?utm_source=substack&utm_medium=email', // 香港稳定币相关链接
  industry3: 'https://reports.tiger-research.com/p/maple-finance-onchain-asset-management-chn?utm_source=substack&utm_medium=email', // 质押行业概览链接
};

// 添加生态系统更新部分的链接
const ecosystemLinks = {
  link1: 'https://medium.com/@WebXBusiness/behind-the-algorithm-how-webx-business-delivers-ai-powered-personalized-d4c1b191d5ce',
  link2: 'https://medium.com/@WebXBusiness/why-we-prefer-value-added-consumption-6e7b8edb3486',
  link3: 'https://medium.com/@WebXBusiness/webx-business-blending-multicultural-consumer-scenarios-in-a-globalized-strategy-133841819ba1'
};

const openWebxBusiness = () => {
  window.open('https://medium.com/@WebXBusiness/', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}

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
.section,
.section1 {
  width: 1305px;
  margin: auto;
  border: 1px solid transparent;
}

.section:first-of-type {
  margin-top: 179px;
  max-width: 1305px;
  // border: .0521vw solid #000000;
  margin-bottom: 170px;
  // border: 1px solid red;
}

.section:first-of-type .card1 .h3 {
  // width: 726px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  // line-height: 34px;
  word-break: normal;
  white-space: normal;
  overflow-wrap: break-word;
  margin-bottom: 30px;
  // text-align: justify;
  /* 均匀对齐文本边缘 */
}

/* 第一个 .h3 的特定样式 */
.card-container.container1 .card1 .h3 {
  width: 726px;
  font-family: Source Han Sans SC;
font-weight: bold;
font-size: 24px;
color: #000000;
  // height: 60px;
}

/* 第二个 .h3 的特定样式 */
.card-container.container2 .card1 .h3 {
  width: 646px;
   font-family: Source Han Sans SC;
font-weight: bold;
font-size: 24px;
color: #000000;
white-space: pre-wrap; 
margin-bottom: 36px;
  // height: 59px;
}

/* 第三个 .h3 的特定样式 */
.card-container.container3 .card1 .h3 {
  width: 726px;
   font-family: Source Han Sans SC;
font-weight: bold;
font-size: 24px;
color: #000000;
margin-bottom: 65px;
  // height: 59px;
}

.data {
  display: flex;
  align-items: center;
}

.data-left {
  width: 179.3px;
  height: 49px;
  // padding: 10px;
  background: #F2F2F2;
  opacity: 1;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 18px;
  color: #808080;
  text-align: center;
  line-height: 49px;
}

.data-right {
  margin-left: 37px;
  height: 19px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 18px;
  color: #808080;
  line-height: 24px;
}

.title {
  width: 726px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
  line-height: 24px;
  // text-align: justify;
  margin-top: 34px;
  height: 67px;
  /* 均匀对齐文本边缘 */
}

/* 第一个 .h3 的特定样式 */
.card-container.container1 .card1 .title {
  text-align: justify;
}

/* 第二个 .h3 的特定样式 */
.card-container.container2 .card1 .title {
  overflow-wrap: break-word;
  white-space: normal;
  word-break: normal;
}

/* 第三个 .h3 的特定样式 */
.card-container.container3 .card1 .title {
  white-space: pre-wrap; 
}


.card1,
.card2 {
  // padding: 15.9994px;
  flex: 1 1 30%;
  box-sizing: border-box;
  background: #fff;
  
}

.card1-img img,.card1-img1 img {
  cursor: pointer;
  width: 505px;
  height: 243px;
  transition: transform 0.3s ease;
  // border-radius: 20px;
}


.card1-img img:hover,
.card1-img1 img:hover {
  transform: translateY(-10px);
}

.card2-container img {
  cursor: pointer;
  width: 418px;
  height: 210px;
  transition: transform 0.3s ease;
  // border-radius: 20px;
}

.card2-container img:hover {
  transform: translateY(-10px);
}

.card2-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 21px;
  margin-bottom: 142px;
  border: 1px solid transparent;
}

.card2-container  .card2-h3 {
  margin-top: 34px;
  width: 418px;
  border:1px solid transparent;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  line-height: 34px;
  min-height: 100px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 大致控制在 3 行内，根据 line-height 来决定 */
  -webkit-box-orient: vertical;
}

.card2-container .h3 {
  
  margin-top: 34px;
  width: 416px;
  border:1px solid transparent;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  line-height: 34px;
  min-height: 100px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 大致控制在 3 行内，根据 line-height 来决定 */
  -webkit-box-orient: vertical;
}

.card2-container .span {
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 18px;
  color: #808080;
  
}

.card2-container .card-p2 {
  margin-top: 37px;
  // border: 1px solid red;
}

.card2-container .card-p3 {
  margin-top: 30px;
}
.author-text-en1{
line-height: 16px;
transform: translateY(10px);
border: 1px solid transparent;
}
.author-text-cn1{ 
  line-height: 24px;
}

.author-text-en2{
line-height: 14px;
transform: translateY(10px);
border: 1px solid transparent;
}
.author-text-cn2{ 
  line-height: 24px;
}

.section h2 {
  margin-bottom: 57px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  font-size: 50px;
  color: #000000;
}

.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.container1 {
  margin-bottom: 79px;
}

.container2 {
  margin-bottom: 87px;
}

.card-container h3 {
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  line-height: 34px;
}

.large {
  // width: 726px;
  // flex: 1;
  // border: 1px solid red;
}

.hub-showcase {
  position: relative; // 使 overlay 能够相对于视频定位
  width: 1300px;
  height: 749px;
  // margin:auto;
  left: 0px;
  margin-bottom: 176px;
  border: 1px solid transparent;
}

.hub-showcase video {
  width: 1300px;
  height: 749px;
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
  opacity: 0;
  /* 默认隐藏 */
  transition: opacity 0.3s ease;
  /* 添加淡入淡出过渡效果 */
}

/* 当鼠标悬停在hub-showcase区域时显示播放控制 */
.hub-showcase:hover .video-overlay {
  opacity: 1;
}

.play-pause-btn {
  width: 96px;
  height: 96px;
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
  top: 28.8px;
  right: 28.8px;
  width: 57.6px;
  height: 57.6px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(84, 120, 141, 0.8), rgba(84, 120, 141, 0.6));
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2),
    0 2.0006px 8.0006px rgba(0, 0, 0, 0.1),
    inset 0 1.0003px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  color: #333;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  opacity: 1;
  /* 静音按钮始终可见 */
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section1 p {
  margin: 0;
  margin-top: 23px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  line-height: 34px;
}

.btn {
  margin-bottom: 176px;
  margin-top: 63px;
  padding: 0;
}

.section1 img {
  width: 1303.0003px;
  height: 84px;
  /* animation: breathe 2s ease-in-out infinite; */
  /* Remove this line */

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
  /* transform: translateY(-0.5208vw); */
  /* This might conflict or be overridden by the animation. If you want both, you might need to adjust the animation or apply transform differently. */
  animation: bounce 0.6s ease-out;
  /* Add this line */
}

.rounded-video {
  border-radius: 24px;
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

// .h3-h {
//   margin-bottom: 65px;
// }
.webx-ecosystem-updates {
  // position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.webx-ecosystem-updates h2{
  width: 630px;
// height: 48px;
margin-bottom: 90px;
border: 1px solid transparent;
font-family: Alibaba PuHuiTi;
font-weight: bold;
font-size: 50px;
color: #000000;

}

.more-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-top: 10px;
  // margin-right: 10px
}
.more-wrapper img{
  width: 52px;
  height: 12px;
}

.tooltip {
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%) translateY(-8px);
  background-color: #000;
  color: #fff;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 18px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #000;
  content: '';
}

</style>
