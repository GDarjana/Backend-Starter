import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { CreateJWTService } from './user-case/create-jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [CreateJWTService],
  controllers: [AuthController],
  exports: [CreateJWTService],
})
export class AuthModule {}
