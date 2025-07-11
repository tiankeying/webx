<template>
  <!-- 移动端底部内容 -->
  <footer class="mobile-footer">
    <div class="footer-content">
      <!-- Logo区域 -->
      <div class="footer-logo">
        <div class="logo-img">
          <img src="../assets/Webx-白色版本.png" alt="WebX Logo" />
        </div>
        <!-- 社交媒体图标 -->
        <div class="social-icons">
          <a href="https://medium.com/@webx" class="social-link">
            <img src="../assets/icon.png" alt="社交图标" class="social-icon1" />
          </a>
          <a href="https://x.com/WebX_vip" class="social-link">
            <img src="../assets/推特.png" alt="推特" class="social-icon2" />
          </a>
          <a href="mailto:webx@webx.vip" class="social-link">
            <img src="../assets/邮件,邮箱.png" alt="邮箱" class="social-icon3" />
          </a>
        </div>
      </div>

      <!-- 导航链接 -->
      <div class="footer-nav">
        <ul class="nav-column">
          <li><router-link to="/mobile" @click="closeMenu">{{ $t('navbar.home') }}</router-link></li>
          <li><router-link to="/Ecosystem/mobile" @click="closeMenu">{{ $t('navbar.ecosystem') }}</router-link></li>
          <li><router-link to="/Media/mobile" @click="closeMenu">{{ $t('navbar.media') }}</router-link></li>
          <li><router-link to="/Contacts/mobile" @click="closeMenu">{{ $t('navbar.contacts') }}</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="copyright-section">
      <p class="copyright-text">© 2025 WebX. All rights reserved.</p>
    </div>
    <!-- 回顶部按钮 -->
    <div ref="backTopButton" class="back-to-top" :style="{ display: isBackTopVisible ? 'block' : 'none' }">
      <a class="btn btn-secondary" @click="scrollToTop">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </a>
      <!-- <button class="back-top-btn" @click="scrollToTop">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button> -->
    </div>
  </footer>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
  
const isMenuOpen = ref(false);
const isBackTopVisible = ref(false);
const backTopButton = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 回到顶部功能
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 监听滚动事件，控制回顶部按钮显示
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isBackTopVisible.value = scrollTop > 300; // 滚动超过300px时显示按钮
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style scoped lang="scss">

/* 移动端底部样式 */
.mobile-footer {
  background-color: #000000;
  width: 750px;
  height: 221px;
  position: relative;
}

.footer-content {
  max-width: 750px;
  margin-left: 29px;
  margin-right: 31px;
}

.footer-logo {
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
}

.logo-img {
  width: 112px;
  height: 46px;
}

.logo-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-nav {
  display: flex;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 36px;
}

.social-link {
  display: inline-block;
  transition: opacity 0.3s;
}

.social-link:hover {
  opacity: 0.7;
}

.social-icon1 {
  width: 29px;
  height: 17px;
}

.social-icon2 {
  width: 25px;
  height: 21px;
}

.social-icon3 {
  width: 23px;
  height: 17px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  gap: 134px;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 21px;
}

ul li {
  text-decoration: none;
  transition: color 0.3s;
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 45px;
}

ul li a {
  text-decoration: none;
  transition: color 0.3s;
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 20px;
  // color: #FFFFFF;
  color: #898989;
}

/* 回顶部按钮样式 */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.back-top-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    // border: 1px solid red;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateY(-1px);
  }
}

/* 响应式调整 */
@media (max-width: 480px) {
  .back-to-top {
    bottom: 110px;
    right: 15px;
    // border: 1px solid red;
  }
  
  .back-top-btn {
    width: 45px;
    height: 45px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
.copyright-section {
  color: #8F8F8F;
  text-align: center;
  margin-top: 39px;
  margin-bottom: 23px;
}

.copyright-text {
  color: #969DA2;
  font-size: 14.4px;
  font-family: 'Source Han Sans SC', sans-serif;
  font-weight: 400;
  margin: 0;
  // padding:15px 0 0 0;
}
</style>
  