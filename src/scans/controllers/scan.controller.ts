import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { ScanService } from "../services/scan.service";

@ApiTags('Escaneo')
@Controller('/scan')
export class ScanController{

    constructor(
        private scanService : ScanService
    ){}

    @ApiProperty(
        {
            description: 'Método para escanear una página web.'
        }
    )
    @Get('/scanWebPage/:url')
    async scanWebPage(
        @Param('url') url : string
    ){
        return this.scanService.createScan();
    }
}