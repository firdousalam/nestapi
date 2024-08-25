import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class bankdetails{
    @Prop() accountNo: string;
    @Prop() accountName: string;
    @Prop() IFSC: string;
    @Prop() branchName: string;
    @Prop() UPI: string;
}

const schema = SchemaFactory.createForClass(bankdetails);
export const bankdetailsSchema = schema;