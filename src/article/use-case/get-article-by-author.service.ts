import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';

// [GDA 05/14/2024]
Injectable();
export class GetArticleByAuthorService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  // [GDA 05/14/2024] Récupère les articles associés à l'auteur passé en paramètre
  async getArticleByAuthor(author: string) {
    // Utilise une fonction findBy par défaut du repository pour récupère les articles de l'auteur
    // Le resultat n'étant pas instantané , on utilise le mot clé await pour attendre la fin de la requête et permettre au reste de s'executer
    return await this.articleRepository.findBy({ author: author });
  }
}
