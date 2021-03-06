import { CommonOutput } from 'src/common/dtos/output.dto';
import { CreateRestaurantInput } from 'src/restaurants/dtos/create-restaurant.dto';
declare const EditRestaurantInput_base: import("@nestjs/common").Type<Partial<CreateRestaurantInput>>;
export declare class EditRestaurantInput extends EditRestaurantInput_base {
    restaurantId: number;
}
export declare class EditRestaurantOutput extends CommonOutput {
}
export {};
