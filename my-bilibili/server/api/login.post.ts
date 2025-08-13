import { H3Event, readBody } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<{ username: string; password: string }>(event)

  if (!body?.username || !body?.password) {
    throw createError({ statusCode: 400, statusMessage: '用户名或密码不能为空' })
  }

  // 简单校验：示例账号
  if (body.username === 'itheima' && body.password === '123456') {
    return {
      token: 'demo-token-123456',
      user: { id: 1, name: '黑马程序员' },
    }
  }

  throw createError({ statusCode: 401, statusMessage: '用户名或密码错误' })
}) 