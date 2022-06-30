import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { Valoracion } from "../entities/observation.enitity";

export class CreateObservationDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    riskId : string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    observacion: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    criticidad: Valoracion

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idReport : string
}


export class UpdateObservationDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    riskId : string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    observacion: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    criticidad: Valoracion

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idReport : string
}