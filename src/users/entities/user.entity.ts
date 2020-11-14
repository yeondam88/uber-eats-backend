import { Column, Entity } from 'typeorm/index';
import { IsString } from 'class-validator';
import { CoreEntity } from '../../common/entities/core.entity';

type UserRole = 'client' | 'owner' | 'delivery';

@Entity()
export class User extends CoreEntity {
  @Column()
  @IsString()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  role: UserRole;
}
