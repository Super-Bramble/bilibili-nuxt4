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
      title: "Nuxt 4",
      meta: [
        { name: "description", content: "Nuxt 4" },
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