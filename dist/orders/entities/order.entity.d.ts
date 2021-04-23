import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { User } from 'src/users/entities/user.entity';
import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    Pending = "Pending",
    Cooking = "Cooking",
    PickedUp = "PickedUp",
    Delivered = "Delivered"
}
export declare class Order extends CoreEntity {
    customer?: User;
    driver?: User;
    restaurant: Restaurant;
    items: OrderItem[];
    total?: number;
    status: OrderStatus;
}
