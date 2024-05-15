import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { CreateUserService } from './use-case/create-user.service';
import { BCryptPasswordHasher } from 'src/utils/bcrypt-pasword-hasher.service';
import { PasswordHasherServiceInterface } from 'src/utils/password-hasher.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: CreateUserService,
      useFactory: (passwordHasherService: PasswordHasherServiceInterface) => {
        return new CreateUserService(passwordHasherService);
      },
      inject: [BCryptPasswordHasher],
    },
    BCryptPasswordHasher,
  ],
})
export class UserModule {}
