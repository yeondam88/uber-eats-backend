"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const all_categories_dto_1 = require("./dtos/all-categories.dto");
const category_dto_1 = require("./dtos/category.dto");
const create_dish_dto_1 = require("./dtos/create-dish.dto");
const delete_dish_dto_1 = require("./dtos/delete-dish.dto");
const delete_restaurant_dto_1 = require("./dtos/delete-restaurant.dto");
const edit_dish_dto_1 = require("./dtos/edit-dish.dto");
const edit_restaurant_dto_1 = require("./dtos/edit-restaurant.dto");
const restaurant_dto_1 = require("./dtos/restaurant.dto");
const restaurants_dto_1 = require("./dtos/restaurants.dto");
const search_restaurant_dto_1 = require("./dtos/search-restaurant.dto");
const category_entity_1 = require("./entities/category.entity");
const user_entity_1 = require("../users/entities/user.entity");
const index_1 = require("typeorm/index");
const restaurant_entity_1 = require("./entities/restaurant.entity");
const category_repository_1 = require("./repositories/category.repository");
const dish_entity_1 = require("./entities/dish.entity");
let RestaurantsService = class RestaurantsService {
    constructor(restaurants, categories, dishes) {
        this.restaurants = restaurants;
        this.categories = categories;
        this.dishes = dishes;
    }
    async createRestaurant(owner, createRestaurantInput) {
        console.log('calling service...');
        try {
            const newRestaurant = this.restaurants.create(createRestaurantInput);
            newRestaurant.owner = owner;
            newRestaurant.category = await this.categories.getOrCreate(createRestaurantInput.categoryName);
            await this.restaurants.save(newRestaurant);
            return {
                ok: true,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not create restaurant',
            };
        }
    }
    async editRestaurant(owner, editRestaurantInput) {
        try {
            const restaurant = await this.restaurants.findOne(editRestaurantInput.restaurantId, {
                loadRelationIds: true,
            });
            if (!restaurant) {
                return {
                    ok: false,
                    error: 'Restaurant not found',
                };
            }
            if (owner.id !== restaurant.ownerId) {
                return {
                    ok: false,
                    error: 'You are not authorized',
                };
            }
            let category = null;
            if (editRestaurantInput.categoryName) {
                category = await this.categories.getOrCreate(editRestaurantInput.categoryName);
            }
            await this.restaurants.save([
                Object.assign(Object.assign({ id: editRestaurantInput.restaurantId }, editRestaurantInput), (category && { category })),
            ]);
            return {
                ok: true,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not edit Restaurant',
            };
        }
    }
    async deleteRestaurant(owner, { restaurantId }) {
        try {
            const restaurant = await this.restaurants.findOne(restaurantId, {
                loadRelationIds: true,
            });
            if (!restaurant) {
                return {
                    ok: false,
                    error: 'Restaurant not found',
                };
            }
            if (owner.id !== restaurant.ownerId) {
                return {
                    ok: false,
                    error: 'You are not authorized',
                };
            }
            await this.restaurants.delete(restaurantId);
            return {
                ok: true,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not delete Restaurant',
            };
        }
    }
    async allCategories() {
        try {
            const categories = await this.categories.find();
            return {
                ok: true,
                categories,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not load categories',
            };
        }
    }
    countRestaurants(category) {
        return this.restaurants.count({ category });
    }
    async findCategoryBySlug({ slug, page, }) {
        try {
            const category = await this.categories.findOne({ slug });
            if (!category) {
                return {
                    ok: false,
                    error: 'Category not found',
                };
            }
            const restaurants = await this.restaurants.find({
                where: {
                    category,
                },
                take: 25,
                skip: (page - 1) * 25,
            });
            const totalResults = await this.countRestaurants(category);
            return {
                ok: true,
                category,
                restaurants,
                totalPages: Math.ceil(totalResults / 25),
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not load category',
            };
        }
    }
    async allRestaurants({ page }) {
        try {
            const [results, totalResults] = await this.restaurants.findAndCount({
                skip: (page - 1) * 25,
                take: 25,
            });
            return {
                ok: true,
                results,
                totalPages: Math.ceil(totalResults / 25),
                totalResults,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not load restaurants',
            };
        }
    }
    async findRestaurantById({ restaurantId, }) {
        try {
            const restaurant = await this.restaurants.findOne(restaurantId, {
                relations: ['menu'],
            });
            if (!restaurant) {
                return {
                    ok: false,
                    error: 'Could not find restaurant',
                };
            }
            return {
                ok: true,
                restaurant,
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not find restaurant',
            };
        }
    }
    async searchRestaurantByName({ query, page, }) {
        try {
            const [restaurants, totalResults] = await this.restaurants.findAndCount({
                where: {
                    name: index_1.Raw((name) => `${name} ILIKE '%${query}%'`),
                },
                skip: (page - 1) * 25,
                take: 25,
            });
            return {
                ok: true,
                restaurants,
                totalResults,
                totalPages: Math.ceil(totalResults / 25),
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: 'Could not search for restaurant',
            };
        }
    }
    async createDish(owner, createDishInput) {
        try {
            const restaurant = await this.restaurants.findOne(createDishInput.restaurantId);
            if (!restaurant) {
                return {
                    ok: false,
                    error: 'Restaurant not found!',
                };
            }
            if (owner.id !== restaurant.ownerId) {
                return {
                    ok: false,
                    error: 'You are not authorized to create a dish',
                };
            }
            await this.dishes.save(this.dishes.create(Object.assign(Object.assign({}, createDishInput), { restaurant })));
            return {
                ok: true,
            };
        }
        catch (err) {
            console.log(err);
            return {
                ok: false,
                error: 'Could not create a dish',
            };
        }
    }
    async checkDishOwner(ownerId, dishId) {
        const dish = await this.dishes.findOne(dishId, {
            relations: ['restaurant'],
        });
        return dish.restaurant.ownerId === ownerId;
    }
    async editDish(owner, editDishInput) {
        try {
            const isOwner = await this.checkDishOwner(owner.id, editDishInput.dishId);
            if (!isOwner) {
                return {
                    ok: false,
                    error: "Don't authorized do delete the dish",
                };
            }
            await this.dishes.save([
                Object.assign({ id: editDishInput.dishId }, editDishInput),
            ]);
            return {
                ok: true,
            };
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteDish(owner, deleteDishInput) {
        try {
            const dish = await this.dishes.findOne(deleteDishInput.dishId);
            console.log(dish);
            if (!dish) {
                return {
                    ok: false,
                    error: 'Dish is not found!',
                };
            }
            const isOwner = this.checkDishOwner(owner.id, deleteDishInput.dishId);
            if (!isOwner) {
                return {
                    ok: false,
                    error: "Don't authorized do delete the dish",
                };
            }
            await this.dishes.delete(deleteDishInput.dishId);
            return {
                ok: true,
            };
        }
        catch (err) {
            console.log(err);
            return {
                ok: false,
                error: 'Dish is not deleted!',
            };
        }
    }
};
RestaurantsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(restaurant_entity_1.Restaurant)),
    __param(2, typeorm_1.InjectRepository(dish_entity_1.Dish)),
    __metadata("design:paramtypes", [index_1.Repository,
        category_repository_1.CategoryRepository,
        index_1.Repository])
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map