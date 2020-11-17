import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm/index';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
