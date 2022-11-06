import { PartialType } from '@nestjs/swagger';
import { CreateRecipebookDto } from './create-recipebook.dto';

export class UpdateRecipebookDto extends PartialType(CreateRecipebookDto) {}
