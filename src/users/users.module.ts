import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersValidator } from './validators/users.validator';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, UsersValidator],
})
export class UsersModule {}
