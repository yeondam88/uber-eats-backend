import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Entity, Column, OneToMany } from 'typeorm/index';
import { IsString, Length } from 'class-validator';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Category extends CoreEntity {
  @Field(() => String)
  @Column({unique: true})
  @IsString()
  @Length(5)
  name: string;

  @Field(() => String)
  @Column({nullable: true})
  @IsString()
  coverImage: string;

  @Field(() => String)
  @Column({unique: true})
  @IsString()
  slug: string;

  @OneToMany(() => Restaurant, (Restaurant) => Restaurant.category)
  @Field(() => [Restaurant])
  restaurants: Restaurant[];
}
