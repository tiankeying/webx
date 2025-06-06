import { createI18n } from 'vue-i18n'
import en from './EN/en.json'
import zhTW from './TW/zh-TW.json'
// 导入 Home 页面的多语言文件
import enHome from './EN/home.json'
import zhTWHome from './TW/home.json'
import enCommon from './EN/common.json'
import zhTWCommon from './TW/common.json'
import enHeader from './EN/header.json'
import zhTWHeader from './TW/header.json'
import enInsight from './EN/insight.json'
import zhTWInsight from './TW/insight.json'
import enEcosystem from './EN/ecosystem.json'
import zhTWEcosystem from './TW/ecosystem.json'
import enmarket from './EN/market.json'
import zhTWmarket from './TW/market.json'
import enContact from './EN/contact.json'
import zhTWContact from './TW/contact.json'
import { useI18nStore } from '../store/i18nStore';

const messages = {
    en: {
      ...en,
      home: enHome,
      common: enCommon,
      header:enHeader,
      insight:enInsight,
      ecosystem:enEcosystem,
      market:enmarket,
      contact:enContact,
    },
    'zh-TW': {
      ...zhTW,
      home: zhTWHome,
      common: zhTWCommon,
      header:zhTWHeader,
      insight:zhTWInsight,
      ecosystem:zhTWEcosystem,
      market:zhTWmarket,
      contact:zhTWContact,
    }
  }

// 先使用默认语言创建 i18n 实例
const i18n = createI18n({
    legacy: false,
    locale: 'en', // 默认语言
    fallbackLocale: 'en',
    messages,
    missingWarn: false, // 禁用缺失警告
    fallbackWarn: false // 禁用回退警告
  })

// 定义一个函数，用于在 Pinia 安装后设置正确的语言
export const setI18nLocale = (app) => {
  const i18nStore = useI18nStore();
  // 统一 zh-CN 转成 zh-TW
  const locale = i18nStore.locale === "zh-CN" ? "zh-TW" : i18nStore.locale;
  i18n.global.locale.value = locale;
}

export default i18n;