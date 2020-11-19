import { Repository } from 'typeorm/index';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { JwtService } from '../jwt/jwt.service';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { Verification } from './entities/verification.entity';
import { VerifyEmailOutput } from './dtos/verify.email.dto';
import { UserProfileOutput } from './dtos/user-profile.dto';
import { MailService } from '../mail/mail.service';
export declare class UsersService {
    private readonly users;
    private readonly verification;
    private readonly jwtService;
    private readonly mailService;
    constructor(users: Repository<User>, verification: Repository<Verification>, jwtService: JwtService, mailService: MailService);
    createAccount({ email, password, role, }: CreateAccountInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
    findById(id: number): Promise<UserProfileOutput>;
    editProfile(userId: number, { email, password }: EditProfileInput): Promise<EditProfileOutput>;
    verifyEmail(code: string): Promise<VerifyEmailOutput>;
}
