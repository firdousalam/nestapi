import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { response } from 'express';
import { STATUS_CODES } from 'http';
import { error } from 'console';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto,@Res() response) {
    
    try{
      const newInvoice = await this.invoiceService.create(createInvoiceDto);
      return response.status(HttpStatus.CREATED).json({message:'Invoices has been created successfully',newInvoice});
    }

    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error:Invoice not created',
        error:'Bad Request'
      });
    }
    
  }

  @Get('/getAllInvoice')
  async getAllInvoice(@Res() res){

    try{
      const invoice = await this.invoiceService.fetchInvoice();
      return await res.status(HttpStatus.OK).json({
        response: invoice
      });
    }

    catch(err){

      return response.status(HttpStatus.BAD_REQUEST).json({
        STATUS_CODES:400,
        message:'Error: Invoice not found!',
        error:'Bad Request'
      });
    }
  }

  @Put(':id')
  async updateInvoice(@Res() response,@Body() updateinvoicedto:UpdateInvoiceDto,@Param('id') id:string){

    try{
      const invoice = await this.invoiceService.updateInvoice(id,updateinvoicedto);
      return response.status(HttpStatus.OK).json({
        message: 'Invoice updated successfully',invoice
      });
    }

    catch(err){

      return response.status(err.status).json(err.response);

    }
  }

  @Delete(':id')
  async deleteInvoice(@Res() response,@Param('id') id:string){
    try{
      const invoice = await this.invoiceService.deleteInvoice(id);
      return await response.status(HttpStatus.OK).json({
        message: 'Invoice deleted successfully',invoice
      });
    }

    catch(err){

     return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async getInvoice(@Res() response,@Param('id') id:string){
    try{
      const existingInvoice = await this.invoiceService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Invoice found successfully',existingInvoice,
      });
    }

    catch(err){

      return response.status(err.status).json(err.response);

    }
  }
}
