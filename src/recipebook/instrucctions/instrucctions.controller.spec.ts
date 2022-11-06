import { Test, TestingModule } from '@nestjs/testing';
import { InstrucctionsController } from './instrucctions.controller';
import { InstrucctionsService } from './instrucctions.service';

describe('InstrucctionsController', () => {
  let controller: InstrucctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrucctionsController],
      providers: [InstrucctionsService],
    }).compile();

    controller = module.get<InstrucctionsController>(InstrucctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
