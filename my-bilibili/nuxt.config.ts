// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否开启服务端渲染,默认开启
  ssr: true, 
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/icon','@pinia/nuxt'],
  // 防止 nuxt icon 请求出错
  icon: {
    localApiEndpoint: '/nuxt-icon',
  },
  app: {
    // 设置 seo ，会设置到 html 的 head 里面
    head: {
      title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
      meta: [
        { name: "description", content: "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。" },
        { name: "keywords", content: "哔哩哔哩,bilibili,动漫,游戏,音乐,舞蹈,科技,生活,鬼畜,时尚,娱乐,影视,直播,UP主,番剧,国创,原创,官方,更多" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  devServer: {
    // 服务端口号
    port: 3000,
  },
  nitro: {
    // 代理，前后端分离有用
    // devProxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
  },
  // 全局样式文件入口
  css: ["~/assets/index.css"],
})