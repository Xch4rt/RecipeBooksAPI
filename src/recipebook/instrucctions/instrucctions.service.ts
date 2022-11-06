import { Injectable } from '@nestjs/common';
import { CreateInstrucctionDto } from './dto/create-instrucction.dto';
import { UpdateInstrucctionDto } from './dto/update-instrucction.dto';

@Injectable()
export class InstrucctionsService {
  create(createInstrucctionDto: CreateInstrucctionDto) {
    return 'This action adds a new instrucction';
  }

  findAll() {
    return `This action returns all instrucctions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrucction`;
  }

  update(id: number, updateInstrucctionDto: UpdateInstrucctionDto) {
    return `This action updates a #${id} instrucction`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrucction`;
  }
}
