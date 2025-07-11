import {createRouter, createWebHashHistory} from "vue-router";
import { nextTick } from "vue";
// 在 router/index.js 顶部添加
import { Collapse } from 'bootstrap';
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/HomePage.vue"),
  },
  {
    path: "/mobile",
    name: "homeMobile",
    component: () => import("../views/Home/HomeMobile.vue"),
  },
  {
    path: "/Ecosystem",
    name: "Ecosystem",
    component: () => import("../views/Ecosystem/EcosystemPage.vue"),
  },
  {
    path: "/Ecosystem/mobile",
    name: "EcosystemMobile",
    component: () => import("../views/Ecosystem/EcosystemMobile.vue"),
  },
  {
    path: "/Media",
    name: "Media",
    component: () => import("../views/Contacts/ContactsPage.vue"),
  },
  {
    path: "/Media/mobile",
    name: "MediaMobile",
    component: () => import("../views/Media/MediaMobile.vue"),
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: () => import("../views/Media/MediaPage.vue"),
  },
  {
    path: "/Contacts/mobile",
    name: "ContactsMobile",
    component: () => import("../views/Contacts/ContactsMobile.vue"),
  },
  {
    path: "/Insight",
    name: "Insight",
    component: () => import("../views/Insight/InsightPage.vue"),
  },
  {
    path: "/Market",
    name: "Market",
    component: () => import("../views/Market/index.vue"),
  },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

router.afterEach(() => {
    // next();
    nextTick(() => {
        try {
            const navbar = document.getElementById('navbarNavDropdown');
            if (!navbar) {
                console.log(navbar);
                
                return;
            }

            if (navbar.classList.contains('show')) {
                const activeElement = document.activeElement;
                const dropdownMenu = document.querySelector('.dropdown-menu');
                // 新增判断，检查点击的是否是下拉菜单的触发按钮
                const dropdownToggle = document.getElementById('navbarDropdown');
                if (activeElement === dropdownToggle) {
                    return;
                }

                if (!dropdownMenu || !dropdownMenu.contains(activeElement)) {
                    const collapseInstance = Collapse.getInstance(navbar);
                    if (collapseInstance) {
                        console.log('使用现有 Collapse 实例隐藏导航栏');
                        collapseInstance.hide();
                    } else {
                        console.log('创建新的 Collapse 实例并隐藏导航栏');
                        new Collapse(navbar).hide();
                    }
                }
            }
        } catch (error) {
            console.error('隐藏导航栏时出错:', error);
        }
    });
});

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  const isMobile = window.innerWidth < 768 || 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
  // 桌面端路径访问检查
  if (isMobile && ['/', '/Ecosystem', '/Media', '/Contacts'].includes(to.path)) {
    const mobilePath = {
      '/': '/mobile',
      '/Ecosystem': '/Ecosystem/mobile',
      '/Media': '/Media/mobile',
      '/Contacts': '/Contacts/mobile'
    }[to.path];
    next(mobilePath);
    return;
  }
  
  // 移动端路径访问检查
  if (!isMobile && ['/mobile', '/Ecosystem/mobile', '/Media/mobile', '/Contacts/mobile'].includes(to.path)) {
    const desktopPath = {
      '/mobile': '/',
      '/Ecosystem/mobile': '/Ecosystem',
      '/Media/mobile': '/Media',
      '/Contacts/mobile': '/Contacts'
    }[to.path];
    next(desktopPath);
    return;
  }
  
  next();
});
export default router

