import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CorporateMembers, CorporateMemberSchema } from "./corporateMembers.schema";

@Schema()
export class Corporate{
    @Prop({required: true, default: Date.now()}) createdAt: Date;
    @Prop() createdBy: string;
    @Prop() updatedAt: Date;
    @Prop() updatedBy: string;
    @Prop() corporateName: string;
    @Prop() emailId: string;
    @Prop() mobile: number;
    @Prop() password: string;
    @Prop() CIN: string;
    @Prop() GST: string;
    @Prop() address: string;
    @Prop() city: string;
    @Prop() state: string;
    @Prop() pincode: number;
    @Prop() isU: boolean;
    @Prop() isA: boolean;
    @Prop() isDBA: boolean;
    @Prop({type: [CorporateMemberSchema]}) corporateMembers: CorporateMembers[];
}
export const CorporateSchema = SchemaFactory.createForClass(Corporate);