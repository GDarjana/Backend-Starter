import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { CreateUserService } from './use-case/create-user.service';
import { BCryptPasswordHasherService } from 'src/utils/bcrypt-pasword-hasher.service';
import { GetAllUsersService } from './use-case/get-all-users.service';
import { GetUserByIdService } from './use-case/get-user-by-id.service';
import { GetAllUsersByBirthCityService } from './use-case/get-all-users-by-birthCity.service';
import { UpdateUserService } from './use-case/update-user.service';
import { UpdateUserPasswordService } from './use-case/update-user-password.service';
import { CompareUserPasswordService } from '../utils/compare-user-password.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    CreateUserService,
    GetAllUsersService,
    GetUserByIdService,
    GetAllUsersByBirthCityService,
    UpdateUserService,
    UpdateUserPasswordService,
    BCryptPasswordHasherService,
    CompareUserPasswordService,
  ],
})
export class UserModule {}
