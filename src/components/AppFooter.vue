<template>
  <!-- 使用 fixed-bottom 类将页脚固定在底部 -->
  <div style="background-color: #000000;" class="text-white-box">
    <div class="homepage01 text-white">
      <footer>
        <div
          style="display: flex; justify-content: flex-start; flex-wrap: wrap;align-items:center;height: 2.3958vw; gap: 20.5729vw;  margin: 0 auto; width: 100%;">
          <!-- 左边部分 -->
          <div class="footer-left-align">
            <div>
              <router-link to="/" class="text-white text-decoration-none">
                <img src="@/assets/Webx-白色版本.png" alt="WebX Logo" class="w-32 h-12 object-contain"
                  style="width: 5.9375vw; height: 2.3958vw;">
              </router-link>
            </div>
            <!-- <div class="d-flex" style=" margin:1.93vw 0  0.89vw; gap: 48px;"> -->

          </div>
          <!-- 右边部分 -->
          <div class="" style="display: flex; justify-content: flex-start; align-items: flex-start; gap: 7.4479vw;">
            <div class="">
              <router-link style="font-size: 0.9375vw; color: #FFFFFF; text-decoration: none;" to="/">
                <h3
                  style="font-size: .9375vw;font-weight: 400;font-family: Source Han Sans SC; color: #FFFFFF;line-height: 2.3958vw;"
                  class="h3">{{ $t('navbar.home') }}</h3>
              </router-link>
            </div>
            <div class="">
              <router-link style="font-size: 0.9375vw; color: #FFFFFF; text-decoration: none;" to="/Ecosystem">
                <h3
                  style="font-size: .9375vw;font-weight: 400;font-family: Source Han Sans SC;color: #FFFFFF;line-height: 2.3958vw;"
                  class="h3">{{ $t('navbar.ecosystem') }}</h3>
              </router-link>

            </div>
            <div class="">
              <router-link style="font-size: 0.9375vw; color: #FFFFFF; text-decoration: none;" to="/Media">
                <h3
                  style="font-size: .9375vw;font-weight: 400;font-family: Source Han Sans SC; color: #FFFFFF;line-height: 2.3958vw;"
                  class="h3">{{ $t('navbar.media') }}</h3>
              </router-link>
            </div>
            <div class="">
              <router-link style="font-size: 0.9375vw; color: #FFFFFF; text-decoration: none;" to="/Contacts">
                <h3
                  style="font-size: .9375vw;font-weight: 400;font-family: Source Han Sans SC;line-height: 2.3958vw; color: #FFFFFF;"
                  class="h3">{{ $t('navbar.contacts') }}</h3>
              </router-link>
            </div>
          </div>
        </div>
        <div class="d-flex" style="  gap: 2.5vw;display: flex;margin-top: 2.0833vw;">
          <a href="#" class="font-awesome-icon hover-opacity"> <img src="../assets/icon.png" alt=""
              style="width: 1.6146vw; height: .9375vw;"></a>
          <a href="#" class="font-awesome-icon hover-opacity"> <img src="../assets/推特.png" alt=""
              style="width: 1.3021vw; height: 1.0938vw;"></a>
          <a href="#" class="font-awesome-icon hover-opacity"> <img src="../assets/邮件,邮箱.png" alt=""
              style="width: 1.25vw; height: .9375vw;"></a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright-section">
          <p class="copyright-text">© 2025 WebX. All rights reserved.</p>
        </div>
      </footer>

    </div>


    <!-- 回顶部按钮 -->
    <div ref="backTopButton" class="position-fixed  bottom-0 end-0 m-3"
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
//   padding:5.21vw   15.625vw;
//   height: 268.5px;
// }
.text-white-box{
height: 13.9844vw;
}
.homepage01 {
  // padding: 75px 20px;
  padding-top: 3.9063vw;
  
 display: flex;
 justify-content: center;
 
  // margin: 0 auto;
  box-sizing: border-box;
}
.homepage01 div{
  height: 2.3958vw;
}
.footer-left-align{
  height: 2.3958vw;
}

.mobile_footer {
  background-color: #000000;
  padding: 2vw 4vw; /* 15px / 750 * 100 = 2vw, 30px / 750 * 100 = 4vw */
}

.mobile_footer1 {
  display: flex;
  justify-content: space-between;
  // align-items: center;
}

.mobile_text {
  font-size: 1.866vw; /* 14px / 750 * 100 = 1.866vw */
  color: #969DA2;
  margin-right: 2.666vw; /* 20px / 750 * 100 = 2.666vw */
  line-height: 3vw;
}

.mobile_footer1_t {
  h2 {
    color: #EAEAEA;
    font-size: 2.666vw; /* 20px / 750 * 100 = 2.666vw */
    margin: 4.933vw 0; /* 37px / 750 * 100 = 4.933vw */
  }
  p {
    color: #969DA2;
    font-size: 2.133vw; /* 16px / 750 * 100 = 2.133vw */
  }
}
.footer-with-background{
  // height: 25vh;
  padding: 3.125vw 0 0;
  background-color: #000000;
}
// 添加新样式规则
footer h3 {
  font-size: .8333vw;
}

.list-unstyled{
  margin-top: 1.9792vw;
  padding-bottom: 1.9792vw;
}
.list-unstyled li {
  padding-bottom: 1.0417vw;
  color: #969DA2;
  font-size: .7292vw;
}
.h3{
  color: #EAEAEA;
  font-size: .9375vw;
}
// 添加媒体查询
@media (max-width: 39.9479vw) {
  .footer-with-background {
    padding:  0 0 .7813vw;
  }
  .list-unstyled li {
    padding-bottom: .7813vw; /* 增加列表项的底部间距 */
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
  font-size: 0.75vw;
  font-family: 'Source Han Sans SC', sans-serif;
  font-weight: 400;
  margin: 0;
  padding-bottom: 1vw;
}
</style>