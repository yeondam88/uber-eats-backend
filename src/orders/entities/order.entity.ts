import {
  Field,
  Float,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import { IsEnum, IsNumber } from 'class-validator'
import { CoreEntity } from 'src/common/entities/core.entity'
import { Dish } from 'src/restaurants/entities/dish.entity'
import { Restaurant } from 'src/restaurants/entities/restaurant.entity'
import { User } from 'src/users/entities/user.entity'
import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm'
import { Column } from 'typeorm'
import { OrderItem } from './order-item.entity'

export enum OrderStatus {
  Pending = 'Pending',
  Cooking = 'Cooking',
  PickedUp = 'PickedUp',
  Delivered = 'Delivered',
}

registerEnumType(OrderStatus, { name: 'OrderStatus' })

@InputType('OrderInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Order extends CoreEntity {
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  customer?: User

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.rides, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  driver?: User

  @Field(() => Restaurant)
  @ManyToOne(
    () => Restaurant,
    (restaurant) => restaurant.orders,
    {
      onDelete: 'SET NULL',
      nullable: true,
    }
  )
  restaurant: Restaurant

  @Field(() => [OrderItem])
  @ManyToMany(() => OrderItem)
  @JoinTable()
  items: OrderItem[]

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  @IsNumber()
  total?: number

  @Column({ type: 'enum', enum: OrderStatus })
  @Field(() => OrderStatus)
  @IsEnum(OrderStatus)
  status: OrderStatus
}
