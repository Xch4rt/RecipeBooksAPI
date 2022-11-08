import { IsNumber, IsString } from 'class-validator';

export class CreateRecipebookDto {
  @IsNumber()
  user_id: number;
  @IsString()
  recipe_book_name: string;
}
