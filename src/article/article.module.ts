import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleController } from './controller/article.controller';
import { CreateArticleService } from './use-case/create-article.service';
import { DeleteArticleService } from './use-case/delete-article.service';
import { GetAllArticlesService } from './use-case/get-all-articles.service';
import { GetArticleByAuthorService } from './use-case/get-article-by-author.service';
import { GetOneArticleByIdService } from './use-case/get-one-article-by-id.service';
import { UpdateArticleService } from './use-case/update-article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    CreateArticleService,
    DeleteArticleService,
    GetAllArticlesService,
    GetArticleByAuthorService,
    GetOneArticleByIdService,
    UpdateArticleService,
  ],
})
export class ArticleModule {}
