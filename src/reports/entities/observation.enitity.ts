import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReportEntity } from "./report.entity";
import { RiskEntity } from "./risk.entity";

export enum Valoracion {
    ALTO = "ALTO",
    MEDIO = "MEDIO",
    BAJO = "BAJO",
}

@Entity('Observation')
export class ObservationEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    observacion: string

    @Column()
    criticidad: Valoracion;

    @ManyToOne(() => RiskEntity, risk => risk.observations)
    @JoinColumn({name: 'id_risk'})
    risk :  RiskEntity
    
    @ManyToOne(() => ReportEntity, report => report.observaciones)
    @JoinColumn({name: 'id_report'})
    report :  ReportEntity


}