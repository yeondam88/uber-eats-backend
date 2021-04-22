import { CommonOutput } from 'src/common/dtos/output.dto';
import { Dish } from '../entities/dish.entity';
declare const EditDishInput_base: import("@nestjs/common").Type<Pick<Partial<Dish>, "name" | "options" | "price" | "description">>;
export declare class EditDishInput extends EditDishInput_base {
    dishId: number;
}
export declare class EditDishOutput extends CommonOutput {
}
export {};
