
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { GroupMember, GroupMemberSchema } from "./common/groupMember.schema";
// import { group } from "console";
@Schema()
export class Group{
    @Prop({ default: Date.now}) createdAt:Date;
    @Prop() createdBy: string;
    @Prop({ default: Date.now}) updatedAt: Date;
    @Prop() updatedBy: string;
    @Prop() fullName: string;
    @Prop() emailId: string;
    @Prop() contact: number;
    @Prop() password: string;
    @Prop() address: string;
    @Prop() city: string;
    @Prop() state: string;
    @Prop() pincode: number;
    @Prop() isU: boolean;
    @Prop() isA: boolean;
    @Prop() isDBA: boolean;
    @Prop({ type: GroupMemberSchema, required: true}) groupMember: GroupMember;
    
}
export const GroupSchema= SchemaFactory.createForClass(Group);