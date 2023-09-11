import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/create', userController.store)
userRoutes.get('/all', userController.index)


export default userRoutes;