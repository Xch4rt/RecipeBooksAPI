import { Module } from '@nestjs/common';
import { RecipebookService } from './recipebook.service';
import { RecipebookController } from './recipebook.controller';

@Module({
  controllers: [RecipebookController],
  providers: [RecipebookService]
})
export class RecipebookModule {}
