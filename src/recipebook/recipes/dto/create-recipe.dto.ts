import { IsNumber, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsNumber()
  recipe_book_id: number;
  @IsNumber()
  category_id: number;
  @IsString()
  description: string;
  @IsString()
  photo: string;
}
