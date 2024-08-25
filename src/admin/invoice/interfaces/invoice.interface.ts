import { Date,Document } from "mongoose";

export interface Iinvoice extends Document{
    readonly clientId: string;
    readonly invoiceNo: string;
    readonly invoiceDate: string;
    readonly dueDate: Date;
    readonly productName: string;
    readonly noOfSession: string;
    readonly unitPrice: number;
    readonly totalPrice: number;
    readonly createdAt: Date;
    readonly createdBy: string;
    readonly updatedAt: Date;
    readonly updatedBy: string;
    readonly isA: boolean;
    readonly isDBA: boolean;
    readonly isU: boolean;
    readonly isPaid: boolean;
}