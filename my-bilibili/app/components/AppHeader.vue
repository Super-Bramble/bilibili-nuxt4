<template>
  <header class="flex items-center py-2 px-3 bg-white relative z-10">
    <NuxtLink class="flex-1" to="/">
      <i class="iconfont icon_logo text-[#fb7299] text-[28px]"></i>
    </NuxtLink>
    <a href="#" class="px-2">
      <i class="iconfont icon_search_tab text-[#ccc] text-[22px]"></i>
    </a>

    <!-- 登录按钮：点击显示登录框 -->
    <a href="#" class="px-[15px]" @click.prevent="showLogin = true">
      <img src="@/assets/images/login.png" alt="login" class="w-6 h-6 cursor-pointer" />
    </a>

    <div class="text-[12px] flex justify-center items-center bg-[#fb7299] text-white rounded-[5px] px-[10px] py-[5px] cursor-pointer">下载 APP</div>

    <!-- 登录框（默认隐藏） -->
    <div v-if="showLogin" class="fixed inset-0 z-[100] flex justify-center items-center">
      <!-- 遮罩层：点击关闭 -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px]" @click="showLogin = false"></div>
      <!-- 登录弹窗 -->
      <!-- 引入你的登录组件 -->
      <LoginComponent @success="showLogin = false" @close="showLogin = false" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginComponent from "~/pages/login.vue";

// 控制登录框显示状态：默认隐藏
const showLogin = ref(false);
</script>


