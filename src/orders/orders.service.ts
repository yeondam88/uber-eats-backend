import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Order } from 'src/orders/entities/order.entity'
import { Repository } from 'typeorm'

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orders: Repository<Order>
  ) {}

  async createOrder(customer, createOrderInput) {}
}
