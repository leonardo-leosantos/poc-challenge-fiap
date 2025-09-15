/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsNotEmpty,
  IsInt,
  IsDecimal,
  IsArray,
  IsEmail,
} from 'class-validator';

export class ProductsDTO {
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  nome: string;

  @IsDecimal()
  valor: number;

  @IsInt()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  descricao: string;

  @IsArray()
  caracteristicas: CaracteristicasDTO[];

  @IsArray()
  imagens: ImagensDTO[];

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  dataCriacao: Date;

  @IsNotEmpty()
  dataAtualizacao: Date;
}

class CaracteristicasDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;
}

class ImagensDTO {
  nome: string;
  descricao: string;
}
