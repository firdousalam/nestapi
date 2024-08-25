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
    if(!existingUser || existingUser.length == 0){
      throw new NotFoundException('No trainers found');
    }
    return existingUser;
  }

  async updatetrainer(Id:string,updateTrainerDto:UpdateTrainerDto):Promise<Itrainer>{
    const updatedTrainer = await  this.trainerModel.findByIdAndUpdate(Id,updateTrainerDto,{new: true});
    if(!updatedTrainer){
      throw new NotFoundException(`Trainer #${Id} not found`);
    }
    return updatedTrainer;
  }

  async deletetrainer(Id:string):Promise<Itrainer>{
    const deletedTrainer = await this.trainerModel.findByIdAndDelete(Id);
    if(!deletedTrainer){
      throw new NotFoundException(`Trainer #${Id} not found`);
    }
    return deletedTrainer;

  }

  async findOne(id: string):Promise<Itrainer>{
    const existingTrainer = await this.trainerModel.findById(id).exec();
    if(!existingTrainer){
      throw new NotFoundException(`Trainer #${id} not found`);
    }
    return existingTrainer;
  }

  async findUserEmail(emailId: string){
    return await this.trainerModel.findOne({emailId},{_id: false, emailId: true})
  }
  async findUserMobile(mobile: number){
    return await this.trainerModel.findOne({mobile},{_id: false, mobile: true})
  }
}
