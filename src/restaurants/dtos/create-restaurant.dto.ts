import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

/**
 * Mapped Type - Mapped with Entity class to pass all fields except id
 */

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
