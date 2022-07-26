import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolEntity } from "./rol.entity";

@Entity('User_Rol')
export class UserRolEntity {

    @Column({
            name: "id_user_rol",
            unique: true,
            nullable: true,
        })
    @PrimaryGeneratedColumn('uuid')
    id: string;



    @ManyToOne( () => RolEntity, rol => rol.userRols )
    @JoinColumn({ name: 'id_rol' })
    rol: RolEntity
}