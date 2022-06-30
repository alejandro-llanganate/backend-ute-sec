import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRiskDTO, UpdateRiskDTO } from "../dto/risk.dto";
import { RiskEntity } from "../entities/risk.entity";

@Injectable()
export class RiskService {

    constructor(
        @InjectRepository(RiskEntity) riskRepo : Repository<RiskEntity>
    ){}

    async getAllRisks(){
        return 'getAllRisks';
    }

    async getRiskById(idRisk : string){
        return 'getRiskById';
    }

    async createRisk(risk : CreateRiskDTO){
        return 'createRisk';
    }

    async updateRisk(idRisk : string, risk : UpdateRiskDTO){
        return 'updateRisk';
    }

    async deleteRisk(idRisk : string){
        return 'deleteRisk';
    }
}