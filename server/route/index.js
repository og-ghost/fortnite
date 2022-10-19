
import express from 'express';
import UserRoutes from './user'
const routes = express.Router();

routes.use(UserRoutes)

export default routes;