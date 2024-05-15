import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  name: string;
  @IsEmail()
  mail: string;
  @IsString()
  lastName: string;
  @IsNumber()
  age: number;

  birthCity: string;
  password: string;
}
