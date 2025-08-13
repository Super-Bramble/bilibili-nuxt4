<script setup lang="ts">
import { showSuccessToast, showFailToast } from "vant";
import { reactive, ref } from "vue";

const emit = defineEmits(["success", "close"]);

// 表单数据
const form = reactive({
  username: "itheima",
  password: "123456",
});

const isSubmitting = ref(false);

const onClose = () => {
  emit("close");
};

// 表单提交
const onSubmit = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: form,
    });
    const token = useCookie<string | null>("token");
    // @ts-ignore
    token.value = (res as any)?.token ?? "mock-token";
    showSuccessToast("登录成功");
    emit("success");
  } catch (err: any) {
    showFailToast(err?.data?.message ?? "登录失败");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div
    class="relative w-[90%] max-w-[400px] bg-white rounded-xl p-6 shadow-lg animate-popup"
  >
    <div class="flex items-center justify-between mb-5">
      <van-nav-bar title="用户登录" left-arrow @click-left="onClose" />
    </div>
    <!-- 一旦form表单提交了，就会触发submit，可以在submit事件中
         根据拿到的表单提交信息，发送axios请求
     -->
    <van-form @submit="onSubmit" class="space-y-4">
      <!-- 输入框组件 -->
      <!-- \\w 字母数字_   \\d 数字0-9 -->
      <van-field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\\w{6,}$/, message: '密码至少包含6个字符' },
        ]"
      />
      <div class="m-4">
        <van-button
          block
          type="primary"
          :loading="isSubmitting"
          native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <NuxtLink
      to="/register"
      class="block text-center mt-4 text-[#fb7299] hover:text-[#f95a86]"
      >注册账号</NuxtLink
    >
  </div>
</template>
