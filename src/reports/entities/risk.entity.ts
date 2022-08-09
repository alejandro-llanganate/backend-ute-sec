import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ObservationEntity } from "./observation.enitity";

export enum TipificacionCode {
    R2 = "R2",
    R4 = "R4",
    R5 = "R5",
    R8 = "R8",
    R9 = "R9",
}

@Entity("Risk")
export class RiskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "enum",
        enum: TipificacionCode,
    })
    tipificacion: TipificacionCode

    @Column()
    descripcion: string

    @OneToMany( () => ObservationEntity, observation => observation.risk)
    observations: ObservationEntity[]
}

