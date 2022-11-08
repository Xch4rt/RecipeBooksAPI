import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipes.create({
      data: {
        recipe_book_id: createRecipeDto.recipe_book_id,
        category_id: createRecipeDto.category_id,
        description: createRecipeDto.description,
        photo: createRecipeDto.photo,
      },
    });
  }

  findAll() {
    return this.prisma.recipes.findMany();
  }

  findOne(id: number) {
    return this.prisma.recipes.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipes.update({
      where: {
        id: id,
      },
      data: {
        recipe_book_id: updateRecipeDto.recipe_book_id,
        category_id: updateRecipeDto.category_id,
        description: updateRecipeDto.description,
        photo: updateRecipeDto.photo,
      },
    });
  }

  remove(id: number) {
    return this.prisma.recipes.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }
}
