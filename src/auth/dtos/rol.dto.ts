import { IsNotEmpty, IsString } from "class-validator";

export class CreateRolDTO {
    @IsNotEmpty()
    @IsString()
    name : string
}

export class UpdateRolDTO {
    @IsNotEmpty()
    @IsString()
    name : string
}