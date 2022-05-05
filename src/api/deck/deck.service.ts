import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck)
    private readonly deckRepository: Repository<Deck>,
  ) {}

  async create(data) {
    return await this.deckRepository.save(this.deckRepository.create(data));
  }

  async findAll() {
    return await this.deckRepository.find();
  }

  async findOne(id: string) {
    return await this.deckRepository.findOne(id);
  }

  async update(id: string, data) {
    const deck = await this.deckRepository.findOne(id);
    this.deckRepository.merge(deck, data);
    return await this.deckRepository.save(deck);
  }

  async remove(id: string) {
    await this.deckRepository.findOne(id);
    await this.deckRepository.softDelete(id);
  }
}
