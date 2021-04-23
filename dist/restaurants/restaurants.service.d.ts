import { AllCategoriesOutput } from 'src/restaurants/dtos/all-categories.dto';
import { CategoryInput, CategoryOutput } from 'src/restaurants/dtos/category.dto';
import { CreateDishInput, CreateDishOutput } from 'src/restaurants/dtos/create-dish.dto';
import { DeleteDishInput, DeleteDishOutput } from 'src/restaurants/dtos/delete-dish.dto';
import { DeleteRestaurantInput, DeleteRestaurantOutput } from 'src/restaurants/dtos/delete-restaurant.dto';
import { EditDishInput, EditDishOutput } from 'src/restaurants/dtos/edit-dish.dto';
import { EditRestaurantInput, EditRestaurantOutput } from 'src/restaurants/dtos/edit-restaurant.dto';
import { RestaurantInput, RestaurantOutput } from 'src/restaurants/dtos/restaurant.dto';
import { RestaurantsInput, RestaurantsOutput } from 'src/restaurants/dtos/restaurants.dto';
import { SearchRestaurantInput, SearchRestaurantOutput } from 'src/restaurants/dtos/search-restaurant.dto';
import { Category } from 'src/restaurants/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from 'src/restaurants/repositories/category.repository';
import { Dish } from './entities/dish.entity';
export declare class RestaurantsService {
    private readonly restaurants;
    private readonly categories;
    private readonly dishes;
    constructor(restaurants: Repository<Restaurant>, categories: CategoryRepository, dishes: Repository<Dish>);
    createRestaurant(owner: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
    editRestaurant(owner: User, editRestaurantInput: EditRestaurantInput): Promise<EditRestaurantOutput>;
    deleteRestaurant(owner: User, { restaurantId }: DeleteRestaurantInput): Promise<DeleteRestaurantOutput>;
    allCategories(): Promise<AllCategoriesOutput>;
    countRestaurants(category: Category): Promise<number>;
    findCategoryBySlug({ slug, page, }: CategoryInput): Promise<CategoryOutput>;
    allRestaurants({ page }: RestaurantsInput): Promise<RestaurantsOutput>;
    findRestaurantById({ restaurantId, }: RestaurantInput): Promise<RestaurantOutput>;
    searchRestaurantByName({ query, page, }: SearchRestaurantInput): Promise<SearchRestaurantOutput>;
    createDish(owner: User, createDishInput: CreateDishInput): Promise<CreateDishOutput>;
    checkDishOwner(ownerId: number, dishId: number): Promise<boolean>;
    editDish(owner: User, editDishInput: EditDishInput): Promise<EditDishOutput>;
    deleteDish(owner: User, deleteDishInput: DeleteDishInput): Promise<DeleteDishOutput>;
}
