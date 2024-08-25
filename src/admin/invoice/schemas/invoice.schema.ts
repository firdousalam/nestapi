import { Prop,SchemaFactory,Schema } from "@nestjs/mongoose";


@Schema()
export class invoice{
    @Prop() clientId: string;
    @Prop() invoiceNo: string;
    @Prop() invoiceDate: Date;
    @Prop() dueDate: Date;
    @Prop() productName: string;
    @Prop() noOfSession: string;
    @Prop() unitPrice: number;
    @Prop() totalPrice: number;
    @Prop({default: Date.now()}) createdAt: Date;
    @Prop() createdBy: string;
    @Prop({default: Date.now()}) updatedAt: Date;
    @Prop() updatedBy: string;
    @Prop({default: true}) isA: boolean;
    @Prop({default: true}) isDBA: boolean;
    @Prop({default: true}) isU: boolean;
    @Prop() isPaid: boolean;

}

export const invoiceSchema = SchemaFactory.createForClass(invoice);