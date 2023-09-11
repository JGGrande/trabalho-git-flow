
import { container, inject, injectable } from 'tsyringe';
import { UserService } from '../../services/UserService';
import { Request, Response } from "express";


export class UserController {

    async index(req: Request, res: Response) {
        const userService = container.resolve(UserService);
        const users = await userService.listAll();
        return res.json({ users });
    }

    async store(req: Request, res: Response) {
        const userService = container.resolve(UserService);

        const { name, email, password } = req.body;

        const verifyUserExits = await userService.getUserByEmail(email)

        if (verifyUserExits)
            return res.status(400).json({ error: 'Usuario ja existente' })

        const hashPassword = await userService.cryptPassword(password);

        const user = await userService.createUser({ name, email, password: hashPassword });
        return res.json({ user });
    }


}