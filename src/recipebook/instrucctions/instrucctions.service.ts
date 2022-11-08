import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstrucctionDto } from './dto/create-instrucction.dto';
import { UpdateInstrucctionDto } from './dto/update-instrucction.dto';

@Injectable()
export class InstrucctionsService {
  constructor(private prisma: PrismaService) {}

  create(createInstrucctionDto: CreateInstrucctionDto) {
    return this.prisma.instructions.create({
      data: {
        recipe_id: createInstrucctionDto.recipe_id,
        ingredient_name: createInstrucctionDto.ingredient_name,
      },
    });
  }

  findAll() {
    return this.prisma.instructions.findMany();
  }

  findOne(id: number) {
    return this.prisma.instructions.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateInstrucctionDto: UpdateInstrucctionDto) {
    return this.prisma.instructions.update({
      where: {
        id: id,
      },
      data: {
        recipe_id: updateInstrucctionDto.recipe_id,
        ingredient_name: updateInstrucctionDto.ingredient_name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.instructions.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }
}
