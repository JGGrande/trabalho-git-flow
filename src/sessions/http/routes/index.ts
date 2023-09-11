import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const sessionsRoutes = Router();
const authController = new AuthController();

sessionsRoutes.post('/login', authController.authenticate)

export default sessionsRoutes