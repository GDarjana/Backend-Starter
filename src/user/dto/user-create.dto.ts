import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'Le pseudo doit être renseigné' })
  username: string;

  @IsNotEmpty({ message: 'Le nom doit être renseigné' })
  name: string;

  @IsNotEmpty({ message: 'Le prénom doit être renseigné' })
  lastName: string;

  @IsEmail({}, { message: 'Le mail doit être une adresse mail valide' })
  mail: string;

  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  password: string;

  @IsNumber({}, { message: "L'âge doit être un nombre" })
  age: number;

  @IsNotEmpty({ message: 'La ville de naissance doit être renseignée' })
  birthCity: string;
}
