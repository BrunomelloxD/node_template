import { Router } from 'express'

import HelloWorld from '../src/controllers/helloWorld'

const routes = Router()

routes.get('/', HelloWorld.handle)

export { routes }
