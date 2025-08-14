<template>
  <header class="flex items-center py-2 px-3 bg-white relative z-10">
    <NuxtLink class="flex-1" to="/">
      <i class="iconfont icon_logo text-[#fb7299] text-[28px]"></i>
    </NuxtLink>
    <a href="#" class="px-2">
      <i class="iconfont icon_search_tab text-[#ccc] text-[22px]"></i>
    </a>

    <!-- 登录按钮：点击显示登录框 -->
    <a href="#" class="px-[15px]" @click.prevent="openLogin">
      <img src="@/assets/images/login.png" alt="login" class="w-6 h-6 cursor-pointer" />
    </a>

    <div class="text-[12px] flex justify-center items-center bg-[#fb7299] text-white rounded-[5px] px-[10px] py-[5px] cursor-pointer">下载 APP</div>

    <!-- 登录/注册弹窗 -->
    <div v-if="showLogin || showRegister" class="fixed inset-0 z-[100] flex justify-center items-center">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px]" @click="closeAll"></div>
      <component
        :is="currentComponent"
        @success="closeAll"
        @close="closeAll"
        @register="switchToRegister"
        @login="switchToLogin"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import LoginComponent from "~/pages/login.vue";
import RegisterComponent from "~/pages/register.vue";

const showLogin = ref(false);
const showRegister = ref(false);

const currentComponent = computed(() => (showRegister.value ? RegisterComponent : LoginComponent))

const openLogin = () => {
  showRegister.value = false
  showLogin.value = true
}

const switchToRegister = () => {
  showLogin.value = false
  showRegister.value = true
}

const switchToLogin = () => {
  showRegister.value = false
  showLogin.value = true
}

const closeAll = () => {
  showLogin.value = false
  showRegister.value = false
}
</script>
