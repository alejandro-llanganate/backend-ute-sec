import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRolDTO, UpdateRolDTO } from "../dtos/rol.dto";
import { RolEntity } from "../entities/rol.entity";


@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRepo : Repository<RolEntity>
    ){}

    async createRol(rol : CreateRolDTO) : Promise<any>{
        return this.rolRepo.save(rol);
    }

    async updateRol(id: string, rol : UpdateRolDTO ) : Promise<RolEntity> {
        const rolToUpdate = await this.rolRepo.findOne(id);
        const _errors = { type: 'El rol no existe' };
        if(!rolToUpdate) {
            throw new HttpException({ message: 'ERROR' , _errors}, HttpStatus.BAD_REQUEST);
        }else{
            return this.rolRepo.merge(rolToUpdate,rol);
        }
    }

}