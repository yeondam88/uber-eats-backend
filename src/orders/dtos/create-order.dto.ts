import {
  Field,
  InputType,
  Int,
  ObjectType,
  PickType,
} from '@nestjs/graphql'
import { CommonOutput } from 'src/common/dtos/output.dto'
import { Order } from '../entities/order.entity'

@InputType()
export class CreateOrderInput extends PickType(Order, [
  'items',
]) {
  @Field(() => Int)
  restaurantId: number
}

@ObjectType()
export class CreateOrderOutput extends CommonOutput {}
