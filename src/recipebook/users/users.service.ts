import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const salt = 10;
    const hashedPassword = await this.encryptPassword(createUserDto.password);
    return await this.prisma.users.create({
      data: {
        username: createUserDto.username,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        username: updateUserDto.username,
        password: await this.encryptPassword(updateUserDto.password),
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        isAvailable: false,
      },
    });
  }

  encryptPassword(password: string) {
    const salt = 10;
    return bcrypt.hash(password, salt);
  }
}
