import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActionEntity } from "./action.entity";
import { UserRolEntity } from "./user-rol.entity";

@Entity('Rol')
export class RolEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name : string;

    @OneToMany( () => UserRolEntity, userRol => userRol.rol)
    userRols : UserRolEntity[];

    @OneToMany( () => ActionEntity, action => action.rol )
    actions: ActionEntity[];
}