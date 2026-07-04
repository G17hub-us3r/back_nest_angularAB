import { OrderProduct } from '../../order/entities/order-product.entity';
import { Category } from '../../category/entities/category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  stock!: number;

  @Column()
  image!: string;

  @Column()
  description!: string;

  @Column()
  status!: boolean;

  @ManyToOne(() => Category)
  category!: Category;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts!: OrderProduct[];
}
