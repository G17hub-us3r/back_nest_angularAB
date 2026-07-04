import { Order } from '../../order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  full_name!: string;

  @Column()
  dni!: string;

  @Column()
  phone!: string;

  @OneToMany(() => Order, (order) => order.client)
  orders!: Order[];
}
