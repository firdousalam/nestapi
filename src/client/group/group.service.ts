import { Injectable } from '@nestjs/common';
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

  async fetchGroup(){
    return this.groupModel.find();
  }

  async updateGroup(data:any){
    return this.groupModel.findByIdAndUpdate(data.groupId,data.groupData,{new:true});
  }


  async deleteGroup(data:any){
    return this.groupModel.findByIdAndDelete(data.groupId);
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
}
