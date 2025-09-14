/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsInt, IsDecimal, IsArray } from 'class-validator';

export class ProductsDTO {
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
  imagens: {
    nome: string;
    descricao: string;
  };

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
