import { User } from "../entities/User";

export interface IUserRepository {
    create(user: User): Promise<User>;
    listAll(): Promise<User[]>;
    getByEmail(email: string): Promise<User | null>;
}