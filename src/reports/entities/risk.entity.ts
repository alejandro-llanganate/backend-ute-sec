import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}

