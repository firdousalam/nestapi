import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { response } from 'express';
import { STATUS_CODES } from 'http';
import { error } from 'console';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Post()
  async create(@Body() createTrainerDto: CreateTrainerDto,@Res() response) {

    try{
      const newtrainer = await this.trainerService.create(createTrainerDto);
      return response.status(HttpStatus.CREATED).json({message:'Trainer has been created successfully',newtrainer});
    }
    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error:Group not created',
        error:'Bad Request'
      });
    }

  }

  @Get('/getAlltrainer')
  async getAlltrainer(@Res() res){
    try{
      const trainer=await this.trainerService.fetchtrainer();
      return await res.status(HttpStatus.OK).json({
        response: trainer
      });
    }
    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error: Trainer not found!',
        error:'Bad Request'
      });
    }
  }

  @Put(':id')
  async updateTrainer(@Res() response,@Body() updateTrainerDto:UpdateTrainerDto,@Param('id') id:string){

    try{
      const trainer = await this.trainerService.updatetrainer(id, updateTrainerDto);
      return await response.status(HttpStatus.OK).json({
        response: trainer
      });
    }

    catch(err){

      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error: Trainer is not updated!',
        error:'Bad Request'
      });
    }
  }

  @Delete(':id')
  async deleteTrainer(@Res() response,@Param('id') id:string){
    try{
      const trainer = await this.trainerService.deletetrainer(id);
      return await response.status(HttpStatus.OK).json({
        response: trainer
      });
    }

    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error: Trainer is not deleted!',
        error:'Bad Request'
      });
    }
  }

  @Get(':id')
  async getTrainer(@Res() response,@Param('id') id:string){
    try{
      const existingTrainer= await this.trainerService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Trainer found successfully',existingTrainer,
      });
    }

    catch(err){

      return response.status(err.status).json(err.response);

    }
  }
}
