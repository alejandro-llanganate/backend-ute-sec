import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolEntity } from "./rol.entity";

@Entity('Action')
export class ActionEntity {
    
    @Column('id_action')
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name : string;

    @ManyToOne( () => RolEntity, rol => rol.actions)
    @JoinColumn({ name: 'id_rol' })
    rol : RolEntity;
}