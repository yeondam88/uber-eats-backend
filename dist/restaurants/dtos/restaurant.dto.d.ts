import { CommonOutput } from 'src/common/dtos/output.dto';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
export declare class RestaurantInput {
    restaurantId: number;
}
export declare class RestaurantOutput extends CommonOutput {
    restaurant?: Restaurant;
}
