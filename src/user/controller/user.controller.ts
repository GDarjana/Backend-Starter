/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserService } from '@src/user/use-case/create-user.service';
import { GetAllUsersService } from '@src/user/use-case/get-all-users.service';
import { GetUserByIdService } from '@src/user/use-case/get-user-by-id.service';
import { GetAllUsersByBirthCityService } from '@src/user/use-case/get-all-users-by-birthCity.service';
import { UpdateUserService } from '@src/user/use-case/update-user.service';
import { UpdateUserPasswordService } from '@src/user/use-case/update-user-password.service';
import { UserCreateDto } from '@src/user/dto/user-create.dto';
import { UserUpdateDto } from '@src/user/dto/user-update.dto';
import { UserPasswordUpdateDto } from '@src/user/dto/user-password-update.dto';

@Controller('users')
export class UserController {
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor(
    private readonly CreateUserService: CreateUserService,
    private readonly GetAllUsersService: GetAllUsersService,
    private readonly GetUserByIdService: GetUserByIdService,
    private readonly GetUsersByBirthCityService: GetAllUsersByBirthCityService,
    private readonly UpdateUserService: UpdateUserService,
    private readonly UpdateUserPasswordService: UpdateUserPasswordService,
  ) {}

  @Get()
  getAllUsers() {
    return this.GetAllUsersService.getAllUsers();
  }

  @Post()
  createUser(@Body() data: UserCreateDto) {
    return this.CreateUserService.createUser(data);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.GetUserByIdService.getUserById(id);
  }

  @Get('/birthCity/:birthCity')
  getUsersByBirthCity(@Param('birthCity') birthCity: string) {
    return this.GetUsersByBirthCityService.getUsersByBirthCity(birthCity);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserUpdateDto,
  ) {
    return this.UpdateUserService.updateUser(id, data);
  }

  @Put(':id/password')
  updateUserPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserPasswordUpdateDto,
  ) {
    return this.UpdateUserPasswordService.updateUserPassword(id, data);
  }
}
