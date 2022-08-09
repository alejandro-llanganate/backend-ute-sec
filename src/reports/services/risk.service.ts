import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRiskDTO, UpdateRiskDTO } from "../dto/risk.dto";
import { RiskEntity, TipificacionCode } from "../entities/risk.entity";

@Injectable()
export class RiskService {

    constructor(
        @InjectRepository(RiskEntity) private riskRepo : Repository<RiskEntity>
    ){}

    async getAllRisks(){
        return this.riskRepo.find();
    }

    async getRiskById(idRisk : string){
        return this.riskRepo.findOne(idRisk);
    }

    async getRiskByTag(tag : TipificacionCode){
        return await this.riskRepo.findOne({where: {tipificacion: tag}})
    }

    async createRisk(risk : CreateRiskDTO){
        return this.riskRepo.save(risk);
    }

    async deleteRisk(idRisk : string){
        return this.riskRepo.delete(idRisk);
    }
}