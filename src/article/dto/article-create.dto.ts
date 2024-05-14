import { IsNotEmpty, MinLength } from 'class-validator';

export class ArticleCreateDto {
  @MinLength(3, {
    message: 'Le titre doit contenir au moins 3 caractères',
  })
  title: string;

  // [GDA 05/14/2024] Vérifie que le contenu n'est pas vide
  // Applique la vérification sur content
  @MinLength(1, {
    message: 'La description doit contenir au moins 1 caractère',
  })
  content: string;

  // [GDA 05/14/2024] Vérifie qu'il y ait bien un auteur associé
  // Applique la vérification sur author
  @IsNotEmpty({ message: 'L"auteur doit être renseigné' })
  author: string;
}
