import { Controller, Post, Body, Request } from '@nestjs/common';
import { MyPropertyService } from './my-property.service';
import { CreateMyPropertyDto } from './my-property.dto';

@Controller('my-properties')
export class MyPropertyController {
  constructor(
    private readonly myPropertyService: MyPropertyService,  // Inject the service
  ) {}

  @Post('create')
  async createProperty(
    @Body() createMyPropertyDto: CreateMyPropertyDto, 
    @Request() req,
  ) {
    const userId = req.user.id;  // Extract the user ID from the JWT token
    return this.myPropertyService.create(createMyPropertyDto, userId);  // Pass DTO and userId to create method
  }
}
