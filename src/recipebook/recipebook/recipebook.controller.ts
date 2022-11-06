import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipebookService } from './recipebook.service';
import { CreateRecipebookDto } from './dto/create-recipebook.dto';
import { UpdateRecipebookDto } from './dto/update-recipebook.dto';

@Controller('recipebook')
export class RecipebookController {
  constructor(private readonly recipebookService: RecipebookService) {}

  @Post()
  create(@Body() createRecipebookDto: CreateRecipebookDto) {
    return this.recipebookService.create(createRecipebookDto);
  }

  @Get()
  findAll() {
    return this.recipebookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipebookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipebookDto: UpdateRecipebookDto) {
    return this.recipebookService.update(+id, updateRecipebookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipebookService.remove(+id);
  }
}
