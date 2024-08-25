import { Date, Document } from 'mongoose';
export interface IIndividual extends Document {
  readonly createdAt: Date;
  readonly createdBy: string;
  readonly updatedAt: Date;
  readonly updatedBy: string;
  readonly fullName: string;
  readonly emailId: string;
  readonly mobile: number;
  readonly password: string;
  readonly dob: Date;
  readonly height: number;
  readonly weight: number;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly pincode: number;
  readonly isU: boolean;
  readonly isA: boolean;
  readonly isDBA: boolean;
}