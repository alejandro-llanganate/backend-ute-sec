import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRolDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}

export class UpdateRolDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}