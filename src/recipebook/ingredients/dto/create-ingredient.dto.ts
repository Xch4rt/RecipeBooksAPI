import { IsNumber, IsString } from 'class-validator';
export class CreateIngredientDto {
  @IsNumber()
  recipe_id: number;
  @IsString()
  instrucction: string; // me confundi XD aqui deberia de llamarse ingredient_name
}
