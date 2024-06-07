import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@src/user/entity/user.entity';

Injectable();
export class GetAllUsersByBirthCityService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsersByBirthCity(birthCity: string) {
    return await this.userRepository.findBy({ birthCity: birthCity });
  }
}
