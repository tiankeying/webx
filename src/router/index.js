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
    path: "/Ecosystem",
    name: "Ecosystem",
    component: () => import("../views/Ecosystem/EcosystemPage.vue"),
  },
  {
    path: "/Media",
    name: "Media",
    component: () => import("../views/Contacts/ContactsPage.vue"),
  },
  {
    path: "/Contacts",
    name: "Contacts",

    component: () => import("../views/Media/MediaPage.vue"),
  },
  {
    path: "/Insight",
    name: "Insight",
    component: () => import("../views/Insight/InsightPage.vue"),
  },
  // {
  //   path: '/Ecosystem',
  //   name: 'Ecosystem',
  //   component: () => import('../views/Ecosystem/index.vue')
  // },
  {
    path: "/Market",
    name: "Market",
    component: () => import("../views/Market/index.vue"),
  },
  // {
  //     path: '/RWA',
  //     name: 'RWA',
  //     component: () => import('../views/Market/RWA.vue')
  // },
  // {
  //     path: '/Early_Stage_Startup',
  //     name: 'Early_Stage_Startup',
  //     component: () => import('../views/Market/Early_Stage_Startup.vue')
  // },
  // {
  //     path: '/Contact',
  //     name: 'Contact',
  //     component: () => import('../views/Contact/index.vue')
  // },
  // {
  //     path: '/singUp',
  //     name: 'singUp',
  //     component: () => import('../views/singUp/index.vue')
  // },
  // {
  //     path: '/AniVault',
  //     name: 'AniVault',
  //     component: () => import('../views/AniVault/index.vue')
  // }
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
export default router

