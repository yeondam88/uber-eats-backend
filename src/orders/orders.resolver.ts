import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthUser } from 'src/auth/auth-user.decorator'
import { Role } from 'src/auth/role.decorator'
import {
  CreateOrderInput,
  CreateOrderOutput,
} from 'src/orders/dtos/create-order.dto'
import { Order } from 'src/orders/entities/order.entity'
import { OrdersService } from 'src/orders/orders.service'
import { User } from 'src/users/entities/user.entity'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(
    private readonly orderServices: OrdersService
  ) {}

  @Mutation(() => CreateOrderOutput)
  @Role(['Client'])
  async createOrder(
    @AuthUser() customer: User,
    @Args('input')
    createOrderInput: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    return {
      ok: true,
    }
  }
}
