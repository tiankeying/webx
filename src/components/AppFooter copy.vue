<template>
  <!-- 使用 fixed-bottom 类将页脚固定在底部 -->
  <div v-if="isMobile" class="mobile_footer">
    <div class="mobile_footer1" style="line-height: 3vw;" >
      <div><img src="../assets/logo.png" alt="" style="
      height: 4vw; "></div>
      <div class="mobile_footer1">
        <div class="mobile_text">Tokenization, Trading, Investment</div>
        <div class="d-flex  gap-3" >
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'x-twitter']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'discord']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'telegram']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'medium']" /></a>
            </div>
      </div>
    </div>
    <div class="mobile_footer1">
      <div class="mobile_footer1_t">
        <h2>Invest</h2>
        <p>Investment Hub</p>
        <p>Trading Hub</p>
      </div>
      <div class="mobile_footer1_t">
        <h2>Company</h2>
        <p>About Us</p>
      </div>
      <div class="mobile_footer1_t">
        <h2>Terms & Conditions</h2>
        <p>Term of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div class="mobile_footer1_t">
        <h2>Explores</h2>
        <p>Insight </p>
        <p>Docs</p>
        <p>Ecosystem</p>
      </div>

    </div>
  </div>
  <div v-else style="background-color: #000000;" class="text-white ">
    <div  class="homepage01 text-white">
      <footer >
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
          <!-- 左边部分 -->
          <div :style="{ width: isMobile ? '100%' : 'auto', flex: isMobile ? 'none' : '1' }"  class="footer-left-align">
            <div class="fw-bold fs-4">
              <router-link to="/" class="text-white text-decoration-none">
                <img src="@/assets/logo.png" alt="WebX Logo"  class="w-32 h-12 object-contain" style="width: 5.3125vw;">
              </router-link>
            </div>
            <p style="font-size: 0.73vw; color: #969DA2; margin: 0.89vw 0 ;">{{ t('common.footer.text') }}</p>
            <div class="d-flex  gap-3" style=" margin:0 0  0.89vw">
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'x-twitter']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'discord']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'telegram']" /></a>
              <a href="#" class="font-awesome-icon hover-opacity"><font-awesome-icon color="#4D4D4D"
                  :icon="['fab', 'medium']" /></a>
            </div>
          </div>
          <!-- 右边部分 -->
          <div class="" style="display: flex; justify-content: space-between; align-items: flex-start;margin-left:7.8125vw;"  :style="{ 'flex': '3', 'min-width': isMobile ? 'auto' : '26.04vw' }">
            <div class="">
              <h3 style="font-size: 0.9375vw;" class="h3">{{ t('common.footer.investTitle') }}</h3>
              <ul class="list-unstyled">
                <li><router-link style="font-size: 0.9375vw;" to="#" class="text-white-50 text-decoration-none">
                {{ t('home.cardText') }}
                </router-link></li>
                <li><router-link  style="font-size: 0.729vw;" to="#" class="text-white-50 text-decoration-none">{{
                    t('common.footer.earlyStageStartup')
                    }}</router-link></li>
              </ul>

            </div>
            <div class="">
              <h3 style="font-size: 0.9375vw;" class="h3">{{ t('common.footer.companyTitle') }}</h3>
              <ul class="list-unstyled">
                <li><router-link style="font-size: 0.729vw;" to="/Contact" class="text-white-50 text-decoration-none">{{ t('common.footer.aboutUs')
                    }}</router-link></li>
              </ul>

            </div>
            <div class="">
              <h3 style="font-size: 0.9375vw;" class="h3">{{ t('common.footer.termsTitle') }}</h3>
              <ul class="list-unstyled">
                <li><router-link  style="font-size: 0.729vw;" to="/Contact" class="text-white-50 text-decoration-none">{{
                    t('common.footer.termOfUse')
                    }}</router-link></li>
                <li><router-link  style="font-size: 0.729vw;" to="/Contact" class="text-white-50 text-decoration-none">{{
                    t('common.footer.privacyPolicy') }}</router-link>
                </li>
                <li><router-link  style="font-size: 0.729vw;" to="/Contact" class="text-white-50 text-decoration-none">{{
                    t('common.footer.cookiePolicy') }}</router-link></li>
              </ul>
            </div>
            <div class="">
              <h3 style="font-size: 0.9375vw;" class="h3">{{ t('common.footer.exploreTitle') }}</h3>
              <ul class="list-unstyled">
                <li><router-link  style="font-size: 0.729vw;" to="/Insight" class="text-white-50 text-decoration-none">{{ t('common.footer.insight')
                    }}</router-link></li>
                <!-- 修正链接引号 -->
                <li><a  style="font-size: 0.729vw;" href="https://110-11.gitbook.io/openvault-docs" target="_blank"
                    class="text-white-50 text-decoration-none">{{ t('common.footer.docs') }}</a></li>
                <li><router-link  style="font-size: 0.729vw;" to="/Ecosystem" class="text-white-50 text-decoration-none">{{
                    t('common.footer.ecosystem') }}</router-link></li>
              </ul>
            </div>
           
          </div>
        </div>
      </footer>
      
    </div>
    <!-- <div class="text-center text-white-50">  
           <img src="@/assets/logo-footer.png" alt="" class="img-fluid">
       </div>  -->
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
.homepage01{
  padding:5.21vw   15.625vw;
  height: 20.83vw;
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
  padding: 60px 0 0;
  background-color: #000000;
}
// 添加新样式规则
footer h3 {
  font-size: 1rem;
}

.list-unstyled{
  margin-top: 38px;
  padding-bottom: 38px;
}
.list-unstyled li {
  padding-bottom: 20px;
  color: #969DA2;
  font-size: 14px;
}
.h3{
  color: #EAEAEA;
  font-size: 18px;
}
// 添加媒体查询
@media (max-width: 767px) {
  .footer-with-background {
    padding:  0 0 15px;
  }
  .list-unstyled li {
    padding-bottom: 15px; /* 增加列表项的底部间距 */
  }
  .row.g-4 {
    flex-direction: column;
    min-width: auto;
  }
}
</style>