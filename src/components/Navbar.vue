<template>
    <header class="header-container">
      <div class="logo">
        <img class="icon" src="../assets/index/logo  .png" alt="logo" />
      </div>
  
      <div class="menu-icon" @click="toggleMenu">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
  
      <nav class="nav-menu" :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#">服务</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .header-container {
    width: 100%;
    max-width: 748.4px;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: white;
    position: relative;
    border-bottom: 1px solid #eee;
  }
  
  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    color: #000;
  }
  .logo .text {
    margin-right: 6px;
  }
  .logo .icon {
    width: 115px;
    height: 46px;
  }
  
  /* Menu icon */
  .menu-icon {
    display: none;
    cursor: pointer;
  }
  
  /* Nav menu */
  .nav-menu {
    display: flex;
  }
  .nav-menu ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  .nav-menu li a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: color 0.3s;
  }
  .nav-menu li a:hover {
    color: #007bff;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }
  
    .nav-menu {
      position: absolute;
      top: 103px;
      right: 0;
      background: white;
      width: 100%;
      flex-direction: column;
      display: none;
      border-top: 1px solid #eee;
      z-index: 1000;
    }
  
    .nav-menu.open {
      display: flex;
    }
  
    .nav-menu ul {
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }
  
    .nav-menu li a {
      font-size: 18px;
    }
  }
  </style>
  