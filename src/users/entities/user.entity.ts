import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 40})
    nombre: string;

    @Column("varchar", { length: 50})
    apellido: string;

    @Column("varchar", { length: 50})
    email: string;

    @Column("varchar", { length: 100})
    password: string;
}