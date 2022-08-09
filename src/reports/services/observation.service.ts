import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateObservationDTO, UpdateObservationDTO } from "../dto/observation.dto";
import { ObservationEntity } from "../entities/observation.enitity";
import { ReportService } from "./report.service";
import { RiskService } from "./risk.service";

@Injectable()
export class ObservationService {

    constructor(
        @InjectRepository(ObservationEntity) private observacionRepo : Repository<ObservationEntity>,
        private riskService : RiskService,
        private reportService : ReportService,
    ){}

    async getAllObservations(){
        return this.observacionRepo.find({relations: [ 'risk']})
    }

    async getObservationById(idObservation : string){
        return 'getObservationById';
    }

    async getObservationByReport(idReport : string){
        return this.observacionRepo.find(
            {
                where: 
                {
                    report: {
                        id: idReport
                    }
                }
            }
            )
    }

    async createObservation(observation : CreateObservationDTO){
        const risk = await this.riskService.getRiskByTag(observation.riskTipificacion);
        const report = await this.reportService.getReportById(observation.idReport);
        if(risk  && report){
            const observacion = this.observacionRepo.create(observation);
            observacion.risk = risk;
            observacion.report = report;
            return this.observacionRepo.save(observacion);
        }else{
            return {}
        }
    }

    async updateObservation(idObservation : string, risk : UpdateObservationDTO){
        return 'updateObservation';
    }

    async deleteObservation(idObservation : string){
        return 'deleteObservation';
    }
}