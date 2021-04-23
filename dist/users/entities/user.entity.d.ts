import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
export declare enum UserRole {
    Client = "Client",
    Owner = "Owner",
    Delivery = "Delivery"
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
    verified: boolean;
    restaurants: Restaurant[];
    orders: Order[];
    rides: Order[];
    hashPassword(): Promise<void>;
    checkPassword(passwordCandidate: string): Promise<boolean>;
}
