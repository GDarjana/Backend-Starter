import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleController } from './controller/article.controller';
import { GetArticlesService } from './use-case/get-articles.service';
import { GetArticlesByAuthorService } from './use-case/get-articles-by-author.service';
import { GetOneArticleByIdService } from './use-case/get-one-article-by-id.service';
import { DeleteArticleService } from './use-case/delete-article.service';
import { CreateArticleService } from './use-case/create-article.service';
import { UpdateArticleService } from './use-case/update-article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    GetArticlesService,
    GetArticlesByAuthorService,
    GetOneArticleByIdService,
    DeleteArticleService,
    CreateArticleService,
    UpdateArticleService,
  ],
})
export class ArticleModule {}
