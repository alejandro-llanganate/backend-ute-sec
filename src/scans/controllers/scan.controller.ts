import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiProperty, ApiTags } from "@nestjs/swagger";
import { CreateScanDto } from "../dto/create-scan.dto";
import { ScanService } from "../services/scan.service";

@ApiBearerAuth()
@ApiTags('Escaneo')
@Controller('api/scan')
export class ScanController{

    constructor(
        private scanService : ScanService
    ){}

    @ApiProperty(
        {
            description: 'Método para escanear una página web.'
        }
    )
    @Post('/scanWebPage')
    async scanWebPage(
        @Body() scan : CreateScanDto
    ){
        return await this.scanService.createScan(scan.url);
    }
}