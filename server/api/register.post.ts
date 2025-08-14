import { H3Event, readBody } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<{ username: string; password: string }>(event)

  if (!body?.username || !body?.password) {
    throw createError({ statusCode: 400, statusMessage: '用户名或密码不能为空' })
  }

  // 模拟注册成功
  return {
    success: true,
    user: { id: Date.now(), name: body.username },
  }
}) 