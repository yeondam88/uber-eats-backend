import { CommonOutput } from '../../common/dtos/output.dto';
import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Verification } from '../entities/verification.entity';

@ObjectType()
export class VerifyEmailOutput extends CommonOutput {}

@InputType()
export class VerifyEmailInput extends PickType(Verification, ['code']) {}
