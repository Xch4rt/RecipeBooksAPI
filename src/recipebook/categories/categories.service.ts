import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    console.log('Service: ' + createCategoryDto.category_name);
    return this.prisma.categories.create({
      data: {
        category_name: createCategoryDto.category_name,
      },
    });
  }

  async findAll() {
    return await this.prisma.categories.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.categories.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.prisma.categories.update({
      where: {
        id: id,
      },
      data: {
        category_name: updateCategoryDto.category_name,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.categories.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }
}
