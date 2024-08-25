import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iinvoice } from './interfaces/invoice.interface';

@Injectable()
export class InvoiceService {
  constructor(@InjectModel('Invoice') private invoiceModel:Model<Iinvoice>) { }

  async create(createInvoiceDto: CreateInvoiceDto):Promise<Iinvoice> {
    const newInvoice = await new this.invoiceModel(createInvoiceDto);
    return newInvoice.save();
  }

  async fetchInvoice():Promise<Iinvoice[]>{
    const existingInvoice = await this.invoiceModel.find();
    return existingInvoice;
  }

  async updateInvoice(Id:string,updateinvoiceDto:UpdateInvoiceDto):Promise<Iinvoice>{
    const updatedInvoice = await this.invoiceModel.findByIdAndUpdate(Id,updateinvoiceDto,{new:true});
    return updatedInvoice;
  }

  async deleteInvoice(Id:string):Promise<Iinvoice>{
    const deletedInvoice = await this.invoiceModel.findByIdAndDelete(Id);
    return deletedInvoice;
  }

  async findOne(id: string):Promise<Iinvoice>{
    const existingInvoice = await this.invoiceModel.findById(id).exec();
    if(!existingInvoice){
      throw new NotFoundException(`Invoice #${id} not found`);
    }
    return existingInvoice;
  }
}
