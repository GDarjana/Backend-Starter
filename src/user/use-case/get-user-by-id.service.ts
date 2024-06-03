import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

Injectable();
export class GetUserByIdService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserById(id: number) {
    return await this.userRepository.findBy({ id: id });
  }

  async getUserByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { username: username } });
  }
}
