import { UserRolEntity } from "src/auth/entities/user-rol.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 40})
    name: string;

    @Column("varchar", { length: 50})
    lastname: string;

    @Column("varchar", { length: 50})
    email: string;

    @Column("varchar", { length: 100})
    password: string;


    @OneToMany( () => UserRolEntity, (userRols) => userRols.user)
    userRols: UserEntity[];
}