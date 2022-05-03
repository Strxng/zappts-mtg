import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(data) {
    return await this.cardRepository.save(this.cardRepository.create(data));
  }

  async findAll() {
    return await this.cardRepository.find();
  }

  async findOne(id: string) {
    return await this.cardRepository.findOne(id);
  }

  async update(id: string, data) {
    const card = await this.cardRepository.findOne(id);
    this.cardRepository.merge(card, data);
    return await this.cardRepository.save(card);
  }

  async remove(id: string) {
    await this.cardRepository.findOne(id);
    await this.cardRepository.softDelete(id);
  }
}
