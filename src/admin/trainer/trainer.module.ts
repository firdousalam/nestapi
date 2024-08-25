import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerController } from './trainer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { trainerSchema } from './schemas/trainer.schema';


@Module({
  imports:[MongooseModule.forFeature([{name: 'Trainer', schema: trainerSchema}])],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}
