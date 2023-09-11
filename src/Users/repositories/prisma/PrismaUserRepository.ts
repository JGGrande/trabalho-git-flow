import prisma from '../../../utils/prisma';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserReporitories';

class PrismaUserRepository implements IUserRepository {
    async create(user: User): Promise<User> {
        return await prisma.user.create({ data: user });
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { email } })
        return user;
    }

    async listAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }
}