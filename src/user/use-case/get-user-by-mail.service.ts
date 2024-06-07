import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

Injectable();
export class GetUserByMailService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(mail: string) {
    try {
      return this.userRepository.findOne({ where: { mail: mail } });
    } catch (error) {
      throw new Error('Error while getting user');
    }
  }
}
