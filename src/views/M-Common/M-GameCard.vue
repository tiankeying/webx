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
    <!-- <div class="btn" v-if="showButton">
      <div class="custom-btn" @click="openWebxBusiness">
        <div> {{ buttonText }}</div>
        <img :src="arrowIcon" class="custom-icon" @error="handleArrowError">
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import arrowIcon from '@/assets/index/箭头.png'

const openWebxBusiness = () => {
  window.open('https://b.webx.ai', '_blank') // 新标签页打开
  // 或者：
  // window.location.href = 'https://b.webx.ai' // 当前页打开
}

const props = defineProps({
  // 主图路径
  mainImage: { type: String, required: true },
  // 浮动图标数组（格式：{ src: 图标路径, className: 定位类名, alt: 描述 }）
  floatingIcons: { type: Array, required: true },
  // 按钮文本
  // buttonText: { type: String, required: true },
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
  max-width: 508.7px;
  display: flex;
  flex-direction: column;
  max-height: 623px;
  margin-left: 122px;

  .main-image-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .main-image {
    width: 508.7px;
    height: 623px;
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
  .car2 {
    top: 254px;
    left: -47px;
    animation-delay: 0s;
    width: 101.3px !important;
    height: 137.9px !important;
  }

  .cart2 {
    top: 228px;
    right: -24px;
    animation-delay: 0.3s;
    width: 158.4px !important;
    height: 149.8px !important;
  }

  .dress2 {
    top: 75px;
    left: 0%;
    animation-delay: 0.6s;
    height: 240.3px !important;
    width: 495.7px !important;
    max-width: 495.7px !important;
  }

  // 浮动动画
  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(15.001px);
    }
  }
}
</style>