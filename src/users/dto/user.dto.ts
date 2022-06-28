import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    readonly nombre : string;

    @IsString()
    @IsNotEmpty()
    readonly apellido: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}