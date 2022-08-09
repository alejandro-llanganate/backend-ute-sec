import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";


export class CreateScanDto {
    @IsUrl()
    @IsNotEmpty()
    @ApiProperty()
    public url : string;
}