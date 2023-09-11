import { container } from 'tsyringe';
import prisma from './prisma';
import { UserService } from '../Users/services/UserService';
import { SessionService } from '../sessions/services/sessionService';

container.register('PrismaClient', { useValue: prisma });
container.register("UserService", UserService);
container.register("SessionService", SessionService); 