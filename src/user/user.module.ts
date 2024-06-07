import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@src/user/entity/user.entity';
import { UserController } from '@src/user/controller/user.controller';
import { CreateUserService } from '@src/user/use-case/create-user.service';
import { BCryptPasswordHasherService } from '@src/utils/bcrypt-pasword-hasher.service';
import { GetAllUsersService } from '@src/user/use-case/get-all-users.service';
import { GetUserByIdService } from '@src/user/use-case/get-user-by-id.service';
import { GetAllUsersByBirthCityService } from '@src/user/use-case/get-all-users-by-birthCity.service';
import { UpdateUserService } from '@src/user/use-case/update-user.service';
import { UpdateUserPasswordService } from '@src/user/use-case/update-user-password.service';
import { CompareUserPasswordService } from '@src/utils/compare-user-password.service';
import { GetUserByMailService } from '@src/user/use-case/get-user-by-mail.service';

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
    // GDA
    GetUserByMailService,
  ],
})
export class UserModule {}
