<script setup lang="ts">
import { reactive, ref } from "vue";
import { showSuccessToast, showFailToast } from "vant";

const emit = defineEmits(["success", "close", "login"]);

const form = reactive({
  username: "",
  password: "",
});

const isSubmitting = ref(false);

const onClose = () => {
  emit("close");
};

const onSubmit = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    await $fetch("/api/register", {
      method: "POST",
      body: form,
    });
    showSuccessToast("注册成功");
    emit("success");
  } catch (err: any) {
    showFailToast(err?.data?.message ?? "注册失败");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div
    class="relative w-[90%] max-w-[400px] bg-white rounded-xl p-6 shadow-lg animate-popup"
  >
    <van-nav-bar
      title="用户注册"
      left-arrow
      @click-left="onClose"
    />

    <van-form @submit="onSubmit" class="space-y-4">
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
          >注册</van-button
        >
      </div>
    </van-form>
    <a
      href="#"
      @click.prevent="emit('login')"
      class="block text-center mt-4 text-[#fb7299] hover:text-[#f95a86]"
      >已有账号？去登录</a
    >
  </div>
</template>

<style scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
