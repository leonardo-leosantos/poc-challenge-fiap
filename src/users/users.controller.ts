import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Get('/')
  getUsers() {
    return this.usersRepository.getUsers();
  }

  @Post('/')
  createUser(@Body() body: UsersDTO) {
    console.log(JSON.stringify(body));
    this.usersRepository.saveUser(body);
    return { status: 'User created', data: { ...body } };
  }
}
