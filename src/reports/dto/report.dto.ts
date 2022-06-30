import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ObservationEntity } from "../entities/observation.enitity";

export class CreateReportDTO {
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