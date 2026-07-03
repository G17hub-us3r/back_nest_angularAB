import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  names!: string;

  @Column()
  lastNames!: string;

  @OneToOne(() => User, (user) => user.person)
  @JoinColumn()
  user!: User;
}
