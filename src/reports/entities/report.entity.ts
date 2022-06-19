import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ReportEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fecha: Date

    @Column()
    url: string
}