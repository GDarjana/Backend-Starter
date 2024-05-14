import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  // [GDA 05/14/2024] Nouvel attribut de l'entité / nouvelle colonne de la table qui lui sera associé
  @Column({ type: 'text' })
  content: string;

  // [GDA 05/14/2024] Nouvel attribut de l'entité / nouvelle colonne de la table qui lui sera associé
  @Column({ type: 'varchar' })
  author: string;
}
