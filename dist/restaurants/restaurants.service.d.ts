import { AllCategoriesOutput } from 'src/restaurants/dtos/all-categories.dto';
import { CategoryInput, CategoryOutput } from 'src/restaurants/dtos/category.dto';
import { DeleteRestaurantInput, DeleteRestaurantOutput } from 'src/restaurants/dtos/delete-restaurant.dto';
import { EditRestaurantInput, EditRestaurantOutput } from 'src/restaurants/dtos/edit-restaurant.dto';
import { RestaurantInput, RestaurantOutput } from 'src/restaurants/dtos/restaurant.dto';
import { RestaurantsInput, RestaurantsOutput } from 'src/restaurants/dtos/restaurants.dto';
import { SearchRestaurantInput, SearchRestaurantOutput } from 'src/restaurants/dtos/search-restaurant.dto';
import { Category } from 'src/restaurants/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm/index';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from 'src/restaurants/repositories/category.repository';
export declare class RestaurantsService {
    private readonly restaurants;
    private readonly categories;
    constructor(restaurants: Repository<Restaurant>, categories: CategoryRepository);
    createRestaurant(owner: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
    editRestaurant(owner: User, editRestaurantInput: EditRestaurantInput): Promise<EditRestaurantOutput>;
    deleteRestaurant(owner: User, { restaurantId }: DeleteRestaurantInput): Promise<DeleteRestaurantOutput>;
    allCategories(): Promise<AllCategoriesOutput>;
    countRestaurants(category: Category): Promise<number>;
    findCategoryBySlug({ slug, page, }: CategoryInput): Promise<CategoryOutput>;
    allRestaurants({ page }: RestaurantsInput): Promise<RestaurantsOutput>;
    findRestaurantById({ restaurantId, }: RestaurantInput): Promise<RestaurantOutput>;
    searchRestaurantByName({ query, page, }: SearchRestaurantInput): Promise<SearchRestaurantOutput>;
}
