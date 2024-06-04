import {
  Inject,
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

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({
      where: { username: username },
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
