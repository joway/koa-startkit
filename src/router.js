import Router from 'koa-router'
import hello from './controllers/hello'

const router = Router()

router.get('/', hello)

export default router
