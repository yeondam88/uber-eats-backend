import { CommonOutput } from 'src/common/dtos/output.dto';
import { Dish } from '../entities/dish.entity';
declare const CreateDishInput_base: import("@nestjs/common").Type<Pick<Dish, "name" | "price" | "description" | "options">>;
export declare class CreateDishInput extends CreateDishInput_base {
    restaurantId: number;
}
export declare class CreateDishOutput extends CommonOutput {
}
export {};
