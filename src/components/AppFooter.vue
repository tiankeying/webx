<template>
  <!-- 使用 fixed-bottom 类将页脚固定在底部 -->
  <div style="background-color: #000000;" class="text-white-box">
    <div class="homepage01 text-white">
      <footer>
        <div class="footer-section">
          <!-- 左边部分 -->
          <div class="footer-left-align">
            <div>
              <router-link to="/" class="text-white text-decoration-none">
                <img src="@/assets/Webx-白色版本.png" alt="WebX Logo" class="w-32 h-12 object-contain">
              </router-link>
            </div>

          </div>
          <!-- 右边部分 -->
          <div class="footer-right-align">
            <div>
              <router-link class="link" to="/">
                <h3 class="h3">{{ $t('navbar.home') }}</h3>
              </router-link>
            </div>

            <div>
              <router-link class="link" to="/Ecosystem">
                <h3 class="h3">{{ $t('navbar.ecosystem') }}</h3>
              </router-link>
            </div>

            <div>
              <router-link class="link" to="/Media">
                <h3 class="h3">{{ $t('navbar.media') }}</h3>
              </router-link>
            </div>

            <div>
              <router-link class="link" to="/Contacts">
                <h3 class="h3">{{ $t('navbar.contacts') }}</h3>
              </router-link>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <a href="https://medium.com/@webx" class="font-awesome-icon hover-opacity"> <img src="../assets/icon.png" alt=""
              class="font-awesome-icon-img1"></a>
          <a href="https://x.com/WebX_vip" target="_blank" class="font-awesome-icon hover-opacity"> <img src="../assets/推特.png" alt=""
              class="font-awesome-icon-img2"></a>
          <a href="mailto:webx@webx.vip" class="font-awesome-icon hover-opacity"> <img src="../assets/邮件,邮箱.png" alt=""
              class="font-awesome-icon-img3"></a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright-section">
          <p class="copyright-text">© 2025 WebX. All rights reserved.</p>
        </div>
      </footer>

    </div>


    <!-- 回顶部按钮 -->
    <div ref="backTopButton" class="position-fixed  bottom-0 end-0 m-3 back-to-top"
      :style="{ display: isBackTopVisible ? 'block' : 'none' }">
      <a class="btn btn-secondary" @click="scrollToTop">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </a>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 控制回顶部按钮显示状态
const isBackTopVisible = ref(false);
// 引用回顶部按钮元素
const backTopButton = ref(null);

// 滚动到顶部的方法
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 处理滚动事件的方法
const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  isBackTopVisible.value = scrollY > 100;
};

// 判断是否为移动端
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);
  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);
  console.log(t('common.footer.investTitle'));
});

onUnmounted(() => {
  // 移除滚动事件监听
  window.removeEventListener('scroll', handleScroll);
  // 移除窗口大小变化监听
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
// .homepage01{
//   padding:100.032px   300px;
//   height: 13.9844vw;
// }
.text-white-box{
max-height: 268.5px;
min-height: 268.5px;
}
.homepage01 {
  // padding: 3.9063vw 1.0417vw;
  padding-top: 75.001px;
  
 display: flex;
 justify-content: center;
  // margin: 0 auto;
  box-sizing: border-box;
}
.footer-section { 
  display: flex; 
  justify-content: flex-start; 
  flex-wrap: wrap;align-items:center;
  height: 45.9994px; 
  gap: 394.9997px;  
  margin: 0 auto; width: 100%;
}

.footer-section .object-contain{
  width: 114px;
  height: 46px;
}

.homepage01 div{
  height: 46px;
}
.footer-left-align{
  max-height: 46px;
  max-width: 114px;
}

.mobile_footer {
  background-color: #000000;
  padding: 38.4px 76.8px; /* .7813vw / 750 * 100 = 38.4px, 1.5625vw / 750 * 100 = 76.8px */
}

.mobile_footer1 {
  display: flex;
  justify-content: space-between;
  // align-items: center;
}

.mobile_text {
  font-size: 35.8272px; /* .7292vw / 750 * 100 = 35.8272px */
  color: #969DA2;
  margin-right: 51.1872px; /* 1.0417vw / 750 * 100 = 51.1872px */
  line-height: 57.6px;
}

.mobile_footer1_t {
  h2 {
    color: #EAEAEA;
    font-size: 51.1872px; /* 1.0417vw / 750 * 100 = 51.1872px */
    margin: 94.7136px 0; /* 1.9271vw / 750 * 100 = 94.7136px */
  }
  p {
    color: #969DA2;
    font-size: 40.9536px; /* .8333vw / 750 * 100 = 40.9536px */
  }
}
.footer-with-background{
  // height: 25vh;
  padding: 60px 0 0;
  background-color: #000000;
}
// 添加新样式规则
footer h3 {
  font-size: 15.9994px;
}

.list-unstyled{
  margin-top: 38.0006px;
  padding-bottom: 38.0006px;
}
.list-unstyled li {
  padding-bottom: 20.0006px;
  color: #969DA2;
  font-size: 14.0006px;
}
.h3{
  color: #EAEAEA;
  font-size: 18px;
}
// 添加媒体查询
@media (max-width: 766.9997px) {
  .footer-with-background {
    padding:  0 0 15.001px;
    
  }
  .list-unstyled li {
    padding-bottom: 15.001px; /* 增加列表项的底部间距 */
  }
  .row.g-4 {
    flex-direction: column;
    min-width: auto;
  }
}
.copyright-section{
  color: #8F8F8F;
    text-align: center;
}
.copyright-text {
  color: #969DA2;
  font-size: 14.4px;
  font-family: 'Source Han Sans SC', sans-serif;
  font-weight: 400;
  margin: 0;
  padding-bottom: 19.2px;
}

.footer-right-align{
  display: flex; 
  justify-content: flex-start; 
  align-items: flex-start;
   gap: 142.9997px;
}

.footer-right-align .h3{
  font-size: 18px;
  font-weight: 400;
  font-family: Source Han Sans SC; 
  color: #FFFFFF;
  line-height: 45.9994px;
}

.footer-right-align .link{
  font-size: 18px; 
  color: #FFFFFF; 
  text-decoration: none;
}


.d-flex {
gap: 48px;
display: flex;
margin-top: 40px;

max-width: 180px;
}
.d-flex .font-awesome-icon-img1{ 
width: 31.0003px; height: 18px;
}
.d-flex .font-awesome-icon-img2 {
  width: 25.0003px; height: 21.001px;
}
.d-flex .font-awesome-icon-img3 {
  width: 24px; height: 18px;
}

// .back-to-top{
//   width: 38px;
//   height: 38px;
//   border: 1px solid red;
// }
// .btn-secondary {
//   width: 100px;
//   height: 100px;
//   max-width: 100px;
//   max-height: 100px;
//   position: fixed;
//   bottom: 200px !important;
//   left: 0;
//   right: 0;
//   border: 1px solid red;
// }

</style>