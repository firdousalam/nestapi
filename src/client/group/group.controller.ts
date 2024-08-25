import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { response } from 'express';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto,
@Res() response,)
  
   {
    try{
      const newGroup =
      await this.groupService.create(createGroupDto);
      
      return response.status(HttpStatus.CREATED).json({message: 'Group has been created succesfully',newGroup});
    }
    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Group not created!',
        error: 'Bad Request'
     });
    }
    // return this.groupService.create(createGroupDto);
  }

  // @Get()
  // findAll() {
  //   return this.groupService.findAll();
  // }

  @Get('/gettAllGroup')
  async getAllGroup(@Res() res)
  {
    try{
      const group=await this.groupService.fetchGroup();
      return await res.status(HttpStatus.OK).json({
        responce: group
      });
    }
   
    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Groupmember not found!',
        error: 'Bad Request'
     });
    }
  
  }


  @Post('/updateGroup')
  async updateGroup(@Res() response, @Body() data:any){
    try{
      const group=await this.groupService.updateGroup(data);
      return await response.status(HttpStatus.OK).json({
        response:group
      });
    }

    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Groupmember not updated!',
        error: 'Bad Request'
     });
    }
   
  }

  @Post('deleteGroup')
  async DeleteGroup(@Res() response,@Body() data:any){
    try{
      const group=await this.groupService.deleteGroup(data);
      return await response.status(HttpStatus.OK).json({
        response:group
      });
    }

    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Groupmember not deleted!',
        error: 'Bad Request'
     });
    }
  
  }
  

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.groupService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
  //   return this.groupService.update(+id, updateGroupDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.groupService.remove(+id);
  // }
}
