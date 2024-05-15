import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'Le nom doit être renseigné' })
  name: string;

  @IsNotEmpty({ message: 'Le prénom doit être renseigné' })
  lasname: string;

  @IsEmail({}, { message: 'Le mail doit être une adresse mail valide' })
  mail: string;

  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  password: string;

  @IsNumber({}, { message: "L'âge doit être un nombre" })
  age: number;
}
