/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../use-case/create-user.service';
import { UserCreateDto } from '../dto/user-create.dto';

@Controller('users')
export class UserController {
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor(private readonly CreateUserService: CreateUserService) {}

  @Post()
  createUser(@Body() data: UserCreateDto) {
    return this.CreateUserService.createUser(data);
  }
}
