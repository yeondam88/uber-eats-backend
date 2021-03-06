import { PaginationInput, PaginationOutput } from 'src/restaurants/dtos/pagination.dto';
import { Category } from 'src/restaurants/entities/category.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
export declare class CategoryInput extends PaginationInput {
    slug: string;
}
export declare class CategoryOutput extends PaginationOutput {
    category?: Category;
    restaurants?: Restaurant[];
}
