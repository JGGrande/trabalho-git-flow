import { inject, injectable } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import { UserDTO } from '../DTOS/userDTO';
import { hash } from 'bcryptjs';

@injectable()
export class UserService {
    constructor(@inject('PrismaClient') private prisma: PrismaClient) { }

    async getUserByEmail(email: string) {

    }
    async listAll() {

    }

    async createUser({ email, name, password }: UserDTO) {

    }

    async cryptPassword(password: string) {
        return await hash(password, 8)
    }
}
