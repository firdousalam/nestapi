
import { Date, Document } from 'mongoose';
import { GroupMember } from '../schemas/common/groupMember.schema';
export interface IGroup extends Document {
  readonly createdAt: Date;
  readonly createdBy: string;
  readonly updatedAt: Date;
  readonly updatedBy: string;
  readonly fullName: string;
  readonly emailId: string;
  readonly password: string;
  readonly contact: number;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly pincode: number;
  readonly isU: boolean;
  readonly isA: boolean;
  readonly isDBA: boolean;
  readonly groupMember: GroupMember; 
  
}