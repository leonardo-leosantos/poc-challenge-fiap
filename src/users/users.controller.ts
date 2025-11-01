import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersDTO } from './dto/users.dto';
import { UsersEntity } from './users.entity';
import { ListUsersDTO } from './dto/listUsers.dto';

@Controller('users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Get('/')
  async getUsers() {
    const usersFromDB = await this.usersRepository.getUsers();
    const usersList = usersFromDB.map(
      (user) => new ListUsersDTO(user.name, user.email, user.age),
    );

    return usersList;
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return new ListUsersDTO(user.name, user.email, user.age);
  }

  @Post('/')
  async createUser(@Body() body: UsersDTO) {
    const userEntity = new UsersEntity();

    userEntity.email = body.email;
    userEntity.name = body.name;
    userEntity.phone = body.phone;
    userEntity.age = body.age;

    const savedUser = await this.usersRepository.saveUser(userEntity);
    return {
      status: 'User created',
      data: new ListUsersDTO(savedUser.name, savedUser.email, savedUser.age),
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() body: Partial<UsersDTO>) {
    const existingUser = await this.usersRepository.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = await this.usersRepository.updateUser(id, body);
    return {
      status: 'User updated',
      data: new ListUsersDTO(
        updatedUser.name,
        updatedUser.email,
        updatedUser.age,
      ),
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const existingUser = await this.usersRepository.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepository.deleteUser(id);
    return {
      status: 'User deleted',
      message: `User with id ${id} has been deleted`,
    };
  }
}
