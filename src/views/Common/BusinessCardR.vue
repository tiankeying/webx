<template>
  <div class="business-card" :style="containerStyle">
    <div class="business-container">
      <div class="main-image-wrapper">
        <!-- 主图 -->
        <img class="main-image" :src="mainImage" alt="" @error="handleImageError">

        <!-- 动态渲染浮动小图标 -->
        <img v-for="(icon, index) in floatingIcons" :key="index" :class="['floating-icon', icon.className]"
          :src="icon.src" :alt="icon.alt" @error="handleIconError">
      </div>
    </div>
    <div class="btn" v-if="showButton">
      <div class="custom-btn" @click="openWebxGame">
        <div> {{ buttonText }}</div>
        <img :src="arrowIcon" class="custom-icon" @error="handleArrowError">
      </div>
      <!-- <van-button round type="info" class="custom-btn">
        {{ buttonText }}
        <img :src="arrowIcon" class="custom-icon" @error="handleArrowError">
      </van-button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import arrowIcon from '@/assets/index/箭头.png'

const openWebxGame = () => {
  window.open('https://g.webx.ai', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}

const props = defineProps({
  // 主图路径
  mainImage: { type: String, required: true },
  // 浮动图标数组（格式：{ src: 图标路径, className: 定位类名, alt: 描述 }）
  floatingIcons: { type: Array, required: true },
  // 按钮文本
  buttonText: { type: String, required: true },
  // 容器尺寸（格式：{ width: '27.1354vw', height: '29.0625vw' }）
  size: {
    type: Object,
    default: () => ({ width: '27.1354vw', height: '29.0625vw' })
  },
  // 是否显示按钮
  showButton: {
    type: Boolean,
    default: true
  }
});

// 计算容器样式
const containerStyle = computed(() => ({
  width: props.size.width,
  height: props.size.height
}));

// 错误处理函数
const handleImageError = (e) => {
  console.error('主图加载失败:', props.mainImage);
  e.target.style.display = 'none';
};

const handleIconError = (e) => {
  console.error('图标加载失败:', e.target.src);
  e.target.style.display = 'none';
};

const handleArrowError = (e) => {
  console.error('箭头图标加载失败:', e.target.src);
  e.target.style.display = 'none';
};
</script>

<style scoped lang="scss">
.business-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.8646vw;


  .business-container {
    width: 100%;
    max-width: 31.25vw;
    margin: 1.0417vw auto 0;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .main-image-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .main-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .floating-icon {
    position: absolute;
    width: 25%;
    height: auto;
    animation: float 3s ease-in-out infinite;
    z-index: 2;
  }

  // 添加缺失的浮动图标定位类
  .car {
    top: 25%;
    left: -8%;
    animation-delay: 0s;
    width: 18% !important;
  }

  .dress {
    top: 5%;
    left: 12%;
    animation-delay: 0.6s;
    width: 20% !important;
  }

  .cart {
    top: 18%;
    right: -8%;
    animation-delay: 0.3s;
    width: 18% !important;
  }

  .car2 {
    top: 16.5625vw;
    left: -2.2396vw;
    animation-delay: 0s;
    width: 5.3438vw !important;
    height: 7.276vw !important;
  }

  .cart2 {
    top: 15.2083vw;
    right: -1.7188vw;
    animation-delay: 0.3s;
    width: 8.3542vw !important;
    height: 7.901vw !important;
  }

  .dress2 {
    top: 7.1354vw;
    left: 0;
    animation-delay: 0.6s;
    width: 26.151vw !important;
    height: 12.6771vw !important;
  }

  // 浮动动画
  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-0.7813vw);
    }
  }

  .btn {
    width: 20.2604vw;
    height: 7.2396vw;
    padding: 0;
    background-image: url(../../assets/index/矩形2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }


  .custom-btn {
    width: 20.2604vw;
      height: 7.2396vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5625vw;
    background: transparent;
    padding: 0;
    padding-bottom: .5208vw;
  }

  .custom-icon {
    width: 1.8229vw;
    height: 1.8229vw;
    margin-left: .7813vw;
  }
}
</style>