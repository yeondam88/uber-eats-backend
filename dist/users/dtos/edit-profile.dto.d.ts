import { CommonOutput } from '../../common/dtos/output.dto';
import { User } from '../entities/user.entity';
export declare class EditProfileOutput extends CommonOutput {
}
declare const EditProfileInput_base: import("@nestjs/common").Type<Partial<Pick<User, "password" | "id" | "createdAt" | "updatedAt" | "email" | "role" | "verified" | "restaurants" | "orders" | "rides" | "hashPassword" | "checkPassword">>>;
export declare class EditProfileInput extends EditProfileInput_base {
}
export {};
