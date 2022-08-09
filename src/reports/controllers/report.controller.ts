import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateReportDTO, UpdateReportDTO } from "../dto/report.dto";
import { ReportService } from "../services/report.service";

@ApiTags('Reportes')
@Controller('api/reports')
export class ReportController{

    constructor(
        private reportService : ReportService
    ){}

    @ApiOperation(
        {
            description: 'Método para obtener todos los reportes'
        }
    )
    @Get('/getAllReports')
    async getAllReports(){
        return await this.reportService.getAllReports();
    }

    @ApiOperation(
        {
            description: 'Método para obtener un reporte con su id'
        }
    )
    @Get('/getReportById/:id')
    getReportById(
        @Param('id') id : string
    ){
        return this.reportService.getReportById(id);
    }

    @ApiOperation(
        {
            description: 'Método para crear reporte'
        }
    )
    @Post('/createReport')
    async createReport(
        @Body() report : CreateReportDTO
    ){
        console.log('repor --->>>>>> ', report)
        return await this.reportService.createReport(report);
    }
    
    @ApiOperation(
        {
            description: 'Método para crear reporte'
        }
    )
    @Put('/updateReport/:id')
    async updateReport(
        @Param('id') id : string, @Body() report : UpdateReportDTO
    ){
        return this.reportService.updateReport(id, report);
    }

    @Delete('/deleteReport/:id')
    deleteReport(
        @Param('id') id : string
    ){
        return this.reportService.deleteReport(id);
    }
}