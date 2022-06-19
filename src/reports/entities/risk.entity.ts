import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObservationModel } from "./observation.model";

export enum TipificacionCode {
    R2 = "R2",
    R4 = "R4",
    R5 = "R5",
    R8 = "R8",
    R9 = "R9",
}

@Entity()
export class RiskEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: TipificacionCode,
    })
    tipificacion: TipificacionCode

    @Column()
    descripcion: string

    @Column()
    observaciones: ObservationModel[]
}

