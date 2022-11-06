import { Test, TestingModule } from '@nestjs/testing';
import { InstrucctionsService } from './instrucctions.service';

describe('InstrucctionsService', () => {
  let service: InstrucctionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstrucctionsService],
    }).compile();

    service = module.get<InstrucctionsService>(InstrucctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
