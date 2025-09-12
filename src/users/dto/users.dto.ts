/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, IsEmail, IsInt } from 'class-validator';

export class UsersDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;

  @IsString({ message: 'Phone deve ser no formato string' })
  phone: string;

  @IsInt()
  age: number;
}
