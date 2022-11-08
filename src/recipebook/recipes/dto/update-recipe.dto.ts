import { PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
  @IsNumber()
  recipe_book_id: number;
  @IsNumber()
  category_id: number;
  @IsString()
  description: string;
  @IsString()
  photo: string;
}
