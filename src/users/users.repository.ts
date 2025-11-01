import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from './dto/users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async saveUser(user: UsersEntity): Promise<UsersEntity> {
    return await this.usersRepository.save(user);
  }

  async getUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: string): Promise<UsersEntity | null> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async updateUser(id: string, userData: Partial<UsersEntity>): Promise<UsersEntity> {
    await this.usersRepository.update(id, userData);
    return await this.getUserById(id);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async verifyUserByEmail(email: string): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user !== null;
  }
}
