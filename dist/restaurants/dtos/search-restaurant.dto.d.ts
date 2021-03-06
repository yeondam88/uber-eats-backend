import { PaginationInput, PaginationOutput } from 'src/restaurants/dtos/pagination.dto';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
export declare class SearchRestaurantInput extends PaginationInput {
    query: string;
}
export declare class SearchRestaurantOutput extends PaginationOutput {
    restaurants?: Restaurant[];
}
