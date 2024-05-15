import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

Injectable();
export class BCryptPasswordHasherService {
  async hashPassword(password: string): Promise<string> {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      return hash;
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
