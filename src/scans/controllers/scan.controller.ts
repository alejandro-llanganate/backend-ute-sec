import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/scans')
export class ScanController{

    @Get('/getAllScans')
    getAllScans(){
        return 'getAllScans'
    }

    @Get('/getScanById')
    getScanById(){
        return 'getScanById'
    }

    @Post('/createScan')
    createScan(){
        return 'createScan'
    }

    @Put('/updateScan')
    updateScan(){
        return 'updateScan'
    }

    @Delete('/deleteScan')
    deleteScan(){
        return 'deleteScan'
    }
}