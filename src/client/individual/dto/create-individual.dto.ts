import { IsBoolean, isDate, IsDate, isNotEmpty, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateIndividualDto {
    @IsDate()
    @IsNotEmpty()
    readonly createdAt: Date;

    @IsString()
    @IsNotEmpty()
    readonly createdBy: string;

    @IsString()
    // @IsNotEmpty()
    readonly updatedBy: string;

    @IsDate()
    // @IsNotEmpty()
    readonly updatedAt: Date;

    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    readonly fullname: string;

    @IsNumber()
    @MaxLength(10)
    @IsNotEmpty()
    readonly mobile: number;
    
    @IsString()
    @IsNotEmpty()
    readonly emailId: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly password: string;

    @IsDate()
    @IsNotEmpty()
    readonly dob: Date

    @IsNumber()
    @IsNotEmpty()
    readonly weight: number

    @IsNumber()
    @IsNotEmpty()
    readonly height: number

    @IsString()
    // @IsNotEmpty()
    readonly address: string;

    @IsString()
    // @IsNotEmpty()
    readonly city: string;

    @IsString()
    // @IsNotEmpty()
    readonly state: string;

    @IsNumber()
    // @IsNotEmpty()
    @MaxLength(6)
    readonly pincode: number;

    @IsBoolean()
    // @IsNotEmpty()
    readonly isU: boolean;

    @IsBoolean()
    // @IsNotEmpty()
    readonly isA: boolean;

    @IsBoolean()
    // @IsNotEmpty()
    readonly isDBA: boolean;

}
