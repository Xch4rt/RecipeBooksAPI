import { PartialType } from '@nestjs/swagger';
import { CreateRecipebookDto } from './create-recipebook.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateRecipebookDto extends PartialType(CreateRecipebookDto) {
  @IsNumber()
  user_id: number;
  @IsString()
  recipe_book_name: string;
}
