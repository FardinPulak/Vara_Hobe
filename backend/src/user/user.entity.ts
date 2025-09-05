import { MyProperty } from 'src/my-property/my-property.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  
  @OneToMany(() => MyProperty, myProperty => myProperty.user)
  properties: MyProperty[]
  userId: any;
  
}
