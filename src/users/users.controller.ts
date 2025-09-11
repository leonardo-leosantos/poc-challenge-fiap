/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  private usersRepository = new UsersRepository();

  @Get('/')
  getUsers() {
    return this.usersRepository.getUsers();
  }

  @Post('/')
  createUser(@Body() body) {
    console.log(body);
    this.usersRepository.saveUser(body);
    return { status: 'User created', data: { ...body } };
  }
}
