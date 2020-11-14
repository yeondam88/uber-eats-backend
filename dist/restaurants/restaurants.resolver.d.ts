import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantsResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    restaurants(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<boolean>;
    updateRestaurant(updateRestaurantDto: UpdateRestaurantDto): Promise<boolean>;
}
