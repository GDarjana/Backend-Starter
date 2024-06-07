/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../entity/user.entity';
import { BCryptPasswordHasherService } from 'src/utils/bcrypt-pasword-hasher.service';
import { GetUserByMailService } from './get-user-by-mail.service';

Injectable();
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordHasherService: BCryptPasswordHasherService,
    private readonly GetUserByMailService: GetUserByMailService,
  ) {}

  async createUser(data: UserCreateDto) {
    const user = await this.GetUserByMailService.getUser(data.mail);
    // Early return if user already exists
    if (user) {
      throw new Error('User already exists');
    }
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
