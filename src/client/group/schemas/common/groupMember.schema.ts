import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class GroupMember{
    @Prop() groupId:string;
   
    @Prop() fullName: string;
    @Prop() emailId: string;
    @Prop() contact: number;
    @Prop() emailverifiedstatus: boolean;
    
    @Prop() isU: boolean;
    @Prop() isA: boolean;
    @Prop() isDBA: boolean;
    
}
export const GroupMemberSchema= SchemaFactory.createForClass(GroupMember);