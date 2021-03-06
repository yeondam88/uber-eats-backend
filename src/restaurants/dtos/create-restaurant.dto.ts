import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dtos/output.dto';
import { Restaurant } from '../entities/restaurant.entity';

/**
 * Mapped Type - Mapped with Entity class to pass all fields except id
 */

@InputType()
export class CreateRestaurantInput extends PickType(Restaurant, [
  'name',
  'coverImage',
  'address'
]) {

  @Field(() => String)
  categoryName: string;

}

@ObjectType()
export class CreateRestaurantOutput extends CommonOutput {}
