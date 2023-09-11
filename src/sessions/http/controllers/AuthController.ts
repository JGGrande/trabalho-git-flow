import authPainel from '../../../config/AuthPainel';
import { container } from 'tsyringe';
import { Request, Response } from "express";
import { SessionService } from '../../services/sessionService';
import { sign } from 'jsonwebtoken';

export class AuthController {
    async authenticate(req: Request, res: Response) {
        const sessionService = container.resolve(SessionService)

        const { email, password } = req.body;

        const user = await sessionService.getUserByEmail(email)

        if (!user)
            return res.status(400).json({ error: 'Usuario não encontrado' })

        const isValuePassWord = sessionService.verifyPassword(password, user.password);

        if (!isValuePassWord)
            return res.status(401).json({ error: 'Senha incorreta!' });

        const { secret, expireIn } = authPainel.jwt;
        const token = sign({ id: user.id }, secret, {
            // subject: user.uuid,
            expiresIn: expireIn,
        })

        const { password: _, ...userWithoutPassword } = user;

        return res.json({ userWithoutPassword, token })
    }
}