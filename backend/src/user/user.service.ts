// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  create(arg0: { name: string; email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  // Find user by ID or email (for login and profile)
  async findOne(where: { id?: number; email?: string }): Promise<User> {
    return this.userRepository.findOne({ where });
  }

  // Update user profile based on user ID
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne({ id });
  }
}
