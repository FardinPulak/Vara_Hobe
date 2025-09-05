import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class MyProperty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  propertyType: string;

  @Column()
  category: string;

  @Column()
  location: string;

  @Column()
  bedroom: number;

  @Column()
  bathroom: number;

  @Column()
  balcony: string;

  @Column()
  kitchen: string;

  @Column()
  parking: string;

  @Column()
  floorType: string;

  @Column()
  floorPosition: string;

  @Column()
  gallery: string;

  @Column()
  advanceRent: number;

  @Column()
  availableFrom: string;

  @Column()
  availableFor: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  rentPrice: number;

  @Column()
  unit: string;

  @Column()
  per: string;

  // Add userId to associate the property with a user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number; // This is the foreign key column
}
