import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { IndividualService } from './individual.service';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';
  
@Controller('individual')
export class IndividualController {
  constructor(private readonly individualService: IndividualService) {}

  @Post('/signup')
  async createIndividual(
    @Res() response,
    @Body() CreateIndividualDto: CreateIndividualDto,
  ) {
  try {
    // console.log(CreateIndividualDto.emailId)
    const userEmail = await this.individualService.findUserEmail(CreateIndividualDto.emailId);       //for fetching emailId that user provided from database if present
    const userMobile = await this.individualService.findUserMobile(CreateIndividualDto.mobile);     // for fetching mobile no that user provided from database if present
    console.log(userMobile.mobile);
    console.log(userEmail.emailId);
  
    //checking if database returns any data
    if(userEmail){
      //checking if fetched emailid matches with the provided emailid
      if(userEmail.emailId === CreateIndividualDto.emailId ){
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
      if(userMobile.mobile === CreateIndividualDto.mobile ){
        return response.status(HttpStatus.NOT_ACCEPTABLE).json({
          error: 'Not Acceptable',
          message: 'Mobile Number already Exists',
          statusCode: 406
        })
      }
    }
    const newIndividual = await this.individualService.createIndividual(CreateIndividualDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'Individual User has been created successfully',
      newIndividual,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: User not created!',
    error: 'Bad Request'
 });
 }
}

  @Get()
  async findAll(
    @Res() response,
  ) {
    try {
      const allUser = await this.individualService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All Individual Users fetched successfully',allUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not Found!',
        error: 'Bad Request'
      });
    }
    
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const existingUser= await this.individualService.findOne(id);
      return response.status(HttpStatus.OK).json({
      message: 'User found successfully',existingUser,
    });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    
  }

  @Put(':id')
  async update(@Res() response, @Param('id') id: string, @Body() updateIndividualDto: UpdateIndividualDto) {
    try {
      const existingUser= await this.individualService.update(id, updateIndividualDto);
      return response.status(HttpStatus.OK).json({
        message: 'User Updated successfully',existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deletedUser = await this.individualService.delete(id);
      return response.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      deletedUser,});
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
