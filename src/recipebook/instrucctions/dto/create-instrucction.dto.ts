import { IsString, IsNumber } from 'class-validator';
export class CreateInstrucctionDto {
  @IsNumber()
  recipe_id: number;
  @IsString()
  ingredient_name: string;
}
