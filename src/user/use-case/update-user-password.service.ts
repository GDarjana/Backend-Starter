import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@src/user/entity/user.entity';
import { UserPasswordUpdateDto } from '@src/user/dto/user-password-update.dto';
import { BCryptPasswordHasherService } from '@src/utils/bcrypt-pasword-hasher.service';

Injectable();
export class UpdateUserPasswordService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordHasherService: BCryptPasswordHasherService,
  ) {}

  async updateUserPassword(id: number, data: UserPasswordUpdateDto) {
    const user = await this.userRepository.findOneBy({ id });
    data.password = await this.passwordHasherService.hashPassword(
      data.password,
    );
    const userUpdate = { ...user, ...data };
    await this.userRepository.save(userUpdate);

    return userUpdate;
  }
}
