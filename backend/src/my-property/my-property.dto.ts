import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMyPropertyDto {
  @IsString()
  propertyType: string;

  @IsString()
  category: string;

  @IsString()
  location: string;

  @IsNumber()
  bedroom: number;

  @IsNumber()
  bathroom: number;

  @IsOptional()
  @IsString()
  balcony?: string;

  @IsOptional()
  @IsString()
  kitchen?: string;

  @IsString()
  parking: string;

  @IsString()
  floorType: string;

  @IsString()
  floorPosition: string;

  @IsString()
  gallery: string; // For storing image URLs or file paths

  @IsNumber()
  advanceRent: number;

  @IsString()
  availableFrom: string;

  @IsString()
  availableFor: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  rentPrice: number;

  @IsString()
  unit: string;

  @IsString()
  per: string;
}
