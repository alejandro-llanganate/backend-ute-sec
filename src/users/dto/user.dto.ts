import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RolType } from "src/auth/entities/rol.enum";


export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name : string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly rol : RolType
}

export class UpdateUserDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name : string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;
}

export class UpdateUserPasswordDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;    
}