import { User } from './entities/user.entity';
import { Repository } from 'typeorm/index';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<User>);
    createAccount({ email, password, role, }: CreateAccountInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    login({ email, password, }: LoginInput): Promise<{
        ok: boolean;
        error?: string;
        token?: string;
    }>;
}
