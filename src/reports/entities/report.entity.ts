import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObservationEntity } from "./observation.enitity";

@Entity('Report')
export class ReportEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fecha: Date;

    @Column()
    url: string

    @OneToMany( () => ObservationEntity, observation => observation.report)
    observaciones: ObservationEntity[]
}