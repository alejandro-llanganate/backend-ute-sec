import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateRiskDTO, UpdateRiskDTO } from "../dto/risk.dto";
import { RiskService } from "../services/risk.service";


@ApiTags('Riesgos')
@Controller('/risks')
export class RiskController{

    constructor(
        private _riskService : RiskService
    ){}

    @ApiOperation(
        {
            description: 'Método para obtener todos los riesgos'
        }
    )
    @Get('/getAllRisks')
    async getAllRisks(){
        return await this._riskService.getAllRisks();
    }

    @ApiOperation(
        {
            description: 'Método para obtener un riesgo con su id'
        }
    )
    @Get('/getRiskById/:id')
    async getRiskById(
        @Param('id') id : string
    ){
        return await this._riskService.getRiskById(id);
    }

    @ApiOperation(
        {
            description: 'Método para crear un riesgo'
        }
    )
    @Post('/createRisk')
    async createRisk(
        @Body() risk : CreateRiskDTO
    ){
        return await this._riskService.createRisk(risk);
    }
    
    @ApiOperation(
        {
            description: 'Método para actualizar un riesgo'
        }
    )
    @Put('/updateRisk/:id')
    async updateRisk(
        @Param('id') id : string, @Body() risk : UpdateRiskDTO
    ){
        return this._riskService.updateRisk(id, risk);
    }

    @ApiOperation(
        {
            description: 'Método para elimianr un riesgo'
        }
    )
    @Delete('/deleteRisk/:id')
    deleteReport(
        @Param('id') id : string
    ){
        return this._riskService.deleteRisk(id);
    }
}

