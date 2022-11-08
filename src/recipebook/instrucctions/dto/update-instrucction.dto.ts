import { PartialType } from '@nestjs/swagger';
import { CreateInstrucctionDto } from './create-instrucction.dto';
import { IsString, IsNumber } from 'class-validator';
export class UpdateInstrucctionDto extends PartialType(CreateInstrucctionDto) {
  @IsNumber()
  recipe_id: number;
  @IsString()
  ingredient_name: string;
}
