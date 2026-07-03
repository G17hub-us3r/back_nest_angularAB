import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  detail!: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'user_roles' }) // Intermediate table creation
  users!: User[];
}
