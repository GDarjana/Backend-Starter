// [GDA 05/15/2024]

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../entity/user.entity';
import { BCryptPasswordHasherService } from 'src/utils/bcrypt-pasword-hasher.service';

Injectable();
export class CreateUserService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordHasherService: BCryptPasswordHasherService,
  ) {}

  async createUser(data: UserCreateDto) {
    try {
      data.password = await this.passwordHasherService.hashPassword(
        data.password,
      );
      return this.userRepository.save(data);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
