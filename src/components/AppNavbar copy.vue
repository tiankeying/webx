<template>
  <div>
    <div v-if="isMobile">
      <header class="relative">
        <!-- Navigation Bar -->
        <nav class="mobile">
          <div class="">
            <img src="../assets/logo.png" alt="WebX Logo" class="h-10">
          </div>
          <div class="">
            <button style="border: none;background-color: #000;" @click="toggleMenu">
              <img src="../assets/更多.png" alt="WebX Logo" class="h-10">
            </button>
          </div>
        </nav>

        <!-- Mobile Menu -->
        <div v-show="isMenuOpen"
          class="absolute right-0 top-16 bg-white text-gray-800 w-64 z-50 shadow-lg custom-mobile-menu">
          <ul>
            <li v-for="(item, index) in menuItems" :key="index" :class="[
              'py-3 px-4',
              index === 0 ? 'bg-gray-200' : '',
              item.hasBorder ? 'border-t border-gray-200' : '',
              // 根据路由名称添加 active-mobile 类
              isActive(item) ? 'active-mobile2' : ''
            ]">
              <template v-if="!item.checkbox">
                <!-- 使用 router-link 进行路由跳转 -->
                <router-link :to="{ name: routeMap[item.text] }"
                  style="display: flex;justify-content: space-between;align-items: center;"
                  @click.prevent="item.text === 'About' ? toggleDropdownContent(item) : handleRouterLinkClick(item)">
                  <span class="block">{{ item.text }}</span>
                  <van-icon v-if="item.icon" :name="item.showDropdownContent ? 'arrow-up' : 'arrow-down'" />
                </router-link>
                <!-- 新增：显示关联的checkbox内容 -->
                <div v-if="item.showDropdownContent && item.relatedCheckboxItems" class="mt-2">
                  <div v-for="(cbItem, cbIndex) in item.relatedCheckboxItems" :key="cbIndex"
                    class="flex items-start py-2 pl-4" @click="onAbuot(cbItem)">
                    <img :src="cbItem.img" alt="" style="margin-right: 1rem; width: 24px; height: 24px;">
                    <label :for="cbItem.id" class="" style="font-size:16px; color: #1C1C1C;">{{ cbItem.label }}</label>
                    <div>
                      <div style="display: block;">
                        <p class="" style="font-size: 14px;color: #4A4949;padding-left: 40px;">{{ cbItem.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </li>
          </ul>
          <div style="padding: 3.47vw 4.27vw;font-size:  2.67vw; ">
            <button style="border-radius: 2.67vw;
border: 0.27vw solid #000000; padding: 1.6vw 2.67vw;background-color: #fff;">{{ t('header.login') }}</button>
            <button style="border-radius: 2.67vw;
border: 0.27vw solid #000000; padding: 1.6vw 2.67vw;margin-left: 4.8vw;background-color: #fff;">{{ t('header.sgin')
              }}</button>
          </div>
        </div>
      </header>
    </div>
    <!-- 非移动端显示 AppNavbar copy.vue 的内容 -->
    <div v-else>
      <header>
        <div class="homepage01 fixed-top"
          style="display: flex;justify-content: space-between;align-items: center;padding-left:320px;padding-right: 307px;">
          <div style="display: flex;justify-content: space-between;align-items: center; ">
            <a class="navbar-brand" href="./index.html">
              <img src="../assets/logo@2x.png" alt="WebX Logo" class="object-contain">
            </a>

          </div>
          <div style="display: flex;">
            <router-link to="/"
              style="font-size: 32px;font-weight: 400; color: #000000;margin-left:147px;font-family: Source Han Sans SC; text-decoration: none;">Home</router-link>
            <router-link to="/Ecosystem"
              style="font-size: 32px;font-weight: 400; color: #000000;margin-left:98px;font-family: Source Han Sans SC; text-decoration: none;">Ecosystem</router-link>
            <router-link to="/Media"
              style="font-size: 32px;font-weight: 400; color: #000000;margin-left:98px;font-family: Source Han Sans SC; text-decoration: none;">Media</router-link>
            <router-link to="/Contacts"
              style="font-size: 32px;font-weight: 400; color: #000000;margin-left:98px;font-family: Source Han Sans SC; text-decoration: none;">Contacts</router-link>
          </div>
          <div class="font-size-lg">
            <div style=" margin-left: 26px;margin-right: 16px;margin-top:13px">
              <img src="../assets/图标：世界.png" alt="" style="width: 27px;
                  height: 27px;">
            </div>
            <div @click="navigateTo('singUp')" class="rounded common-btn-size">
              <img v-if="lgTitle === 'EN'" fill="none" src="../assets/en.png" alt="" @click="toggleDropdown" style="width: 35px;
                  height: 35px;">

              <!-- <img src="../assets/log up.png" alt=""> -->
              <div class="font-size">En</div>
              <!-- <button class=""
                style=" padding: 0.37vw 1.77vw;border-radius: 0.5vw; font-size: 0.73vw;background-color: #000;color: #FFFFFF;">En</button> -->
            </div>
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
  if (lgTitle.value === '繁体') {
    lgTitle.value = 'EN';
    locale.value = 'zh-TW';
  } else {
    lgTitle.value = '繁体';
    locale.value = 'en';
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
height: 100px;
  .navbar-nav {
    display: flex;
  }
}
.object-contain{
  
  margin-top: 29px;
  width: 119px;
  height: 48px;
  margin-bottom: 23px;
}

.font-size-lg{
width: 129px;
  height: 55px;
  border-radius: 27px;
  background: #000000;
  border: none;
  display: flex;
}
.font-size{
  width: 33px;
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 400;
  font-family: Source Han Sans SC;
padding: 0;
  // margin-left: 70px;
  margin-right: 26px;
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
  border: 1px #000000 solid;
  color: #000000;
  background-color: #fff;
  padding: 7px 1.77vw;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0.5vw;
  margin-right: 17px;
  /* 同上 */
}

/* AppNavbar.vue 的样式 */
.mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px;
  background-color: #000000;
}

.navbarBca {
  background-color: #030304;
}

/* 非移动端媒体查询 */
@media (min-width: 769px) {
  .card-title {
    font-size: 1.042vw;
    font-weight: 500;
  }

  .card-text {
    font-size: 16px;
  }

  .dropdown-content {
    margin-top: 16px;
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
  padding: 30px;
}

.Aboutcard1 {
  width: 18rem;
  margin-right: 30px;
}

/* 隐藏下拉内容 */
.nav-item.dropdown .dropdown-content {
  display: none;
  position: absolute;
  background: #000000;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* padding: 1rem; */
  width: 25vw;
  height: 14.58vw;
  border-radius: 0.5rem;
}

/* 鼠标悬停时显示 */
.nav-item.dropdown:hover .dropdown-content {
  display: block;
}

/* 移动端媒体查询 */
@media (max-width: 768px) {
  .mobile-menu {
    position: fixed;
    top: 60px;
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
    font-size: 25px;
    font-weight: 500;
  }

  .card-text {
    font-size: 14px;
    color: #C7C6C6;
  }

  .h5Molde {
    width: 100px;
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
    font-size: 24px;
  }

  /* 确保 active-mobile2 类的样式优先级足够 */
  .active-mobile2 {
    background-color: #E9E9E9;
    color: #333333;
    font-size: 24px;
  }

  .absolute ul {
    padding: 0;
    color: #333333;
  }

  /* 修改菜单项样式 */
  .absolute ul li {
    color: #333333;
    font-size: 24px;
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
    margin-top: 10px;
  }

  .nav-item {
    margin-bottom: 1.042vw;
  }
}

@media (max-width: 992px) {

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

@media (min-width: 992px) {
  .navbar-nav .nav-item {
    margin-left: 53px;
    font-size: 1.042vw;
    /* padding: 30px; */
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
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
</style>