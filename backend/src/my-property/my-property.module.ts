import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Import TypeOrmModule to use repositories
import { MyPropertyRepository } from './my-property.repository';  // Correct the path if necessary
import { MyPropertyService } from './my-property.service';  // Import the service

@Module({
  imports: [TypeOrmModule.forFeature([MyPropertyRepository])],  // Import repository using TypeOrmModule
  providers: [MyPropertyService],  // Provide the service here
  exports: [MyPropertyRepository],  // Export the repository if other modules need it
})
export class MyPropertyModule {}
