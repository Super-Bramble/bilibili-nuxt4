<template>
  <header class="app-header">
    <NuxtLink class="logo" to="/">
      <i class="iconfont icon_logo"></i>
    </NuxtLink>
    <a href="#" class="search">
      <i class="iconfont icon_search_tab"></i>
    </a>

    <!-- 登录按钮：点击显示登录框 -->
    <a href="#" class="face" @click.prevent="showLogin = true">
      <img src="@/assets/images/login.png" alt="login" />
    </a>
    
    <div class="download-app">下载 APP</div>


    <!-- 登录框（默认隐藏） -->
    <div v-if="showLogin" class="login-modal">
      <!-- 遮罩层：点击关闭 -->
      <div class="modal-mask" @click="showLogin = false"></div>
      
      <!-- 登录框内容 -->
      <div class="modal-content">
        <div class="modal-header">
          <h3>用户登录</h3>
          <button class="close-btn" @click="showLogin = false">×</button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="请输入用户名" class="login-input" />
          <input type="password" placeholder="请输入密码" class="login-input" />
          <button class="login-btn">登录</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'; // 导入ref用于响应式状态

// 控制登录框显示状态：默认隐藏
const showLogin = ref(false);
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff;
  position: relative; // 确保登录框定位正确
  z-index: 10; // 保证头部在遮罩层上方

  .logo {
    flex: 1;
    .icon_logo {
      color: #fb7299;
      font-size: 28px;
    }
  }
  .search {
    padding: 0 8px;
    .icon_search_tab {
      color: #ccc;
      font-size: 22px;
    }
  }
  .face {
    padding: 0 15px;
    img {
      width: 24px;
      height: 24px;
      cursor: pointer; // 显示点击光标
    }
  }
  .download-app {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
}

/* 登录框样式 */
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100; // 覆盖整个页面
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 遮罩层 */
.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px); // 毛玻璃效果
}

/* 登录框内容容器 */
.modal-content {
  position: relative; // 确保在遮罩层上方
  width: 90%;
  max-width: 400px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: popup 0.3s ease-out; // 弹出动画
}

/* 登录框头部 */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  .close-btn {
    border: none;
    background: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
}

/* 登录表单 */
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #fb7299; // 聚焦时高亮边框
  }
}

.login-btn {
  width: 100%;
  padding: 12px 0;
  background: #fb7299;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #f95a86; //  hover效果
  }
}

/* 弹出动画 */
@keyframes popup {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>