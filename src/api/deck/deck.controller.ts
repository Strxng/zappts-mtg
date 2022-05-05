import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { DeckService } from './deck.service';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  async create(@Body() body) {
    return this.deckService.create(body);
  }

  @Get()
  async findAll() {
    return this.deckService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.deckService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    try {
      return this.deckService.update(id, body);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.deckService.remove(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
