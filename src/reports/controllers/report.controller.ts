import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/reports')
export class ReportController{

    @Get('/getAllReports')
    getAllReports(){
        return 'getAllReports'
    }

    @Get('/getReportById')
    getReportById(){
        return 'getReportById'
    }

    @Post('/createReport')
    createReport(){
        return 'createReport'
    }

    @Put('/updateReport')
    updateReport(){
        return 'updateReport'
    }

    @Delete('/deleteReport')
    deleteReport(){
        return 'deleteReport'
    }
}