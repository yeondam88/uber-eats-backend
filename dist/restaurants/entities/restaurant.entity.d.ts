import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Category } from 'src/restaurants/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Dish } from './dish.entity';
export declare class Restaurant extends CoreEntity {
    name: string;
    coverImage: string;
    address: string;
    category: Category;
    owner: User;
    orders: Order[];
    ownerId: number;
    menu: Dish[];
}
