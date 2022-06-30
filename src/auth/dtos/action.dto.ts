import { IsNotEmpty, IsString } from "class-validator";

export class CreateActionDTO {
    @IsNotEmpty()
    @IsString()
    name : string
}

export class UpdateActionDTO {
    @IsNotEmpty()
    @IsString()
    name : string
}