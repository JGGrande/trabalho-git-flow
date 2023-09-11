import { inject, injectable } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';

@injectable()
export class SessionService {
    constructor(@inject('PrismaClient') private prisma: PrismaClient) { }

    async getUserByEmail(email: string) {
        return await this.prisma.user.findUnique({ where: { email } })
    }

    async verifyPassword(password: string, userPassword: string) {
        return await compare(password, userPassword);
    }
}
