import { Injectable } from '@nestjs/common';
import { CreateRecipebookDto } from './dto/create-recipebook.dto';
import { UpdateRecipebookDto } from './dto/update-recipebook.dto';

@Injectable()
export class RecipebookService {
  create(createRecipebookDto: CreateRecipebookDto) {
    return 'This action adds a new recipebook';
  }

  findAll() {
    return `This action returns all recipebook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipebook`;
  }

  update(id: number, updateRecipebookDto: UpdateRecipebookDto) {
    return `This action updates a #${id} recipebook`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipebook`;
  }
}
