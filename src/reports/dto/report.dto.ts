import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ObservationEntity } from "../entities/observation.enitity";

export class CreateReportDTO {
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    @Type(() => Date)
    public date : Date

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public url : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public idUsuario : string
}

export class UpdateReportDTO {
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    date : Date

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    url : string

    @IsNotEmpty()
    @ApiProperty()
    observations : ObservationEntity
}