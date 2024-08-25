import { IsNotEmpty,IsNumber,IsString,IsDate,IsBoolean } from "class-validator";

export class CreateInvoiceDto {
    @IsNotEmpty()    
    @IsString()
    readonly clientId: string;

    @IsNotEmpty()
    @IsString()
    readonly invoiceNo: string;                                    

    @IsNotEmpty()
    @IsDate()
    readonly invoiceDate: Date;

    @IsNotEmpty()
    @IsDate()
    readonly duaDate: Date;

    @IsNotEmpty()
    @IsString()
    readonly productName: string;

    @IsNotEmpty()
    @IsString()
    readonly noOfSession: string;

    @IsNotEmpty()
    @IsNumber()
    readonly unitPrice: number;

    @IsNotEmpty()
    @IsNumber()
    readonly totalPrice: number;

    @IsNotEmpty()
    @IsDate()
    readonly createdAt: Date;

    @IsNotEmpty()
    @IsString()
    readonly createdBy: string;

    @IsNotEmpty()
    @IsDate()
    readonly updatedAt: Date;

    @IsNotEmpty()
    @IsString()
    readonly updatedBy: string;

    
}
