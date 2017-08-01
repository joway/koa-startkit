import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import router from './router'

const app = new Koa()
app.use(bodyParser())

// x-response-time
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log(`${ctx.request.method} ${ctx.request.url} : ${ms}ms`)
})

app.use(router.routes())
app.listen(3000)
