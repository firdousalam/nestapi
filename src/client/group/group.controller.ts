import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { response } from 'express';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('/signup')
  async create(@Body() createGroupDto: CreateGroupDto,
@Res() response,)
  
   {
    try{

      const userEmail = await this.groupService.findUserEmail(createGroupDto.emailId);       //for fetching emailId that user provided from database if present
      const userMobile = await this.groupService.findUserMobile(createGroupDto.contact);     // for fetching mobile no that user provided from database if present
      
    
      //checking if database returns any data
      if(userEmail){
        //checking if fetched emailid matches with the provided emailid
        if(userEmail.emailId === createGroupDto.emailId ){
          return response.status(HttpStatus.NOT_ACCEPTABLE).json({
            error: 'Not Acceptable',
            message: 'EmailId already Exists',
            statusCode: 406
          })
        }
      }
      //checking if database returns any data
      if(userMobile){
        //checking if fetched mobile no matches with the provided mobile no
        if(userMobile.contact === createGroupDto.contact ){
          return response.status(HttpStatus.NOT_ACCEPTABLE).json({
            error: 'Not Acceptable',
            message: 'Mobile Number already Exists',
            statusCode: 406
          })
        }
      }



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

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const existingUser= await this.groupService.findOne(id);
      return response.status(HttpStatus.OK).json({
      message: 'User found successfully',existingUser,
    });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    
  }


  @Post('/updateGroup')
  async updateGroup(@Res() response, @Param('id') id:string, @Body() updateGroupDto:UpdateGroupDto){
    try{
      const group=await this.groupService.updateGroup(id,updateGroupDto);
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

  @Delete('deleteGroup')
  async DeleteGroup(@Res() response,@Param('id') id:string){
    try{
      const group=await this.groupService.deleteGroup(id);
      return await response.status(HttpStatus.OK).json({
        message:'user deleted succesfully',
        group,
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
