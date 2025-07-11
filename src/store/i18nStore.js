import { defineStore } from "pinia";

export const useI18nStore = defineStore("i18n", {
  state: () => {
    // const lang = navigator.language || "en"; // 移除或注释掉这一行
    let locale = "en"; // 直接设置默认英语

    // 移除或注释掉下面的语言判断逻辑
    // if (lang === "zh-CN") {
    //   locale = "zh-TW";
    // } else if (lang === "zh-TW" || lang === "zh-HK") {
    //   locale = lang; // 保持繁体
    // } else if (lang.startsWith("zh")) {
    //   locale = "zh-TW"; // 其他中文转繁体
    // } else {
    //   locale = "en";
    // }

    return {
      locale,
      lgTitle: locale === "en" ? "English" : "繁体", // 这里可以根据需要调整，如果默认英文，lgTitle 也应该是 'English'
    };
  },
  actions: {
    setLocale(locale) {
      this.locale = locale;
    },
    setLgTitle(title) {
      this.lgTitle = title;
    },
  },
  persist: true,
});
