import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { UsersEntity } from './users.entity';
@Injectable()
export class UsersRepository {
  private users: UsersEntity[] = [];

  saveUser(user: UsersEntity) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  async verifyUserByEmail(email: string) {
    const userByEmail = await new Promise<UsersDTO | undefined>((resolve) => {
      const foundUser = this.users.find((user) => user.email === email);
      resolve(foundUser);
    });

    return userByEmail !== undefined;
  }
}
