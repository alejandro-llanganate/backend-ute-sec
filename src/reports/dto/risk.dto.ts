import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";
import { TipificacionCode } from "../entities/risk.entity";


export class CreateRiskDTO {
    @IsNotEmpty()
    @ApiProperty()
    tipificacion: TipificacionCode

    @Column()
    @ApiProperty()
    descripcion : string
}

export class UpdateRiskDTO {
    @IsNotEmpty()
    @ApiProperty()
    tipificacion: TipificacionCode

    @Column()
    @ApiProperty()
    descripcion : string
}