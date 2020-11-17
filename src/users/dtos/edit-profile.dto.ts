import { CommonOutput } from '../../common/dtos/output.dto';
import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class EditProfileOutput extends CommonOutput {}

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['email', 'password']),
) {}
