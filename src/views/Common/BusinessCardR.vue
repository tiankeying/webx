<template>
  <div class="business-card" :style="containerStyle">
    <div class="business-container">
      <div class="main-image-wrapper">
        <img class="main-image" :src="mainImage" alt="" @error="handleImageError">
        <img v-for="(icon, index) in floatingIcons" :key="index" :class="['floating-icon', icon.className]"
          :src="icon.src" :alt="icon.alt" @error="handleIconError">
      </div>
    </div>
    <div class="btn" v-if="showButton">
      <div class="custom-btn" @click="openWebxGame">
        <div> {{ buttonText }}</div>
        <img :src="arrowIcon" class="custom-icon" @error="handleArrowError">
      </div>
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
  // 容器尺寸（格式：{ width: '520.9997px', height: '558px' }）
  size: {
    type: Object,
    default: () => ({ width: '520.9997px', height: '558px' })
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
  justify-content: center;
max-height: 800.0006px;
  min-height: 650.0006px;
  max-width: 512px;
  .business-container {
    width: 100%;
    min-width: 472px;
    max-width: 472px;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .main-image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid transparent;
  }

  .main-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .floating-icon {
    position: absolute;
    max-width: 468px;
    height: auto;
    animation: float 3s ease-in-out infinite;
    z-index: 2;
  }

  .car2 {
    top: 318px;
    left: -43.0003px;
    animation-delay: 0s;
    width: 102.601px !important;
    height: 139.6992px !important;
  }

  .cart2 {
    top: 291.9994px;
    right: -33.001px;
    animation-delay: 0.3s;
    width: 160.4006px !important;
    height: 151.6992px !important;
  }

  .dress2 {
    top: 137px;
    // left:20px;
    transform: translateX(-50%);
    animation-delay: 0.6s;
    width: 502.0992px !important;
    height: 243.4003px !important;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15.001px);
    }
  }

  .btn {
    width: 388.9997px;
    height: 139.0003px;
    padding: 0;
    background-image: url(../../assets/index/矩形2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .custom-btn {
    width: 388.9997px;
    height: 139.0003px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background: transparent;
    padding: 0;
    padding-bottom: 9.9994px;
  }

  .custom-icon {
    width: 34.9997px;
    height: 34.9997px;
    margin-left: 15.001px;
  }
}
</style>