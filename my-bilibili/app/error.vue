<template>
  <AppHeader />
  <div class="flex flex-col items-center p-6">
    <!-- 外层用flex 容器并排显示 -->
    <div class="flex gap-4 p-4">
      <van-image
        :src="errorImg"
        width="100"
        height="100"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="10" />
        </template>
      </van-image>

      <div class="flex flex-col justify-center">
        <p class="text-gray-400">啊叻？视频不见了？</p>
        <NuxtLink to="/" class="text-pink-600 hover:underline mt-1"
          >去首页继续探索吧 ></NuxtLink
        >
      </div>
    </div>
  </div>
  <div class="p-3 text-4">热门推荐</div>
  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
    <main class="video-list">
      <AppVideo v-for="item in list" :item="item" :key="item.aid" />
    </main>
  </van-list>
</template>

<script lang="ts" setup>
import type { VideoItem } from "~~/server/interface/video";
import errorImg from "~/assets/images/404.webp";
const { data: channelList } = await useFetch("/api/gets/channel/channel");
const { data: videoList } = await useFetch("/api/gets/video/list");

useSeoMeta({
  title: "啊叻？视频不见了？",
})

// 页码
let pageNum = 1;
let pageSize = 20;

const list = ref<VideoItem[]>([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  console.log("触底加载");
  // 表示正在加载
  loading.value = false;
  // 根据当前页码提取数据
  const data = videoList.value?.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize
  );
  // 追加到用于渲染的List中
  list.value.push(...(data as VideoItem[]));
  // 页码增加
  pageNum++;
  //加载结束
  if (videoList.value?.length === list.value.length) {
    finished.value = true;
    console.log("到底了～");
  }
};
// 主动加载20条数据，方便seo抓取数据
onMounted(() => {
  onLoad();
});
</script>

<style lang="scss" scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
