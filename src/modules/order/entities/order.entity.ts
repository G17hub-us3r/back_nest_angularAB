import { Client } from '../../client/entities/client.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderProduct } from './order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string;

  @Column()
  status!: number;

  @Column()
  observations!: string;

  @ManyToOne(() => Client)
  client!: Client;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts!: OrderProduct[];
}
