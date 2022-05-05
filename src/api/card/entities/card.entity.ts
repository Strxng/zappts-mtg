import { User } from 'src/api/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'cards' })
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  edition: string;

  @Column()
  language: string;

  @Column({ name: 'is_foil' })
  isFoil: boolean;

  @Column({ type: 'decimal' })
  price: number;

  @Column()
  amount: number;

  @ManyToOne(() => User, () => Card)
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
