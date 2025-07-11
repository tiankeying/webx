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
      <div class="custom-btn" @click="openWebxBusiness">
        <div> {{ buttonText }}</div>
        <img :src="arrowIcon" class="custom-icon" @error="handleArrowError">
      </div>
    </div>
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
  justify-content: space-between;
  max-height: 650.0006px;
  min-height: 650.0006px;
  max-width: 512px;

  .business-container {
    width: 100%;
    min-width: 512px;
    max-width: 512px;
    // margin: 20.0006px auto 0;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .main-image-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    border: 1px solid transparent;
  }

  .main-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  .floating-icon {
    position: absolute;
    max-width: 508px;
    height: auto;
    animation: float 3s ease-in-out infinite;
    z-index: 2;
  }

  // 添加缺失的浮动图标定位类
  .car {
    top: 229.0003px;
    left: -39.001px;
    animation-delay: 0s;
    max-width: 157.0003px !important;
    max-height: 82.9997px !important;
    min-width: 157.0003px !important;
    min-height: 82.9997px !important;
  }

  .dress {
    top: 108px;
    left: 69.001px;
    animation-delay: 0.6s;
    max-width: 124px !important;
    max-height: 128.0006px !important;
    min-width: 124px !important;
    min-height: 128.0006px !important;
  }

  .cart {
    top: 177.001px;
    right: -28.9997px;
    animation-delay: 0.3s;
    max-width: 157.0003px !important;
    max-height: 132px !important;
    min-width: 157.0003px !important;
    min-height: 132px !important;
  }

  // .car2 {
  //   top: 35%;
  //   left: -10%;
  //   animation-delay: 0s;
  //   width: 69.9994px !important;
  //   height: auto !important;
  // }

  // .cart2 {
  //   top: 35%;
  //   right: -8%;
  //   animation-delay: 0.3s;
  //   width: 16% !important;
  // }

  // .dress2 {
  //   top: 10%;
  //   left: -8%;
  //   animation-delay: 0.6s;
  //   height: auto !important;
  //   width: 80% !important;
  //   max-width: 350.0006px !important;
  // }

  // 浮动动画
  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-15.001px);
    }
  }

  // .btn {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  //   padding: 30px 0;
  //   margin-top: auto;
  // }
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
    padding-bottom: 14.0006px;
  }

  .custom-icon {
    width: 34.9997px;
    height: 34.9997px;
    margin-left: 15.001px;
  }
}
</style>