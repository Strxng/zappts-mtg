import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data) {
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async update(id: string, data) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    await this.userRepository.findOne(id);
    await this.userRepository.softDelete(id);
  }
}
