import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ScanService } from "../services/scan.service";

@Controller('/scans')
export class ScanController{

    constructor(
        private scanService : ScanService
    ){}

    @Get('/getAllScans')
    getAllScans(){
        return this.scanService.getAllScans();
    }

    @Get('/getScanById')
    getScanById(){
        return this.scanService.getScanById();
    }

    @Post('/createScan')
    createScan(){
        return this.scanService.createScan();
    }

    @Put('/updateScan')
    updateScan(){
        return this.scanService.updateScan();
    }

    @Delete('/deleteScan')
    deleteScan(){
        return this.scanService.deleteScan();
    }
}