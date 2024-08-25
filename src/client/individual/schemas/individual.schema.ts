import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Individual{
    @Prop() createdAt: Date;
    @Prop() createdBy: string;
    @Prop() updatedAt: Date;
    @Prop() updatedBy: string;
    @Prop() fullName: string;
    @Prop() emailId: string;
    @Prop() mobile: number;
    @Prop() password: string;
    @Prop() dob: Date;
    @Prop() height: number;
    @Prop() weight: number;
    @Prop() address: string;
    @Prop() city: string;
    @Prop() state: string;
    @Prop() pincode: number;
    @Prop() isU: boolean;
    @Prop() isA: boolean;
    @Prop() isDBA: boolean;
}
export const IndividualSchema = SchemaFactory.createForClass(Individual);