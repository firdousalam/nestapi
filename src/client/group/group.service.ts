import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGroup } from './interfaces/group.interface';

@Injectable()
export class GroupService {
  constructor(@InjectModel('Group') private groupModel:Model<IGroup>) { }
  
  async create(createGroupDto: CreateGroupDto):Promise<IGroup> {
    
    const newGroup = await new this.groupModel(createGroupDto);
    return newGroup.save();
  }

  async fetchGroup(): Promise<IGroup[]> {
    const users = await this.groupModel.find();
    if (!users || users.length == 0) {
      throw new NotFoundException('User data not found!');
  }
    return users;
  }

  async findOne(id: string): Promise<IGroup> {
    const existingUser= await this.groupModel.findById(id).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${id} not found`);
     }
     return existingUser;
  }



  async updateGroup(id: string, updateGroupDto: UpdateGroupDto): Promise<IGroup> {
    const existingUser = await this.groupModel.findByIdAndUpdate(id, updateGroupDto, { new: true });
   if (!existingUser) {
     throw new NotFoundException(`Student #${id} not found`);
   }
   return existingUser;
}

async deleteGroup(id: string): Promise<IGroup> {
  const deletedUser = await this.groupModel.findByIdAndDelete(id);
 if (!deletedUser) {
   throw new NotFoundException(`Student #${id} not found`);
 }
 return deletedUser;
}

 async findUserEmail(emailId: string){
     return await this.groupModel.findOne({emailId},{_id: false, emailId: true})
  }
 async findUserMobile(contact: number){
    return await this.groupModel.findOne({contact},{_id: false, contact: true})
  }
}


  // findAll() {
  //   return `This action returns all group`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} group`;
  // }

  // update(id: number, updateGroupDto: UpdateGroupDto) {
  //   return `This action updates a #${id} group`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} group`;
  // }

