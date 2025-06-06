<template>
  <div>
    <!-- 非移动端显示 AppNavbar copy.vue 的内容 -->
    <div>
      <header
        style="display: flex; align-items: center; height: 5.2083vw;justify-content: center;box-shadow: 0px .1563vw .3646vw 0px rgba(219,219,219,0.22);max-width: 100vw; margin: 0 auto; padding: 0 16.15vw;">
        <!-- Logo -->
        <div style=" display: flex; align-items: center;">
          <img src="@/assets/logo@2x.png" alt="WebX Logo"
            style="width: 6.1979vw; height: 2.5vw; object-fit: contain; display: block;" />
          <!-- Navigation -->

        </div>
        <nav class="nav">
          <router-link to="/">{{ $t('navbar.home') }}</router-link>
          <router-link to="/Ecosystem">{{ $t('navbar.ecosystem') }}</router-link>
          <router-link to="/Media">{{ $t('navbar.media') }}</router-link>
          <router-link to="/Contacts">{{ $t('navbar.contacts') }}</router-link>
        </nav>

        <!-- Language Button -->
        <!-- <button
          style="display: flex; align-items: center; justify-content: center; margin-left: auto; margin-right: 40px; width: 90px; height: 48px; border-radius: 9999px; background-color: black; color: white; font-size: 20px; font-family: 'Source Han Sans SC';">
          <img src="../assets/图标：世界.png" alt="" style="width: 27px; height: 27px; margin-right: 6px;" />
          En
        </button> -->
        <div class="font-size-lg">
          <div style=" margin-left: 1.3542vw;margin-right: .8333vw;">
            <img :src="globeIcon" alt="Globe Icon" style="width: 1.4063vw;
                  height: 1.4063vw;display: block;">
          </div>
          <div class="rounded common-btn-size">
            <!-- <img v-if="locale === 'en'" fill="none" src="../assets/en.png" alt="" @click="toggleDropdown" style="width: 1.8229vw;
                  height: 1.8229vw;">
            <img v-if="locale === 'zh-TW'" fill="none" src="../assets/中.png" alt="" @click="toggleDropdown" style="width: 1.8229vw;
                  height: 1.8229vw;"> -->

            <!-- <img src="../assets/log up.png" alt=""> -->
            <div class="font-size" @click="toggleDropdown">
              <!-- {{ locale === 'en' ? $t('navbar.language.tw') : $t('navbar.language.en') }} -->
              {{ locale === 'en' ? $t('navbar.language.en') : $t('navbar.language.tw') }}
            </div>
            <!-- <button class=""
                style=" padding: 0.37vw 1.77vw;border-radius: 0.5vw; font-size: 0.73vw;background-color: #000;color: #FFFFFF;">En</button> -->
          </div>
        </div>
      </header>

    </div>
  </div>
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

// AppNavbar copy.vue 的状态
const lgTitle = ref(i18nStore.lgTitle);
const isExpanded = ref(false);
const isAboutDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

// AppNavbar.vue 的状态
const isMenuOpen = ref(false);
const menuItems = ref([
  { text: 'Home', bgGray: true },
  { text: 'Insights' },
  { text: 'Ecosystem' },
  { text: 'Market' },
  {
    text: 'About',
    icon: 'fas fa-chevron-down',
    flex: true,
    showDropdownContent: false,
    relatedCheckboxItems: [
      {
        checkbox: true,
        id: 'Docs',
        label: 'Docs',
        description: 'Access in-depth resources on our products,services,and technology.',
        img: docsImg
      },
      {
        checkbox: true,
        id: 'Contact',
        label: 'Contact',
        description: 'Need support or more information? Send us a message.',
        img: msgsImg
      }
    ]
  },
  {
    checkbox: true,
    id: 'Docs',
    label: 'Docs',
    description: 'Access in-depth resources on our products,services,and technology.',
    hasBorder: true,
    img: docsImg,
    hidden: true // 初始隐藏，通过About菜单控制显示
  },
  {
    checkbox: true,
    id: 'Contact',
    label: 'Contact',
    description: 'Need support or more information? Send us a message.',
    hasBorder: true,
    img: msgsImg,
    hidden: true // 初始隐藏，通过About菜单控制显示
  }
]);
const routeMap = {
  'Home': 'home',
  'Insights': 'Insight',
  'Ecosystem': 'Ecosystem',
  'Market': 'Market',
  // 可以根据需要添加更多映射
};

// 计算是否为移动端
const isMobile = computed(() => windowWidth.value <= 750);

const toggleDropdown = () => {
  console.log(lgTitle.value);
  
  if (lgTitle.value === '繁体') {
    // 从繁体切换到英文
    lgTitle.value = 'English';
    locale.value = 'en';
  } else {
    // 从英文切换到繁体
    lgTitle.value = '繁体';
    locale.value = 'zh-TW';
  }

  // 更新 store 中的值
  i18nStore.setLgTitle(lgTitle.value);
  i18nStore.setLocale(locale.value);
};

const checkScreenSize = () => {
  windowWidth.value = window.innerWidth;
  // 屏幕变大时自动关闭移动菜单
  if (windowWidth.value > 768) {
    isMobileMenuOpen.value = false;
  }
};

const closeNavbarIfNeeded = (event) => {
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  const hamburgerButton = this.$refs.hamburgerButton;
  if (navbarCollapse && hamburgerButton) {
    const isClickInside = navbarCollapse.contains(event.target) || hamburgerButton.contains(event.target);
    if (!isClickInside) {
      isExpanded.value = false;
      navbarCollapse.classList.remove('show');
    }
  }
};

onMounted(() => {
  window.addEventListener('resize', checkScreenSize);
});

// 在组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
  window.removeEventListener('click', closeNavbarIfNeeded);
});

const oninvalid = (routeName) => {
  if (routeName === 'home') router.push({ name: 'home' });
  // else if (routeName === 'Insight') router.push({ name: 'Insight' });
  // else if (routeName === 'Market') router.push({ name: 'Market' });
  // else if (routeName === 'Ecosystem') router.push({ name: 'Ecosystem' });
};

const expandNavbar = () => {
  isExpanded.value = true;
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  if (navbarCollapse) {
    navbarCollapse.classList.add('show');
  }
};

const collapseNavbar = () => {
  isExpanded.value = false;
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  if (navbarCollapse) {
    navbarCollapse.classList.remove('show');
  }
};
const onAbuot = (value) => {
  console.log(value.label);
  if (value.label === 'doc') {
    window.open('https://110-11.gitbook.io/openvault-docs', '_blank')
  } else {
    router.push({ name: 'Contact' })
  }
  isMenuOpen.value = false;
};
const navigateTo = (routeName) => {
  if (routeName === 'contact') router.push({ name: 'Contact' });
  else if (routeName === 'singUp') router.push({ name: 'singUp' });
  else if (routeName === 'Docs') window.open('https://110-11.gitbook.io/openvault-docs', '_blank');
  // 点击导航项后关闭菜单（移动端）
  isExpanded.value = false;
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  if (navbarCollapse) {
    navbarCollapse.classList.remove('show');
  }
  // 关闭 About 下拉菜单
  isAboutDropdownOpen.value = false;
  // 关闭其他下拉菜单
  const dropdownContent = document.querySelector('.nav-item.dropdown .dropdown-content');
  if (dropdownContent) {
    dropdownContent.style.display = 'none';
  }
};

// 新增：切换 About 下拉菜单的显示状态
const toggleAboutDropdown = () => {
  isAboutDropdownOpen.value = !isAboutDropdownOpen.value;
};

// 切换菜单显示状态
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // 关闭所有下拉菜单当主菜单关闭时
  if (!isMenuOpen.value) {
    menuItems.value.forEach(item => {
      if (item.showDropdownContent) {
        item.showDropdownContent = false;
      }
      if (item.checkbox) {
        item.hidden = true;
      }
    });
  }
};

// 新增判断是否为当前路由的方法
const isActive = (item) => {
  return router.currentRoute.value.name === routeMap[item.text];
};

// 新增处理 router-link 点击事件的方法
const handleRouterLinkClick = (item) => {
  if (item.relatedCheckboxItems) {
    toggleDropdownContent(item);
  }
  isMenuOpen.value = false; // 关闭菜单
};

const toggleDropdownContent = (item) => {
  // 关闭所有其他下拉菜单
  menuItems.value.forEach(i => {
    if (i !== item) {
      i.showDropdownContent = false;
    }
  });

  // 切换当前项的下拉状态
  item.showDropdownContent = !item.showDropdownContent;

  // 更新关联的checkbox项的显示状态
  if (item.relatedCheckboxItems) {
    menuItems.value.forEach(menuItem => {
      if (menuItem.checkbox) {
        const isRelated = item.relatedCheckboxItems.some(cbItem => cbItem.id === menuItem.id);
        menuItem.hidden = !(item.showDropdownContent && isRelated);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.homepage01 {
  // padding: 1.2vw 311px;
  background-color: #fff;
  text-align: center;
height: 5.2083vw;
  .navbar-nav {
    display: flex;
  }
}
.object-contain{
  
  margin-top: 1.5104vw;
  width: 6.1979vw;
  height: 2.5vw;
  margin-bottom: 1.1979vw;
}

.font-size-lg{
width: 6.7188vw;
  height: 2.8646vw;
  border-radius: 1.4063vw;
  background: #000000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.font-size{
  width: 1.7188vw;
  color: #FFFFFF;
  font-size: 1.6667vw;
  font-weight: 400;
  font-family: Source Han Sans SC;
padding: 0;
  // margin-left: 70px;
  margin-right: 1.3542vw;
}


/* 新增自定义移动端菜单样式 */
.custom-mobile-menu {
  width: 46.67vw;
  height: 80vw;
  position: fixed;
  /* 使用 fixed 定位确保悬浮在页面上 */
  right: 0;
  /* 确保菜单在页面最右边 */
  top: 20.8vw;
  /* 确保菜单超出页面高度时可以滚动 */
  overflow-y: auto;
  z-index: 50;
  /* 确保菜单显示在其他元素之上 */
  background-color: white;
  /* 确保背景颜色 */
  box-shadow: 0 0 1.33vw rgba(0, 0, 0, 0.1);
  /* 保留阴影效果 */
}

.button_text2 {
  border: .0521vw #000000 solid;
  color: #000000;
  background-color: #fff;
  padding: .3646vw 1.77vw;
  font-size: .8333vw;
  line-height: 1.5;
  border-radius: 0.5vw;
  margin-right: .8854vw;
  /* 同上 */
}

/* AppNavbar.vue 的样式 */
.mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4063vw;
  background-color: #000000;
}

.navbarBca {
  background-color: #030304;
}

/* 非移动端媒体查询 */
@media (min-width: 40.0521vw) {
  .card-title {
    font-size: 1.042vw;
    font-weight: 500;
  }

  .card-text {
    font-size: .8333vw;
  }

  .dropdown-content {
    margin-top: .8333vw;
    display: block;
    /* margin-left: -463px; */
  }

  .dropdown-content:hover {
    background-color: #E8C98D;
  }
}

.gradient-text {
  /* background: linear-gradient(90deg, #E4CDAA, #F5F7F4, #E7C482); */
  color: #FCDDAE;
  -webkit-background-clip: text;
  background-clip: text;
  /* color: transparent; */
  /* 关键：完全移除可能影响布局的属性 */
  display: inline;
  /* 保持内联特性，避免盒子模型影响 */
  padding: 0;
  line-height: normal;
  /* 防止行高撑开 */
}

/* 完全禁用选中状态和路由的额外样式 */
.router-link-active.gradient-text,
.nav-link.gradient-text:hover {
  /* background: linear-gradient(90deg, #E4CDAA, #F5F7F4, #E7C482); */
  color: #FCDDAE;
  /* 确保无任何附加效果 */
  background-clip: text;
  -webkit-background-clip: text;
  text-decoration: none;
  /* 可选：移除下划线 */
}

.navbar {
  z-index: 9999;
}

.Aboutcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5625vw;
}

.Aboutcard1 {
  width: 15vw;
  margin-right: 1.5625vw;
}

/* 隐藏下拉内容 */
.nav-item.dropdown .dropdown-content {
  display: none;
  position: absolute;
  background: #000000;
  box-shadow: 0 .4167vw .8333vw rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* padding: 1rem; */
  width: 25vw;
  height: 14.58vw;
  border-radius: .4167vw;
}

/* 鼠标悬停时显示 */
.nav-item.dropdown:hover .dropdown-content {
  display: block;
}

/* 移动端媒体查询 */
@media (max-width: 40vw) {
  .mobile-menu {
    position: fixed;
    top: 3.125vw;
    /* 根据导航栏高度调整 */
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: 1000;
    /* padding: 1.042vw; */
    overflow-y: auto;
  }

  .navbar {
    padding: 0;
  }

  .navbar-collapse {
    transition: all 0.3s ease;
  }

  .dropdown-content {
    width: 100% !important;
    padding: 0;
    position: static;
    background: none;
    box-shadow: none;
  }

  .d-flex.gap-3 {
    flex-direction: column !important;
  }

  .card-title {
    font-size: 1.3021vw;
    font-weight: 500;
  }

  .card-text {
    font-size: .7292vw;
    color: #C7C6C6;
  }

  .h5Molde {
    width: 5.2083vw;
    height: 100vh;
    background-color: #000000;
  }

  .navbar-nav {
    font-size: 150%;
  }

  /* 去掉链接下划线并设置字体颜色 */
  .absolute ul li a {
    text-decoration: none;
    color: #333333;
    font-size: 1.25vw;
  }

  /* 确保 active-mobile2 类的样式优先级足够 */
  .active-mobile2 {
    background-color: #E9E9E9;
    color: #333333;
    font-size: 1.25vw;
  }

  .absolute ul {
    padding: 0;
    color: #333333;
  }

  /* 修改菜单项样式 */
  .absolute ul li {
    color: #333333;
    font-size: 1.25vw;
  }

  .active-mobile .nav-link.gradient-text {
    color: black;
    /* 修改字体颜色 */
    -webkit-background-clip: initial;
    background-clip: initial;
  }

  .navbar-collapse {
    max-height: 80vh;
    /* 设置最大高度为视口高度的 80% */
    overflow-y: auto;
    /* 超出最大高度时显示垂直滚动条 */
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    /* 增强移动端滚动体验 */
  }

  .Aboutcard {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  .nav-item.dropdown .dropdown-content {
    width: 100% !important;
    padding: 0 0.1rem;
    /* 减小移动端的 */
    position: static;
    background: none;
    box-shadow: none;
    display: none;
    /* 确保初始状态下隐藏 */
  }

  .nav-item.dropdown.show .dropdown-content {
    display: block;
    /* 当有 show 类时显示 */
  }

  .Aboutcard1,
  .Aboutcard2 {
    margin-right: 0;
    margin-bottom: 1.042vw;
  }

  .Aboutcard2:last-child {
    margin-bottom: 0;
  }

  .d-flex button {
    width: 100%;
    margin-top: .5208vw;
  }

  .nav-item {
    margin-bottom: 1.042vw;
  }
}

@media (max-width: 51.6667vw) {

  /* 确保在移动端下拉菜单中按钮独占一行 */
  .navbar-collapse .d-flex {
    flex-direction: column;
    gap: 0.5rem !important;
  }

  /* 调整按钮间距 */
  .navbar-collapse .d-grid {
    width: 100%;
  }

  /* 语言选择器全宽 */
  .navbar-collapse .dropdown {
    width: 100%;
  }
}

@media (min-width: 51.6667vw) {
  .navbar-nav .nav-item {
    margin-left: 2.7604vw;
    font-size: 1.042vw;
    /* padding: 30px; */
    margin-top: .5208vw;
  }
}

@media (max-width: 40vw) {
  .navbar {
    /* padding: 0.5rem 1rem; */
  }

  .navbar .px-4 {
    /* padding: 0.5rem 1rem; */
  }
}

/* 去掉 langBtn 按钮的边框和背景 */
#langBtn {
  /* background: none; */
  border: none;
  box-shadow: none;
  color: #000;
}

/* AppNavbar copy.vue 的样式 */
.common-btn-size {
  /* padding: 0.5rem 1.5rem; 可根据需要调整内边距 */
  /* font-size: 1rem; 可根据需要调整字体大小 */
  /* line-height: 1.5; */
  /* border-radius: 0.375rem;  */
}

.nav {
  display: flex;
  justify-content: space-evenly;
  /* ⭐ 平均分布导航项 */
  align-items: center;
  flex: 1;
  // max-width: 750px;
  /* 控制总宽度 */
  // margin-right: 10px;
  /* 和两边拉开一点距离 */
}

.nav a {
  font-size: 1.3542vw;
  font-weight: 400;
  color: #000000;
  font-family: 'Source Han Sans SC', sans-serif;
  text-decoration: none;
}

</style>