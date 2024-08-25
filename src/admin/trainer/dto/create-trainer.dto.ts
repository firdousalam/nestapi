import { IsNotEmpty,IsNumber,IsString,MaxLength, IsDate, IsBoolean} from "class-validator";

export class CreateTrainerDto {
    @IsNotEmpty()
    @IsDate()
    readonly createdAt: Date;

    @IsString()
    @IsNotEmpty()
    readonly createdBy: string;

    @IsDate()
    @IsNotEmpty()
    readonly updatedAt: Date;

    @IsString()
    @IsNotEmpty()
    readonly updatedBy: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    readonly trainerName: string;

    @IsNotEmpty()
    @IsString()
    readonly emailId: string;

    @IsNotEmpty()
    @IsNumber()
    @MaxLength(10)
    readonly mobile: number;

    readonly profilePic: string;

    @IsNotEmpty()
    @IsString()
    readonly localId: string;

    @IsNotEmpty()
    @IsString()
    readonly localIdType: string;

    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @IsNotEmpty()
    @IsString()
    readonly city: string;

    @IsNotEmpty()
    @IsString()
    readonly state: string;

    @IsNotEmpty()
    @IsNumber()
    readonly pincode: number;

    @IsNotEmpty()
    @IsString()
    readonly localIdFile: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly islocalIdVerified: boolean;


}
