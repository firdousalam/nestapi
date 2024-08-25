import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema()
export class CorporateMembers{
    @Prop()
    fullName: string;

    @Prop()
    corporateId: string;

    @Prop()
    emailId: string;

    @Prop()
    password: string;

    @Prop()
    dob: Date;

    @Prop()
    isA: boolean;

    @Prop()
    isU: boolean;

    @Prop()
    isDBA: boolean
}
export const CorporateMemberSchema = SchemaFactory.createForClass(CorporateMembers);