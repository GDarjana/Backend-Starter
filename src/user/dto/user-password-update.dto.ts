import { IsString } from 'class-validator';

export class UserPasswordUpdateDto {
  @IsString()
  password: string;
}
