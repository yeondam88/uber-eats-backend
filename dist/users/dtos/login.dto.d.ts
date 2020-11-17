import { CommonOutput } from '../../common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const LoginInput_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class LoginInput extends LoginInput_base {
}
export declare class LoginOutput extends CommonOutput {
    token?: string;
}
export {};
