import { EntityRepository, Repository } from 'typeorm';
import { MyProperty } from './my-property.entity';

@EntityRepository(MyProperty)
export class MyPropertyRepository extends Repository<MyProperty> {
  // You can add custom queries here if needed
}
