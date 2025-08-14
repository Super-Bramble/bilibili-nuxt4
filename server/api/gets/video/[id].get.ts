// get /api/video/id
import { videoList } from '~~/server/data/video'

export default defineEventHandler((event) => {
  // 获取路由参数
  const { id } = event.context.params || {}

  // 根据 id 查找视频
  return videoList.find((v) => v.bvid === id)
})