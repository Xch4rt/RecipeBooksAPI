import { Test, TestingModule } from '@nestjs/testing';
import { RecipebookService } from './recipebook.service';

describe('RecipebookService', () => {
  let service: RecipebookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipebookService],
    }).compile();

    service = module.get<RecipebookService>(RecipebookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
