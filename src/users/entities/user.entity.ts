import { Column, Entity } from 'typeorm/index';
import { IsString } from 'class-validator';
import { CoreEntity } from '../../common/entities/core.entity';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

enum UserRole {
  Client,
  Owner,
  Delivery,
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType({
  isAbstract: true,
})
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @IsString()
  @Field(() => String)
  email: string;

  @Column()
  @IsString()
  @Field(() => String)
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  @Field(() => UserRole)
  role: UserRole;
}
