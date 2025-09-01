<template>
  <div id="app">
    <!-- 移动端顶部导航栏 -->
    <Navbar v-if="isMobile" />
    <AppNavbar v-else />


    <!-- 扩展动态组件渲染到所有有移动端版本的路径 -->
    <template v-if="['/', '/Ecosystem', '/Media', '/Contacts'].includes(route.path)">
      <transition :name="animationName">
        <component :is="getComponent()" :key="getComponentKey()" />
      </transition>
    </template>
    <!-- 其他路由使用 router-view -->
    <template v-else>
      <router-view />
    </template>


    <!-- 移动端底部导航栏 -->
    <Footer v-if="isMobile"></Footer>
    <AppFooter v-else />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import Navbar from "./components/m-Navbar.vue";
import Footer from "./components/m-Footer.vue";

import { shallowRef, computed, onMounted, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'; 
import { useI18n } from 'vue-i18n';
import { defineAsyncComponent, ref } from 'vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter(); // 添加router
const animationName = ref('defaultAnimation');
const showModal = ref(true);

// 移动端检测
const checkIsMobile = () => {
  return window.innerWidth < 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const currentComponent = shallowRef(null);
const isMobile = ref(checkIsMobile());
const componentKey = ref(Date.now());

console.log('isMobile:', isMobile.value);

// 路由映射函数
const getDesktopPath = (mobilePath) => {
  console.log('mobilePath:', mobilePath);
  
  const pathMap = {
    '/mobile': '/',
    '/Ecosystem/mobile': '/Ecosystem',
    '/Media/mobile': '/Media',
    '/Contacts/mobile': '/Contacts'
  };
  return pathMap[mobilePath] || '/';
};

const getMobilePath = (desktopPath) => {
  console.log('desktopPath:', desktopPath);
  const pathMap = {
    '/': '/mobile',
    '/Ecosystem': '/Ecosystem/mobile',
    '/Media': '/Media/mobile',
    '/Contacts': '/Contacts/mobile'
  };
  return pathMap[desktopPath] || '/mobile';
};

// 修改后的 updateComponents 函数
const updateComponents = () => {
  const path = route.path;
  console.log('当前路径:', path, '移动端状态:', isMobile.value);
  
  if (isMobile.value) {
    // 移动端组件映射
    switch (path) {
      case '/':
        currentComponent.value = defineAsyncComponent(() => import('./views/Home/HomeMobile.vue'));
        break;
      case '/Ecosystem':
        currentComponent.value = defineAsyncComponent(() => import('./views/Ecosystem/EcosystemMobile.vue'));
        break;
      case '/Media':
        currentComponent.value = defineAsyncComponent(() => import('./views/Media/MediaMobile.vue'));
        break;
      case '/Contacts':
        currentComponent.value = defineAsyncComponent(() => import('./views/Contacts/ContactsMobile.vue'));
        break;
      default:
        currentComponent.value = null;
    }
  } else {
    console.log(1111, path);

    // 桌面端组件映射
    switch (path) {
      case '/':
      case '/mobile':
        currentComponent.value = defineAsyncComponent(() => import('./views/Home/HomePage.vue'));
        break;
      case '/Ecosystem':
        currentComponent.value = defineAsyncComponent(() => import('./views/Ecosystem/EcosystemPage.vue'));
        break;
      case '/Media':
        currentComponent.value = defineAsyncComponent(() => import('./views/Media/MediaPage.vue'));
        break;
      case '/Contacts':
        currentComponent.value = defineAsyncComponent(() => import('./views/Contacts/ContactsPage.vue'));
        break;
      default:
        currentComponent.value = null;
    }
  }

  componentKey.value = Date.now();
};

// 监听移动端状态变化
watch(isMobile, (newValue, oldValue) => {
  console.log('isMobile值发生变化:', {
    oldValue,
    newValue,
    currentPath: route.path,
    timestamp: new Date().toLocaleString()
  });

  // 根据新的移动端状态转换路径
  const currentPath = route.path;
  let targetPath;
  
  if (newValue) {
    // 切换到移动端，转换桌面端路径为移动端路径
    targetPath = getMobilePath(currentPath);
  } else {
    // 切换到桌面端，转换移动端路径为桌面端路径
    targetPath = getDesktopPath(currentPath);
  }
  
  // 如果目标路径与当前路径不同，则进行路由跳转
  if (targetPath !== currentPath) {
    router.push(targetPath);
  } else {
    // 如果路径相同，只更新组件
    updateComponents();
  }
}, { immediate: true });

const getComponent = () => {
  return currentComponent.value;
};

const getComponentKey = () => {
  return componentKey.value;
};

onMounted(() => {
  updateComponents();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newIsMobile = checkIsMobile();
      if (newIsMobile !== isMobile.value) {
        isMobile.value = newIsMobile;
      }
    }, 100); // 减少延迟从200ms到100ms
  });
});

watch(route, () => {
  updateComponents();
});
</script>

<style lang="scss" scoped>
/* 在style标签中添加 */
*{
  box-sizing: border-box;
}

body,
html{
  overflow-x: hidden;
  max-width: 100vw;
}
/* #app {
  max-width: 1920px;
} */
 #app {
   max-width: 100vw; // 改为视口宽度
   overflow-x: hidden; // 防止横向滚动
   box-sizing: border-box;
  display: flex;
    flex-direction: column;
    min-height: 100vh;
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
  padding: 0 20.0006px 0px;
}

/* 非移动端媒体查询 */
@media (min-width: 750px ) {
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
@media (max-width: 750px) {
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
  padding: 0 20.0006px 0px;
  /* 可根据需要调整内边距 */
}

// /* 添加样式让 #app 至少占满整个视口高度 */
// #app {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }

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
  border-radius: 0 0 8px 8px;
  border-top: none;
}

/* 确保模态框在移动设备上也能正确显示 */
@media (max-width: 575.9808px) {
  .modal-fullscreen-sm-down .modal-content {
    height: 99.9994px;
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