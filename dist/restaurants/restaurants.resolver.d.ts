import { CategoryInput, CategoryOutput } from 'src/restaurants/dtos/category.dto';
import { CreateDishInput, CreateDishOutput } from 'src/restaurants/dtos/create-dish.dto';
import { DeleteRestaurantInput, DeleteRestaurantOutput } from 'src/restaurants/dtos/delete-restaurant.dto';
import { EditRestaurantInput, EditRestaurantOutput } from 'src/restaurants/dtos/edit-restaurant.dto';
import { RestaurantsInput, RestaurantsOutput } from 'src/restaurants/dtos/restaurants.dto';
import { SearchRestaurantInput, SearchRestaurantOutput } from 'src/restaurants/dtos/search-restaurant.dto';
import { Category } from 'src/restaurants/entities/category.entity';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { User } from 'src/users/entities/user.entity';
import { AllCategoriesOutput } from './dtos/all-categories.dto';
import { RestaurantInput, RestaurantOutput } from './dtos/restaurant.dto';
import { EditDishInput, EditDishOutput } from './dtos/edit-dish.dto';
import { DeleteDishInput, DeleteDishOutput } from './dtos/delete-dish.dto';
export declare class RestaurantsResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    createRestaurant(authUser: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
    editRestaurant(owner: User, editRestaurantInput: EditRestaurantInput): Promise<EditRestaurantOutput>;
    deleteRestaurant(owner: User, deleteRestaurantInput: DeleteRestaurantInput): Promise<DeleteRestaurantOutput>;
    restaurants(restaurantsInput: RestaurantsInput): Promise<RestaurantsOutput>;
    restaurant(restaurantInput: RestaurantInput): Promise<RestaurantOutput>;
    searchRestaurant(searchRestaurantInput: SearchRestaurantInput): Promise<SearchRestaurantOutput>;
}
export declare class CategoryResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    restaurantCount(category: Category): Promise<number>;
    allCategories(): Promise<AllCategoriesOutput>;
    category(categoryInput: CategoryInput): Promise<CategoryOutput>;
}
export declare class DishResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    createDish(owner: User, createDishInput: CreateDishInput): Promise<CreateDishOutput>;
    editDish(owner: User, editDishInput: EditDishInput): Promise<EditDishOutput>;
    deleteDish(owner: User, deleteDishInput: DeleteDishInput): Promise<DeleteDishOutput>;
}
