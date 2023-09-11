import { NextFunction, Request, Response } from "express";
import authPainelConfig from '../config/AuthPainel';
import { verify } from "jsonwebtoken";

interface TokenPayload {
    rotas: string;
    id: number;
    iat: number;
    exp: number;
    sub: string;

}

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization)
        return res.status(401).json({ error: 'Token não enviado' })

    const [, token] = authorization.split(" ");
    const { secret } = authPainelConfig.jwt;

    try {
        const decoded = verify(token, secret)

        const { id } = decoded as TokenPayload

        req.user = { userId: id }

        next();
    } catch (err) {
        return res.status(400).json({ error: "token Invalido" })
    }
}