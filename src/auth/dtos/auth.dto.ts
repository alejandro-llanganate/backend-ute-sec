import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    email : string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string;
}
