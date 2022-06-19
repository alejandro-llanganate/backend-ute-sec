import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ReportService } from "../services/report.service";

@Controller('/reports')
export class ReportController{

    constructor(
        private reportService : ReportService
    ){}

    @Get('/getAllReports')
    getAllReports(){
        return this.reportService.getAllReports();
    }

    @Get('/getReportById')
    getReportById(){
        return this.reportService.getReportById();
    }

    @Post('/createReport')
    createReport(){
        return this.reportService.createReport();
    }

    @Put('/updateReport')
    updateReport(){
        return this.reportService.updateReport();
    }

    @Delete('/deleteReport')
    deleteReport(){
        return this.reportService.deleteReport();
    }
}