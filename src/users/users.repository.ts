import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
@Injectable()
export class UsersRepository {
  private users: UsersDTO[] = [];

  saveUser(user: UsersDTO) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
