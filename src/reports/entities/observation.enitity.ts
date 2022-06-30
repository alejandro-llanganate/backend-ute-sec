import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReportEntity } from "./report.entity";

export enum Valoracion {
    ALTO = "alto",
    MEDIO = "medio",
    BAJO = "bajo",
}

@Entity('Observation')
export class ObservationEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    riskId : string;

    @Column()
    observacion: string

    @Column()
    criticidad: Valoracion;

    @ManyToOne(() => ReportEntity, report => report.observaciones)
    report :  ReportEntity
}