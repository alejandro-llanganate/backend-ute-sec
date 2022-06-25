import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Report')
export class ReportEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fecha: Date

    @Column()
    url: string
}