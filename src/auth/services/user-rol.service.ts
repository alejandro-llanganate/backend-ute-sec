import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserRolDTO, UpdateUserRolDTO } from "../dtos/user-rol.dto";
import { UserRolEntity } from "../entities/user-rol.entity";

@Injectable()
export class UserRolService {

    constructor(
        @InjectRepository(UserRolEntity) userRolRepository : Repository<UserRolEntity>
    ){}

    async getAllUserRols(){}

    async getAllUserRolsByUserId(idUser : string){}

    async getAllUserRolsByRolId(idRol : string){}

    async createUserRol( userRol : CreateUserRolDTO){}

    async updateUserRol(idUserRol : string, userRol : UpdateUserRolDTO ){}

    async deleteUserRol(idAction : string){}

}