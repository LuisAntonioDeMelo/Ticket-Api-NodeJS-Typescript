import { Router } from 'express'
import UserController from './controllers/UserController'
import TicketController from './controllers/TicketController'

const routes = Router()

routes.get('/users',UserController.index)
routes.post('/users',UserController.store)
routes.get('/tickets',TicketController.index)
routes.post('/tickets',TicketController.store)
routes.get('/tickets',TicketController.findOne)

export default routes