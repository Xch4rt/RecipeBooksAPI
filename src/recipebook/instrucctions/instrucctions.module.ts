import { Module } from '@nestjs/common';
import { InstrucctionsService } from './instrucctions.service';
import { InstrucctionsController } from './instrucctions.controller';

@Module({
  controllers: [InstrucctionsController],
  providers: [InstrucctionsService],
})
export class InstrucctionsModule {}
