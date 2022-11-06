import { Test, TestingModule } from '@nestjs/testing';
import { RecipebookController } from './recipebook.controller';
import { RecipebookService } from './recipebook.service';

describe('RecipebookController', () => {
  let controller: RecipebookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipebookController],
      providers: [RecipebookService],
    }).compile();

    controller = module.get<RecipebookController>(RecipebookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
