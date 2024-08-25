import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itrainer } from './interfaces/trainer.interface';

@Injectable()
export class TrainerService {
  constructor(@InjectModel('Trainer') private trainerModel:Model<Itrainer>) { }

  async create(createTrainerDto: CreateTrainerDto):Promise<Itrainer> {
    const newtrainer = await new this.trainerModel(createTrainerDto);
    return newtrainer.save();
  }

  async fetchtrainer():Promise<Itrainer[]>{
    const existingUser= await this.trainerModel.find();
    return existingUser;
  }

  async updatetrainer(Id:string,updateTrainerDto:UpdateTrainerDto):Promise<Itrainer>{
    const updatedTrainer = await  this.trainerModel.findByIdAndUpdate(Id,updateTrainerDto,{new: true});
    return updatedTrainer;
  }

  async deletetrainer(Id:string):Promise<Itrainer>{
    const deletedTrainer = await this.trainerModel.findByIdAndDelete(Id);
    return deletedTrainer;

  }

  async findOne(id: string):Promise<Itrainer>{
    const existingTrainer = await this.trainerModel.findById(id).exec();
    if(!existingTrainer){
      throw new NotFoundException(`Trainer #${id} not found`);
    }
    return existingTrainer;
  }
}
