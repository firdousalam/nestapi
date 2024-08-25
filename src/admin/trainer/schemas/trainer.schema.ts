import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { bankdetails, bankdetailsSchema } from "./bankdetails/bankdetails.schema";
import { qualification, qualificationSchema } from "./qualification/qualification.schema";

@Schema()
export class trainer{
    @Prop() createdAt: Date;
    @Prop() createdBy: string;
    @Prop() updatedAt: Date;
    @Prop() updatedBy: string;
    @Prop() trainerName: string;
    @Prop() emailId: string;
    @Prop() mobile: number;
    @Prop() profilePic: string;
    @Prop() localId: string;
    @Prop() islocalIdVerified: boolean;
    @Prop() localIdType: string;
    @Prop() address: string;
    @Prop() city: string;
    @Prop() state: string;
    @Prop() pincode: number;
    @Prop() isA: boolean;
    @Prop() isU: boolean;
    @Prop() isDBA: boolean;
    @Prop({type:bankdetailsSchema}) bankDetails: bankdetails;
    @Prop({type:qualificationSchema}) qualification: qualification;
    @Prop() localFile: string;
}

export const trainerSchema = SchemaFactory.createForClass(trainer);