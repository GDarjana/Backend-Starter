import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserCreateDto } from '../dto/user-create.dto';
import { Repository } from 'typeorm';

Injectable();
export class GetUserByMailService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(data: UserCreateDto) {
    try {
      return this.userRepository.findOne({ where: { mail: data.mail } });
    } catch (error) {
      throw new Error('Error while getting user');
    }
  }
}
