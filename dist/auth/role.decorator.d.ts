import { UserRole } from 'src/users/entities/user.entity';
export declare type AllowedRoles = keyof typeof UserRole | 'Any';
export declare const Role: (roles: AllowedRoles[]) => import("@nestjs/common").CustomDecorator<string>;
