import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm/index';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantsService {
    private readonly restaurants;
    constructor(restaurants: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    updateRestaurant(updateRestaurantDto: UpdateRestaurantDto): Promise<import("typeorm").UpdateResult>;
}
