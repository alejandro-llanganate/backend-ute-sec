import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/users/services/user.service";
import { Repository } from "typeorm";
import { CreateReportDTO, UpdateReportDTO } from "../dto/report.dto";
import { ReportEntity } from "../entities/report.entity";

@Injectable()
export class ReportService {

    constructor(
        @InjectRepository(ReportEntity) private reportRepo : Repository<ReportEntity>,
        private userService : UserService
    ){}

    async getAllReports(){
        const usuarios = await this.reportRepo.find({relations: ['user']});
        const reportes = usuarios.map( element => {
            const {user, ...report} = element
            return {
                id: report.id,
                date: report.date,
                url: report.url,
                userId: user.id
            }
        })

        return reportes;
    }

    async getReportById(id : string){
        return this.reportRepo.findOne(id);
    }

    async getReportsByUserId(idUser : string){
        return this.reportRepo.find({where: {user:{id: idUser}}});
    }

    async createReport(report : CreateReportDTO){
        const usuario = await this.userService.getUserById(report.idUsuario);
        const reporte = this.reportRepo.create(report);
        if(usuario){
            reporte.user = usuario;
            return this.reportRepo.save(reporte);
        }else{
            return null;
        }
    }

    async updateReport(idReport : string, report : UpdateReportDTO){
        return 'updateReport';
    }

    async deleteReport(idReport : string){
        return 'deleteReport';
    }
}