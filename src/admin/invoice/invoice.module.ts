import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { invoiceSchema } from './schemas/invoice.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Invoice', schema: invoiceSchema}])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
