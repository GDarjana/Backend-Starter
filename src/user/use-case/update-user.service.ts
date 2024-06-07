import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@src/user/entity/user.entity';
import { UserPasswordUpdateDto } from '@src/user/dto/user-password-update.dto';

Injectable();
export class UpdateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async updateUser(id: number, data: UserPasswordUpdateDto) {
    const user = await this.userRepository.findOneBy({ id });
    const userUpdate = { ...user, ...data };
    await this.userRepository.save(userUpdate);

    return userUpdate;
  }
}
