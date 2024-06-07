import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { CompareUserPasswordService } from 'src/utils/compare-user-password.service';

Injectable();
export class CreateJWTService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly compareUserPasswordService: CompareUserPasswordService,
    private jwtService: JwtService,
  ) {}

  async signIn(mail: string, pass: string): Promise<{ access_token: string }> {
    if (!mail) {
      throw new UnauthorizedException();
    }
    const user = await this.userRepository.findOne({
      where: { mail: mail },
    });
    if (!user) {
      throw new NotFoundException();
    }
    const match = await this.compareUserPasswordService.compare(
      pass,
      user.password,
    );
    if (!match) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
