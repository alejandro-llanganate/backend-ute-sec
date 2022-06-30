import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReportDTO, UpdateReportDTO } from "../dto/report.dto";
import { ReportEntity } from "../entities/report.entity";

@Injectable()
export class ReportService {

    constructor(
        @InjectRepository(ReportEntity) reportRepo : Repository<ReportEntity>
    ){}

    async getAllReports(){
        return 'getAllReports';
    }

    async getReportById(idReport : string){
        return 'getReportById';
    }

    async createReport(report : CreateReportDTO){
        return 'createReport';
    }

    async updateReport(idReport : string, report : UpdateReportDTO){
        return 'updateReport';
    }

    async deleteReport(idReport : string){
        return 'deleteReport';
    }
}