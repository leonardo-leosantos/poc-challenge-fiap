/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersRepository {
  private users: any[] = [];
  saveUser(user: any) {
    this.users.push(user);
  }
  getUsers() {
    return this.users;
  }
}
