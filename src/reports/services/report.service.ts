import { Injectable } from "@nestjs/common";


@Injectable()
export class ReportService {
    getAllReports(){
        return 'getAllReports';
    }

    getReportById(){
        return 'getReportById';
    }

    createReport(){
        return 'createReport';
    }

    updateReport(){
        return 'updateReport';
    }

    deleteReport(){
        return 'deleteReport';
    }
}