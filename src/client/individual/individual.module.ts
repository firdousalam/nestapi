import { Module } from '@nestjs/common';
import { IndividualService } from './individual.service';
import { IndividualController } from './individual.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IndividualSchema } from './schemas/individual.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Individual', schema: IndividualSchema}])],
  controllers: [IndividualController],
  providers: [IndividualService],
})
export class IndividualModule {}
