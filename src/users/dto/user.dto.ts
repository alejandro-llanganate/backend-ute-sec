import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    readonly name : string;

    @IsString()
    @IsNotEmpty()
    readonly lastname: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}

export class UpdateUserDTO {

    @IsString()
    @IsNotEmpty()
    readonly name : string;

    @IsString()
    @IsNotEmpty()
    readonly lastname: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}

export class UpdateUserPasswordDTO {
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;    
}