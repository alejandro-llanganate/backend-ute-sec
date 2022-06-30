import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateActionDTO } from "../dtos/action.dto";
import { ActionEntity } from "../entities/action.entity";


@Injectable()
export class ActionService {
    
    constructor(
        @InjectRepository(ActionEntity) actionRepository : Repository<ActionEntity>
    ){}

    async getAllActions(){}

    async getActionByActionId(idAction : string){}

    async getAllActionsByRolId(idRol : string){}

    async createAction(idRol : string, action : CreateActionDTO){}

    async updateAction(idAction : string, action : CreateActionDTO){}

    async deleteAction(idAction : string){}
}