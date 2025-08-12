import { list } from "../../data";

// URL 路径中的 id → 
// Nuxt 自动解析到 event.context.params →
// 在 defineEventHandler 中通过 event 获取并处理
export default defineEventHandler((event) => {
  const { id } = event.context.params || {};
  const post = list.find((item) => item.id === Number(id)) || null;
  return post;
});