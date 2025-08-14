<template>
  <NuxtLink
    class="w-1/2 px-[5px] pb-[10px]"
    :to="`/video/${item.bvid}`"
  >
    <div class="relative bg-[#f3f3f3] bg-center bg-no-repeat rounded-[2px] overflow-hidden card-bg-default">
      <div>
        <img
          class="h-[100px] w-full object-cover"
          :src="item.pic"
          :alt="item.title"
        />
      </div>
      <div class="text-white absolute bottom-0 left-0 right-0 text-[12px] flex items-center justify-between px-[6px] py-[5px] bg-gradient-to-t from-black/85 to-transparent">
        <span>
          <i class="iconfont icon_shipin_bofangshu text-[8px]"></i>
          {{ item.stat.view }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu text-[8px]"></i>
          {{ item.stat.danmaku }}
        </span>
      </div>
    </div>
    <p class="mt-[5px] text-[12px] text-[#212121] overflow-hidden text-ellipsis line-clamp-2">{{ item.title }}</p>
  </NuxtLink>
</template>
  
<script lang="ts" setup>
  import type { VideoItem } from "~~/server/interface/video";
  
  defineProps<{
    item: VideoItem;
  }>();
  </script>
  