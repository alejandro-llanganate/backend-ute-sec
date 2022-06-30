import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateActionDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}

export class UpdateActionDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}