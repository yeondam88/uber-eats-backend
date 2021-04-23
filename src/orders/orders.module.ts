import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from 'src/orders/entities/order.entity'
import { OrdersResolver } from 'src/orders/orders.resolver'
import { OrdersService } from './orders.service'

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
