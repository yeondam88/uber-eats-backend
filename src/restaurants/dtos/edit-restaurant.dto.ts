import { InputType, PartialType, ObjectType, Field } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dtos/output.dto';
import { CreateRestaurantInput } from 'src/restaurants/dtos/create-restaurant.dto';

@InputType()
export class EditRestaurantInput extends PartialType(CreateRestaurantInput) {
  @Field(() => Number)
  restaurantId: number;
}

@ObjectType()
export class EditRestaurantOutput extends CommonOutput {}
