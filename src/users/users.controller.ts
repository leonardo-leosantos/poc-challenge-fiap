/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

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
