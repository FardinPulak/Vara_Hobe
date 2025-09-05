import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyPropertyRepository } from './my-property.repository';
import { MyProperty } from './my-property.entity';
import { CreateMyPropertyDto } from './my-property.dto';

@Injectable()
export class MyPropertyService {
  findAllByUser(useruserId: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(MyPropertyRepository)
    private myPropertyRepository: MyPropertyRepository,  // Inject the repository
  ) {}

  // Create a new property
  async create(createMyPropertyDto: CreateMyPropertyDto, userId: number): Promise<MyProperty> {
    const property = this.myPropertyRepository.create({
      ...createMyPropertyDto,
      userId, // Associate the property with the logged-in user
    });

    return await this.myPropertyRepository.save(property); // Save the new property to the database
  }

  // Other methods like find, update, etc.
}
