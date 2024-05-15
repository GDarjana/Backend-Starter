import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { UserCreateDto } from 'src/user/dto/user-create.dto';

Injectable();
export class PasswordHasherService {
  async hashPassword(data: UserCreateDto) {
    try {
      return await bcrypt.hash(data.password, 10);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
