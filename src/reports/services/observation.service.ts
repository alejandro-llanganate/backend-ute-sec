import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateObservationDTO, UpdateObservationDTO } from "../dto/observation.dto";
import { ObservationEntity } from "../entities/observation.enitity";

@Injectable()
export class ObservationService {

    constructor(
        @InjectRepository(ObservationEntity) riskRepo : Repository<ObservationEntity>
    ){}

    async getAllObservations(){
        return 'getAllObservations';
    }

    async getObservationById(idObservation : string){
        return 'getObservationById';
    }

    async createObservation(risk : CreateObservationDTO){
        return 'createObservation';
    }

    async updateObservation(idObservation : string, risk : UpdateObservationDTO){
        return 'updateObservation';
    }

    async deleteObservation(idObservation : string){
        return 'deleteObservation';
    }
}