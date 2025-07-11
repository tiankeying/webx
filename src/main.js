import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { setI18nLocale } from "./locales/i18n.js";
import i18n from "./locales/i18n.js";

import "@/iconfont/iconfont.css";
// 导入 naive-ui
// import naive from 'naive-ui';
// 导入 vant 组件库
import Vant from "vant";
// 导入 vant 样式
import "vant/lib/index.css";
import "@/styles/global.scss";
// Bootstrap 5 CSS + JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 包含 Popper.js

// 导入 Font Awesome 相关模块
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faDiscord,
  faTelegram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

library.add(faArrowUp, faXTwitter, faDiscord, faTelegram, faMedium);

// // --- 开始添加 rem 适配代码 ---
// function setRemBase() {
//     const baseSize = 75; // 这个基准值应与 postcss-pxtorem 中的 rootValue 保持一致或有明确的换算关系
//     // 750 是设计稿的宽度
//     const scale = document.documentElement.clientWidth / 750;
//     // 设置页面根节点字体大小，Math.min(scale, 2) 用来限制最大缩放比例，例如不超过2倍
//     document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
//   }

//   // 初始化
// setRemBase();
// // 监听窗口变化，重新设置 rem 基准值
// window.addEventListener('resize', setRemBase);
// // --- 结束添加 rem 适配代码 ---

// function setRemBase() {
//   const designWidth = 1920; // 你的设计稿宽度
//   const baseSize = 192; // 对应 postcss-pxtorem 的 rootValue

//   const scale = document.documentElement.clientWidth / designWidth;
//   document.documentElement.style.fontSize = baseSize * scale + "px";
// }

// 初始化
// setRemBase();

// // 监听窗口变化自动更新
// window.addEventListener("resize", setRemBase);
// window.addEventListener("orientationchange", setRemBase);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
// 1. 先安装 Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 添加这一行
app.use(pinia);

// 2. 然后安装路由
app.use(router);

// 3. 安装 i18n
app.use(i18n);
app.use(Vant);
// app.use(naive);
// app.use(BootstrapVue3); // 启用 BootstrapVue3

app.mount("#app");

// 在 Pinia 安装后设置语言
setI18nLocale(app);
