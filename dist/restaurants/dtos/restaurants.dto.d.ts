import { PaginationInput, PaginationOutput } from 'src/restaurants/dtos/pagination.dto';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
export declare class RestaurantsInput extends PaginationInput {
}
export declare class RestaurantsOutput extends PaginationOutput {
    results?: Restaurant[];
}
