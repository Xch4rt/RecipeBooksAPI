import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstrucctionsService } from './instrucctions.service';
import { CreateInstrucctionDto } from './dto/create-instrucction.dto';
import { UpdateInstrucctionDto } from './dto/update-instrucction.dto';

@Controller('instrucctions')
export class InstrucctionsController {
  constructor(private readonly instrucctionsService: InstrucctionsService) {}

  @Post()
  create(@Body() createInstrucctionDto: CreateInstrucctionDto) {
    return this.instrucctionsService.create(createInstrucctionDto);
  }

  @Get()
  findAll() {
    return this.instrucctionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrucctionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstrucctionDto: UpdateInstrucctionDto,
  ) {
    return this.instrucctionsService.update(+id, updateInstrucctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrucctionsService.remove(+id);
  }
}
