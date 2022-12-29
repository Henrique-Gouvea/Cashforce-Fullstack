import { Router } from 'express';
import UserController from '../controllers/user.controller';

const controller = new UserController()
const userRoutes = Router()

userRoutes.get('/nfs', controller.listNF);

export default userRoutes;