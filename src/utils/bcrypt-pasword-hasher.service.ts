import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { PasswordHasherServiceInterface } from './password-hasher.service.interface';

Injectable();
export class BCryptPasswordHasher implements PasswordHasherServiceInterface {
  async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, 10);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
