<template>
  <header class="header-container">
    <div class="logo">
      <img class="icon" src="../assets/index/logo  .png" alt="logo" />
    </div>

    <div class="menu-icon">
      <!-- Language Button -->
      <div class="language-button" @click.stop="toggleDropdown">
        <img src="../assets/图标：世界.png" alt="" />
        {{ locale === 'en' ? $t('navbar.language.en') : $t('navbar.language.tw') }}
      </div>
      <!-- 下拉栏 -->
      <div class="menu-toggle" @click.stop="toggleMenu">
        <img src="../assets/更多.png" alt="WebX Logo" />
      </div>
    </div>

    <nav class="nav-menu" :class="{ open: isMenuOpen }">
      <div class="link-container" @click.stop="handleLinkClick('/mobile')">
        <router-link class="link" to="/mobile">{{ $t('navbar.home') }}</router-link>
      </div>
      <div class="link-container" @click.stop="handleLinkClick('/Ecosystem/mobile')">
        <router-link class="link" to="/Ecosystem/mobile">{{ $t('navbar.ecosystem') }}</router-link>
      </div>
      <div class="link-container" @click.stop="handleLinkClick('/Media/mobile')">
        <router-link class="link" to="/Media/mobile">{{ $t('navbar.media') }}</router-link>
      </div>
      <div class="link-container" @click.stop="handleLinkClick('/Contacts/mobile')">
        <router-link class="link" to="/Contacts/mobile">{{ $t('navbar.contacts') }}</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useI18nStore } from '../store/i18nStore';
import docsImg from '../assets/docs.png';
import msgsImg from '../assets/msgs.png';
import logoBg from '../assets/logo@2x.png'
import globeIconSrc from '@/assets/图标：世界.png';

const globeIcon = globeIconSrc;
const router = useRouter();
const { t, locale } = useI18n();
const i18nStore = useI18nStore();

const isMenuOpen = ref(false);
const lgTitle = ref(i18nStore.lgTitle);
const isExpanded = ref(false);
const isAboutDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

// 优化的菜单切换函数
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 优化的关闭菜单函数
const closeMenu = () => {
  isMenuOpen.value = false;
};

// 新增：处理链接点击的函数
const handleLinkClick = (path) => {
  router.push(path);
  closeMenu();
};

// 优化的语言切换函数
const toggleDropdown = () => {
  console.log(lgTitle.value);
  isMenuOpen.value = false;
  if (lgTitle.value === '繁体') {
    lgTitle.value = 'English';
    locale.value = 'en';
  } else {
    lgTitle.value = '繁体';
    locale.value = 'zh-TW';
  }

  i18nStore.setLgTitle(lgTitle.value);
  i18nStore.setLocale(locale.value);
};

// 点击外部关闭菜单
const handleClickOutside = (event) => {
  const navMenu = document.querySelector('.nav-menu');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (isMenuOpen.value && 
      navMenu && 
      !navMenu.contains(event.target) && 
      menuIcon && 
      !menuIcon.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  max-width: 748px;
  height: 103.0003px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  border-bottom: 1.0003px solid #eee;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 27.9994px;
  font-weight: bold;
  color: #000;
}

.logo .text {
  margin-right: 6px;
}

.logo .icon {
  width: 115.0003px;
  height: 45.9994px;
}

.menu-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.menu-icon img {
  width: 28px;
  height: 28px;
}

// 新增：为菜单切换按钮添加样式
.menu-toggle {
  padding: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  
  &:active {
    opacity: 0.7;
  }
}

.nav-menu {
  position: absolute;
  top: 103.0003px;
  right: 0px;
  background: white;
  width: 46%;
  flex-direction: column;
  display: none;
  z-index: 1000;
  border: 1.0003px solid #eee;
  border-top: 1.0003px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-menu.open {
  display: flex;
}

.link-container {
  padding: 15.9994px;
  gap: 20.0006px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:active {
    background-color: #E9E9E9;
  }
}

.link {
  width: 100%;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  transition: color 0.3s;
  pointer-events: none; // 防止router-link的默认行为
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-left: auto;
  margin-right: 45px;
  margin-top: 4px;
  width: 105px;
  height: 40px;
  border-radius: 28px;
  background-color: black;
  color: white;
  font-size: 18px;
  font-family: 'Source Han Sans SC';
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.2s ease;
  gap: 12px;
    /* 添加图标和文字之间的间距 */
    // border: 1px solid red;
  &:active {
    opacity: 0.8;
  }
  
  img {
    max-width: 20px;
    max-height: 20px;
    // margin: 6px 0;
    flex-shrink: 0;
      /* 防止图标被压缩 */
      vertical-align: middle;
      /* 确保垂直对齐 */
  }
    /* 确保文字垂直居中 */
    // span {
    //   // height: 11px;
    //   line-height: 1;
    //   vertical-align: middle;
    // }
}
</style>