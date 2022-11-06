import { PartialType } from '@nestjs/swagger';
import { CreateInstrucctionDto } from './create-instrucction.dto';

export class UpdateInstrucctionDto extends PartialType(CreateInstrucctionDto) {}
