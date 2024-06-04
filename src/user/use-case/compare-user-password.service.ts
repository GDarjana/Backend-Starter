import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

Injectable();
export class CompareUserPasswordService {
  constructor(
    // on "injecte" le repository de l'entité Article
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async comparePassword(signInDto: Record<string, any>) {
    try {
      const user = await this.userRepository.findOne({
        where: { username: signInDto.username },
      });
      if (!user) {
        throw new NotFoundException();
      }
      const match = await bcrypt.compare(signInDto.password, user.password);
      if (!match) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Creditentials do not match');
    }
  }
}
