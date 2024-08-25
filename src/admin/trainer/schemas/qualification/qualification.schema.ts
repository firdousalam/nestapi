import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class qualification{
    @Prop() certificate: string;
    @Prop() experience: string;
    @Prop() marks: number;
    @Prop() highestQualification: string;
}

const schema = SchemaFactory.createForClass(qualification);
export const qualificationSchema = schema;