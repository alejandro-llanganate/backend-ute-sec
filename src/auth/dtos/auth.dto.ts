import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDTO {

    @IsNotEmpty()
    @IsString()
    email : string;


    @IsNotEmpty()
    @IsString()
    password: string;
}
