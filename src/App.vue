<template>
  <div id="app">
    <AppNavbar />
    <!-- 恢复根路径的动态组件渲染 -->
    <template v-if="['/'].includes(route.path)">
      <transition :name="animationName">
        <component 
          :is="getComponent()"
          :key="getComponentKey()"
        />
      </transition>
    </template>
    <!-- 其他路由使用 router-view -->
    <template v-else>
      <router-view />
    </template>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import { shallowRef, computed, onMounted, watch } from 'vue';  // 新增 shallowRef 导入
import { onBeforeRouteUpdate, useRoute } from 'vue-router'; 
import { useI18n } from 'vue-i18n';
import { defineAsyncComponent,ref } from 'vue';
const { t } = useI18n();
const animationName = ref('defaultAnimation');
const showModal = ref(true);
const route = useRoute(); 

// 移动端检测
const checkIsMobile = () => {
  return window.innerWidth < 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// 修改为 shallowRef（关键修复点）
const homeComponent = shallowRef(null);
const isMobile = ref(checkIsMobile());
const homeComponentKey = ref(Date.now());

// 恢复动态组件更新逻辑
const updateComponents = () => {
  isMobile.value = checkIsMobile(); 
  if (isMobile.value && route.path === '/') {
    // 移动端访问首页，重定向到 /unsupported 或其他页面
    alert('该页面仅支持在PC端访问');
    homeComponent.value = defineAsyncComponent(() =>
      import('./views/Unsupported.vue')
    );
    homeComponentKey.value = Date.now();
    return;
  }
  homeComponent.value = defineAsyncComponent(() => import('./views/Home/HomePage.vue'));
  homeComponentKey.value = Date.now();
};

const getComponent = () => {
  if (route.path === '/') {
    return homeComponent.value; 
  }
};

const getComponentKey = () => {
  if (route.path === '/') {
    return homeComponentKey.value;
  }
};

onMounted(() => {
  updateComponents();
  
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateComponents, 200);
  });
});

watch(route, () => {
  updateComponents();
});
</script>

<style>

#app {
  max-width: 1920px;
}
.van-overlay {
  z-index: 9998 !important;
}

.H5Molde {
  display: none;
}

.pcMolde {
  display: block;
}

/* 新增样式让按钮显示在右下角 */
.van-popup .modal-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1.0417vw 0vw;
}

/* 非移动端媒体查询 */
@media (min-width: 39.0625vw ) {
  .modal-body {
    height: 30vh;
  }

  .H5Molde {
    display: none;
  }

  .pcMolde {
    display: block;
  }
}

/* 移动端样式 */
@media (max-width: 39.0625vw) {
  .H5Molde {
    display: block;
  }

  .pcMolde {
    display: none;
  }
}

/* 新增样式让按钮显示在右下角 */
.van-popup .modal-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1.0417vw 0vw;
  /* 可根据需要调整内边距 */
}

/* 添加样式让 #app 至少占满整个视口高度 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 让 router-view 部分填充剩余空间 */
router-view {
  flex: 1;
}

/* 添加自定义样式让模态框从底部弹出 */
.bottom-modal .n-modal-mask {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bottom-modal .n-modal-content {
  margin-bottom: 0;
}

/* 顶部模态框样式 */
.modal.fade .modal-dialog {
  margin: 0;
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.modal.fade .modal-content {
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: none;
}

/* 确保模态框在移动设备上也能正确显示 */
@media (max-width: 29.999vw) {
  .modal-fullscreen-sm-down .modal-content {
    height: 5.2083vw;
    /* min-height: auto; */
  }
}

/* 其他原有样式保持不变 */
.gradient-btn {
  background: linear-gradient(0deg, #E9CA8D 0%, #FFE4BB 100%);
  /* color: #E7C482; */
  border: none;
}

.gradient-text {
  background: linear-gradient(0deg, #E9CA8D 0%, #FFE4BB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
  padding: 0;
  line-height: normal;

}
</style>