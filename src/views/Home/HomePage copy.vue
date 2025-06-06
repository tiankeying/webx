<template>
  <div class="homeConet">
    <!--  :style="{ backgroundImage: `url(${currentBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }" -->
    <section class="position-relative  d-flex align-items-center homepage01" style="margin-top: 148px;margin-bottom: 111px;">
      <div 
        class="position-relative text-white text-center w-100 px-3 px-md-5 pb-4 pb-md-5 z-1">
        <div class="container mx-auto" style="max-width: 72.92vw;">
          <div class="gradient-text  display-1">
            <!-- <span style="color: #F1D3A6; font-size: 4rem;">{{ t('home.welcome') }}</span><br> -->
            <div style="margin-bottom: 1.04vw;">
              <img src="../../assets/welcome.png" alt="" style="width: 42.76vw;">
            </div>
            <span style="color: #191919; font-size:2.08vw;padding: 2.08vw 0; font-weight: 400;">{{ t('home.welcome2')
              }}</span>
          </div>

          <div class="fs-4 fs-md-3 mx-auto" style="max-width: 31.25vw;margin-top: 2.76vw;">
            <p style="color: #818080; font-size: 1.14vw;" class="lh-base lh-md-lg"> {{ t('home.AssetText') }}</p>

            <div class="d-flex gap-2 gap-md-4 mt-4 mt-md-5 justify-content-center">
              <a href="https://110-11.gitbook.io/docs" target="_blank" rel="noopener noreferrer"
                class="text-decoration-none">
                <button style="border: 0.05vw #000000 solid; color: #000000;font-size: 0.83vw;" class="btn  common-btn-size">
                  {{ t('home.learnMore') }}
                </button>
              </a>
              <router-link to="/Contact" class="text-decoration-none">
                <button type="button" style="background-color: #E9CA8E;font-size: 0.83vw;" class="btn  common-btn-size">
                  {{ t('home.contactUs') }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class=" mx-auto homepage01">
      <div class="rounded-3 overflow-hidden mb-4">
        <div class="" style="display: flex;justify-content: space-between;align-items: center;">
          <div class="text-white">
            <div class="gradient-text" style="font-size: 2vw; ">
              
              {{ t('home.AssetText1') }}
            </div>
            <p class="mb-3" style=" font-size:0.93vw;margin-top: 1.30vw; color: #B4B4B4; ">
              
              {{ t('home.AssetText2') }}
            </p>
            <div style="display: flex; justify-content: space-between;align-items: center;">
              <!-- <button style="background-color:  #E9CA8E; " class="btn  common-btn-size">
              larn more
            </button> -->
              <div></div>
              <div>
                <img src="../../assets/static/index_img/暗色金币.png" alt="" style="width: 8.33vw;height:  8.33vw;">
              </div>
            </div>
          </div>
          <div class="pt-0">
            <div class=" overflow-hidden rounded-3">
              <div class="asset-hero_img-wrap" style="position: relative;">
                <img src="../../assets/static/index_img/OpenVault-6.png" alt="WebX Asset Ecosystem" loading="eager"
                  class="hero-img-adapt">
                <div class="floating-images">
                  <img src="../../assets/static/index_img/白.png" alt="" class="floating-image"style="width:3.2vw;">
                  <img src="../../assets/static/index_img/蓝金币.png" alt="" class="floating-image" style="width:5.2vw;">
                  <img src="../../assets/static/index_img/B金币I.png" alt="" class="floating-image" style="width:5.2vw;">

                  <img src="../../assets/static/index_img/黄.png" alt="" class="floating-image" style="width:3.2vw;">
                  <img src="../../assets/static/index_img/黄金币.png" alt="" class="floating-image" style="width:5.2vw;">
                  <img src="../../assets/static/index_img/绿.png" alt="" class="floating-image" style="width:3.2vw;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class=" mx-auto homepage01">
      <div class="rounded-3 overflow-hidden mb-4">
        <div class="gradient-text" style="font-size: 2vw; ">
          {{ t('home.rwaSectionTitle') }}
          </div>
        <div style="display: flex;justify-content: space-between;padding-top: 1.77vw;">
          <div style="width: 30.052vw; margin-right: 2.448vw;">
            <div class="card h-100" style="background-color: #0C0C0F;">
              <div class="position-relative">
                <img src="../../assets/static/index_img/pro_index01.png" alt="Hamilton Lane Private Infrastructure Fund"
                  class="card-img-top" style="height: 100%; object-fit: cover;">
              </div>
              <div class="card-body">
                <p class="" style="font-size: 1.875vw; color: #FFFFFF; margin: 0;">{{ t('home.cardText') }}</p>
                <div class="pt-2" style="font-size: 1.042vw; color: #B4B4B4;">
                 
                  {{ t('home.rwaSectionSubtitle') }}
                </div>
                <button style="border: 0.052vw #E9CA8E solid; color: #E9CA8E;height: 2.6vw;font-size: min(1.2vw, calc(2.6vw - 0.5vw)); font-weight: 400;margin-top: 1.16vw;"
                  class="btn  rounded-1 ">
                    {{ t('home.cardBtn') }}
                </button>
              </div>
            </div>
          </div>

          <!-- 第二个卡片 - 早期初创企业投资 -->
          <div style="width: 30.052vw;">
            <div class="card h-100" style="background-color: #0C0C0F;">
              <div class="position-relative">
                <img src="../../assets/static/index_img/pro_index02.png" alt="Hamilton Lane Private Infrastructure Fund"
                  class="card-img-top" style="height: 100%; object-fit: cover;">
              </div>
              <div class="card-body">
                <p class="" style="font-size: 1.875vw; color: #FFFFFF; margin: 0;">{{ t('home.cardText2') }}</p>
                <div class="pt-2" style="font-size: 1.042vw; color: #B4B4B4;">
                  {{ t('home.rwaSectionSubtitle2') }}
                </div>
                <button  style="border: 0.052vw #E9CA8E solid; color: #E9CA8E;height: 2.6vw;font-size: min(1.2vw, calc(2.6vw - 0.5vw));font-weight: 400;margin-top: 1.16vw;"
                  class="btn rounded-1 ">
                 {{ t('home.cardBtn2') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="homepage01 mx-auto " style="margin-top: 7.29vw;">
      <div class="rounded-3 overflow-hidden mb-4">
        <div style="display: flex;justify-content: space-between;padding-top: 1.77vw;">
          <div >
            <h2 class="gradient-text" style="font-size: 2vw; "> {{ t('home.investmentProductTitle') }}</h2>
            <p style=" margin-top: 0.94vw; color: #B4B4B4; margin-bottom: 2.81vw;font-size: 0.94vw;">
              
              {{ t('home.investmentProductDesc') }}
            </p>
            <button style="background-color:  #E9CA8E;font-size: 1.04vw; " class="btn  common-btn-size">
             
               {{ t('home.investmentProductCTA') }}
            </button>
          </div>
          <div >
            <div class=" overflow-hidden rounded-3">
              <div class="asset-hero_img-wrap" style="position: relative;">
                <img src="../../assets/static/index_img/底框.png" alt="WebX Asset Ecosystem" loading="eager"
                  class="hero-img-adapt2">
                <div class="floating-images2">
                  <img src="../../assets/static/index_img/币(2).png" alt="" class="floating-image2">
                  <img src="../../assets/static/index_img/手1.png" alt="" class="floating-image2">
                  <img src="../../assets/static/index_img/币(1).png" alt="" class="floating-image2">
                  <img src="../../assets/static/index_img/手2.png" alt="" class="floating-image2">
                  <img src="../../assets/static/index_img/币.png" alt="" class="floating-image2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="homepage01 mx-auto  py-5 ">
      <div class="rounded-3 overflow-hidden mb-4">
        <h2 class="gradient-text" style="font-size: 2.5vw;">{{ t('home.insightsTitle') }}</h2>
        <div class="row g-4">
          <div class="col-md-6 text-white p-4">
            <div style="color: #999999; margin: 0 0 1.04vw 0; font-size: 0.83vw;" class="smal">
              <span>{{ t('home.insightsAuthor') }}</span> • <span>{{ t('home.insightsDate') }}</span>
            </div>
            <h2 style="font-size: 1.5625vw;" class="text-white mb-3">{{ t('home.insightsArticleTitle') }}</h2>
            <p style=" margin-top: 0.94vw; color: #B4B4B4; margin-bottom: 2.81vw;font-size: 0.94vw;">
              {{ t('home.insightsArticleDesc') }}
            </p>
            <button style="border: 0.05vw #E9CA8E solid; color: #E9CA8E;font-size: 0.73vw;" class="btn  common-btn-size">
              {{ t('home.learnMore') }}
            </button>
          </div>
          <div class="col-md-6 p-4">
            <div class=" overflow-hidden rounded-3">
              <img src="../../assets/static/index_img/OpenVault-7.png" alt="WebX Asset"
                class="img-fluid object-fit-cover" style="height: 16.875vw;width:28.177vw;">
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="position-relative text-white py-5">
      <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img src="../../assets/static/index_img/OpenVault-8.png" alt="City buildings"
          class="w-100 h-100 object-fit-cover opacity-50">
      </div>
      <div style="padding: 0px 0; margin-top: 13.02vw;" class="container position-relative z-1 text-center px-4">
        <div style="margin: 2.66vw;">
          <img src="../../assets/static/index_img/logo.png" alt="" style="width: 6.35vw;height: 5.99vw;">
        </div>
        <h2 class="gradient-text" style="font-size: 2vw;">{{ t('home.futureFinanceTitle') }} </h2>
        <h4 class=" mb-4 " style="color: #E9CA8D;font-size:1.25vw;">{{ t('home.futureFinanceSubtitle') }}</h4>

        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 mx-auto"
          style="max-width: 26.04vw; margin-top: 2.8vw;">
          <!-- :placeholder="t('home.emailPlaceholder')" -->
          <!-- <input type="text" placeholder="Email"> -->
          <input type="email" :placeholder="t('home.emailPlaceholder')"
            style="background-color: #2F313B;border: none;border-radius:2.6vw; color: #fff !important;padding:0.43vw 1.77vw;font-size: 0.83vw;height: 2.5vw;"
            class=" flex-grow-1 custom-placeholder">
          <button type="button" style="background-color: #F3D79E;border: none;border-radius: 2.6vw;width: 5.89vw;height: 2.5vw;font-size:0.83vw;line-height: 0.83vw;" class="btn">{{
            t('home.signUpButton') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
export default {
  name: 'HomePage',
  setup() {
    const { t } = useI18n()
    const backgroundImage = new URL('@/assets/static/index_img/OpenVault-1.png', import.meta.url).href;
    const currentBackgroundImage = ref(backgroundImage);
    return { t,backgroundImage,currentBackgroundImage }
  }
}

</script>

<style scoped lang="scss">
.gradient-text{
  color: #191919;
}
.homeConet {
  // margin-top: 150px;
  background-color: #fff;
}
.homepage01{
  padding: 0 19.11vw;
}
.asset-hero_img-wrap {
  position: relative;
}

.floating-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.floating-image {
  position: absolute;
  animation: float 3s ease-in-out infinite;
}

.floating-image2 {
  position: absolute;
  animation: float 3s ease-in-out infinite;
  width: 3.6vw;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* 可以根据需要调整每张图片的位置 */
.floating-images img:nth-child(1) {
  top: 0;
  left: 100%;
}

.floating-images img:nth-child(2) {
  top: 0%;
  left: 20%;
}

.floating-images img:nth-child(3) {
  top: 10%;
  left: 40%;
}

.floating-images img:nth-child(4) {
  top: 0%;
  left: 60%;
}

.floating-images img:nth-child(5) {
  top: 0%;
  left: 70%;
}

.floating-images img:nth-child(6) {
  top: 20%;
  left: 70%;
}

.floating-images2 img:nth-child(1) {
  top: 25%;
  left: 0%;
}

.floating-images2 img:nth-child(2) {
  top: 0%;
  left: 10%;
}

.floating-images2 img:nth-child(3) {
  top: 30%;
  left: 40%;
}

.floating-images2 img:nth-child(4) {
  top: 0%;
  left: 60%;
}

.floating-images2 img:nth-child(5) {
  top: 20%;
  left: 85%;
}
.hero-img-adapt {
  width: 33.91vw !important;
  height:  31.46vw!important;
  object-fit: cover;
  object-position: center;
}
.hero-img-adapt2 {
  width:28.44vw !important;
  height: 25.05vw !important;
  object-fit: cover;
  object-position: center;
}
</style>