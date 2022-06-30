import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserRolDTO {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idUser : string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idRol : string;
}

export class UpdateUserRolDTO {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idUser : string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idRol : string;
}