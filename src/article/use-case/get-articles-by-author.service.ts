import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';

Injectable();
export class GetArticlesByAuthorService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  // BPO - 05/14/2024 - Recherche des articles par auteur
  async getArticlesByAuthor(author: string) {
    return await this.articleRepository.findBy({ author: author });
  }
}
