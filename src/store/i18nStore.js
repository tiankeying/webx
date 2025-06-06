import { defineStore } from "pinia";

export const useI18nStore = defineStore("i18n", {
  state: () => {
    const lang = navigator.language || "en";
    let locale = "en"; // 默认英语

    if (lang === "zh-CN") {
      locale = "zh-TW";
    } else if (lang === "zh-TW" || lang === "zh-HK") {
      locale = lang; // 保持繁体
    } else if (lang.startsWith("zh")) {
      locale = "zh-TW"; // 其他中文转繁体
    } else {
      locale = "en";
    }

    return {
      locale,
      lgTitle: locale === "en" ? "English" : "繁体",
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
