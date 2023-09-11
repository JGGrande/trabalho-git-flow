import { Router } from "express";
import userRoutes from "./Users/http/routes";
import sessionsRoutes from "./sessions/http/routes";
import { AuthMiddleware } from "./middlewares/Auth";

export const routes = Router()

routes.use('/auth', sessionsRoutes)
routes.use('/user', AuthMiddleware, userRoutes)
