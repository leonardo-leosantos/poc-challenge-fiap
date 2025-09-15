import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersDTO } from './dto/users.dto';
import { UsersEntity } from './users.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './dto/listUsers.dto';

@Controller('users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Get('/')
  getUsers() {
    const usersFromDB = this.usersRepository.getUsers();
    const usersList = usersFromDB.map(
      (user) => new ListUsersDTO(user.name, user.email, user.age),
    );

    return usersList;
  }

  @Post('/')
  createUser(@Body() body: UsersDTO) {
    const userEntity = new UsersEntity();

    userEntity.email = body.email;
    userEntity.name = body.name;
    userEntity.phone = body.phone;
    userEntity.age = body.age;
    userEntity.id = uuid();

    this.usersRepository.saveUser(userEntity);
    return {
      status: 'User created',
      data: new ListUsersDTO(body.name, body.email, body.age),
    };
  }
}
