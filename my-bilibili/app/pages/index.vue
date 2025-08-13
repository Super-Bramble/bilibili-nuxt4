<template>
  <AppHeader />
  <van-tabs>
  <van-tab
    v-for="item in channelList"
    :key="item.id"
    :title="item.name"
  />
  </van-tabs>

  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
  <main class="video-list">
  <AppVideo
        v-for="item in list"
        :item="item"
        :key="item.aid"
      />
    </main>
  </van-list>
</template>
  
  <script lang="ts" setup>
    import type { VideoItem } from '~~/server/interface/video';
    const { data: channelList } = await useFetch('/api/gets/channel/channel');
    const { data: videoList } = await useFetch('/api/gets/video/list');
    // 页码
    let pageNum = 1;
    let pageSize = 20;

    const list = ref<VideoItem[]>([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      console.log('触底加载');
      // 表示正在加载
      loading.value = false;
      // 根据当前页码提取数据
      const data = videoList.value?.slice(
        (pageNum - 1) * pageSize,
        pageNum * pageSize,
      );
      // 追加到用于渲染的List中
      list.value.push(...data as VideoItem[]);
      // 页码增加
      pageNum++;
      //加载结束
      if (videoList.value?.length === list.value.length) {
        finished.value = true;
        console.log('到底了～');
    }
  }
  // 主动加载20条数据，方便seo抓取数据
  onMounted(() => {
    onLoad();
  })
</script>

<style lang="scss" scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>