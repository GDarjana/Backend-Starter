/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateJWTService } from '@src/auth/user-case/create-jwt.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: CreateJWTService) {}

  @Post('/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.mail, signInDto.password);
  }
}
