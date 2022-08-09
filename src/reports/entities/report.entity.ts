import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObservationEntity } from "./observation.enitity";

@Entity('Report')
export class ReportEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    url: string

    @OneToMany( () => ObservationEntity, observation => observation.report)
    observaciones: ObservationEntity[]

    @ManyToOne( () => UserEntity, user => user.reports)
    @JoinColumn({name: 'id_user'})
    user : UserEntity;

}