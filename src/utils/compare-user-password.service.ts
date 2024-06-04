import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

Injectable();
export class CompareUserPasswordService {
  constructor(
    // on "injecte" le repository de l'entité Article
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async compare(passwordToCompare: string, password: string): Promise<boolean> {
    const match = await bcrypt.compare(passwordToCompare, password);
    if (!match) {
      throw new UnauthorizedException();
    }
    return match;
  }
}
