import { Date,Document } from "mongoose";
import { bankdetails } from "../schemas/bankdetails/bankdetails.schema";
import { qualification } from "../schemas/qualification/qualification.schema";
export interface Itrainer extends Document{
    readonly createdAt: Date;
    readonly createdBy: string;
    readonly updatedBy: string;
    readonly updatedAt: Date;
    readonly trainerName: string;
    readonly emailId: string;
    readonly mobile: number;
    readonly profilePic: string;
    readonly localId: string;
    readonly islocalIdVerified: boolean;
    readonly LocalIdType: string;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly pincode: number;
    readonly isA: boolean;
    readonly isU: boolean;
    readonly isDBA: boolean;
    readonly localIdFile: string;
    readonly bankdetails: bankdetails;
    readonly qualification: qualification;
}