import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
declare class DishChoice {
    name: string;
    extra?: number;
}
export declare class DishOption {
    name: string;
    choices?: DishChoice[];
    extra?: number;
}
export declare class Dish extends CoreEntity {
    name: string;
    price: number;
    photo: string;
    description: string;
    restaurant: Restaurant;
    restaurantId: number;
    options?: DishOption[];
}
export {};
