<template>
    <div class="py-3">
      <ul class="w-full">
        <li class="w-full min-h-60px border-2 border-solid border-purple-300 mb-2 p-8 rounded-md" v-for="item in data" :key="item.id">
          <nuxt-link :to="`/posts/${item.id}`">
            <h1 class="mb-2">{{ item.name }}</h1>
          </nuxt-link>
          <p>{{ item.desc }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
    // 服务端渲染
    const { data } = await useFetch<any>("/api/posts/list");
    // 客户端渲染，使用原vue3的写法
    // const data = ref<any>([]);
    // async function getPosts() {
    // const res = await fetch("/api/posts/list");
    // return res.json();
    // }

    // onMounted(async () => {
    // data.value = await getPosts();
    // });
  </script>