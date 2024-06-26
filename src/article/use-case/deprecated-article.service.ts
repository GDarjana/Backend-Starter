import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
import { ArticleUpdateDto } from '../dto/article-update.dto';
import { ArticleCreateDto } from '../dto/article-create.dto';

/**
 * @deprecated Use the screaming architecture instead
 */
Injectable();
export class ArticleService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async getAllarticles() {
    return await this.articleRepository.find();
  }

  async createArticle(data: ArticleCreateDto) {
    try {
      return this.articleRepository.save(data);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating article');
    }
  }
  async getOneArticleById(id: number) {
    return await this.articleRepository.findOneBy({ id });
  }

  async updateArticle(id: number, data: ArticleUpdateDto) {
    // on récupère l'article ciblé
    const article = await this.articleRepository.findOneBy({ id });
    // on "merge" les données du body de la requête
    // avec les données déjà présentes dans l'article
    const articleUpdate = { ...article, ...data };
    // on sauvegarde l'article mis à jour
    await this.articleRepository.save(articleUpdate);

    return articleUpdate;
  }
  async deleteArticle(id: number) {
    return await this.articleRepository.delete(id);
  }

  // [GDA 05/14/2024] Récupère les articles associés à l'auteur passé en paramètre
  async getArticleByAuthor(author: string) {
    // Utilise une fonction findBy par défaut du repository pour récupère les articles de l'auteur
    // Le resultat n'étant pas instantané , on utilise le mot clé await pour attendre la fin de la requête et permettre au reste de s'executer
    return await this.articleRepository.findBy({ author: author });
  }
}
