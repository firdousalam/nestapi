import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IIndividual } from './interfaces/individual.interface';

@Injectable()
export class IndividualService {
  constructor(@InjectModel('Individual') private individualModel:Model<IIndividual>) { }
  async createIndividual(CreateIndividualDto: CreateIndividualDto): Promise<IIndividual> {
     const newIndividual = await new this.individualModel(CreateIndividualDto);
     return newIndividual.save();
  }

  async findAll(): Promise<IIndividual[]> {
    const users = await this.individualModel.find();
    if (!users || users.length == 0) {
      throw new NotFoundException('User data not found!');
  }
    return users;
  }

  async findOne(id: string): Promise<IIndividual> {
    const existingUser= await this.individualModel.findById(id).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${id} not found`);
     }
     return existingUser;
  }

  async update(id: string, updateIndividualDto: UpdateIndividualDto): Promise<IIndividual> {
    const existingUser = await this.individualModel.findByIdAndUpdate(id, updateIndividualDto, { new: true });
   if (!existingUser) {
     throw new NotFoundException(`Student #${id} not found`);
   }
   return existingUser;
}

async delete(id: string): Promise<IIndividual> {
  const deletedUser = await this.individualModel.findByIdAndDelete(id);
 if (!deletedUser) {
   throw new NotFoundException(`Student #${id} not found`);
 }
 return deletedUser;
}

 async findUserEmail(emailId: string){
     return await this.individualModel.findOne({emailId},{_id: false, emailId: true})
  }
 async findUserMobile(mobile: number){
    return await this.individualModel.findOne({mobile},{_id: false, mobile: true})
  }
}
