import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  create(createIngredientDto: CreateIngredientDto) {
    return this.prisma.ingredients.create({
      data: {
        recipe_id: createIngredientDto.recipe_id,
        instrucction: createIngredientDto.instrucction,
      },
    });
  }

  findAll() {
    return this.prisma.ingredients.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingredients.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.prisma.ingredients.update({
      where: {
        id: id,
      },
      data: {
        recipe_id: updateIngredientDto.recipe_id,
        instrucction: updateIngredientDto.instrucction,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ingredients.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }
}
