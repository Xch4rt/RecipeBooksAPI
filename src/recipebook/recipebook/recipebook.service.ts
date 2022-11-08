import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipebookDto } from './dto/create-recipebook.dto';
import { UpdateRecipebookDto } from './dto/update-recipebook.dto';

@Injectable()
export class RecipebookService {
  constructor(private prisma: PrismaService) {}

  create(createRecipebookDto: CreateRecipebookDto) {
    return this.prisma.recipeBook.create({
      data: {
        user_id: createRecipebookDto.user_id,
        recipe_book_name: createRecipebookDto.recipe_book_name,
      },
    });
  }

  findAll() {
    return this.prisma.recipeBook.findMany();
  }

  findOne(id: number) {
    return this.prisma.recipeBook.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRecipebookDto: UpdateRecipebookDto) {
    return this.prisma.recipeBook.update({
      where: {
        id: id,
      },
      data: {
        user_id: updateRecipebookDto.user_id,
        recipe_book_name: updateRecipebookDto.recipe_book_name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.recipeBook.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }
}
