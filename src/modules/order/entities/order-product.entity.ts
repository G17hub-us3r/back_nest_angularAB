import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../../product/entities/product.entity';

@Entity('order_products')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  periodId!: number;

  @Column()
  productId!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  order!: Order;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  product!: Product;
}
