<template>
  <div class="p-8" v-if="data">
    <h1>{{ data.name }}</h1>
    <p>{{ data.desc }}</p>
    <p>{{ data.content }}</p>
    <button @click="() => $router.push('/')">返回</button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

type Post = {
  id: number;
  name: string;
  desc: string;
  content: string;
};

const { data } = await useFetch<Post>(`/api/posts/${route.params.id}`);
</script>
