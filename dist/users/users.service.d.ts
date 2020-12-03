import { JwtService } from 'src/jwt/jwt.service';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm/index';
import { CreateAccountInput } from './dtos/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileOutput } from './dtos/user-profile.dto';
import { VerifyEmailOutput } from './dtos/verify.email.dto';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
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
