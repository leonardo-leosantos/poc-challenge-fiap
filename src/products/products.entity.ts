import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userEmail: string;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column('int')
  quantidadeDisponivel: number;

  @Column('text')
  descricao: string;

  @Column('jsonb')
  caracteristicas: Array<{ nome: string; descricao: string }>;

  @Column('jsonb')
  imagens: Array<{ nome: string; descricao: string }>;

  @Column()
  categoria: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAtualizacao: Date;
}

