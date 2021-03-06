import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
export declare class Category extends CoreEntity {
    name: string;
    coverImage: string;
    slug: string;
    restaurants: Restaurant[];
}
