/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
// [GDA 05/14/2024] Screaming Architecture import
import { CreateArticleService } from '../use-case/create-article.service';
import { DeleteArticleService } from '../use-case/delete-article.service';
import { GetAllArticlesService } from '../use-case/get-all-articles.service';
import { GetArticleByAuthorService } from '../use-case/get-article-by-author.service';
import { GetOneArticleByIdService } from '../use-case/get-one-article-by-id.service';
import { UpdateArticleService } from '../use-case/update-article.service';

import { ArticleCreateDto } from '../dto/article-create.dto';
import { ArticleUpdateDto } from '../dto/article-update.dto';

// @Controller('articles')
// est un décorateur qui permet de déclarer un controller
// donc une classe qui va contenir des routes (url accessible)
@Controller('articles')
export class ArticleController {
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor(
    private readonly CreateArticleService: CreateArticleService,
    private readonly DeleteArticleService: DeleteArticleService,
    private readonly UpdateArticleService: UpdateArticleService,
    private readonly GetAllArticlesService: GetAllArticlesService,
    private readonly GetArticleByAuthorService: GetArticleByAuthorService,
    private readonly GetOneArticleByIdService: GetOneArticleByIdService,
  ) {}

  // @Get() est un décorateur qui permet de déclarer
  // une route accessible avec la méthode GET
  @Get()
  getAllArticles() {
    return this.GetAllArticlesService.getAllarticles();
  }

  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get(':id')
  getOneArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.GetOneArticleByIdService.getOneArticleById(id);
  }

  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)
  createArticle(@Body() data: ArticleCreateDto) {
    return this.CreateArticleService.createArticle(data);
  }

  @Put(':id')
  updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArticleUpdateDto,
  ) {
    return this.UpdateArticleService.updateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this.DeleteArticleService.deleteArticle(id);
  }

  // [GDA 05/14/2024] Nouveau point d'API pour récupérer les articles par auteur
  // Définie une nouvelle route utilisant le verbe GET
  // Puis recupre indirectement via le repository les articles associés à l'auteur passé en paramètre
  // Service -> Repo
  @Get('/author/:author')
  getArticleByAuthor(@Param('author') author: string) {
    return this.GetArticleByAuthorService.getArticleByAuthor(author);
  }
}
