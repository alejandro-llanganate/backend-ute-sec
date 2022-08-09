import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateObservationDTO, UpdateObservationDTO } from "../dto/observation.dto";
import { ObservationService } from "../services/observation.service";

@ApiBearerAuth()
@ApiTags('Observaciones')
@Controller('api/observations')
export class ObservationController{

    constructor(
        private _observationService : ObservationService
    ){}

    @ApiOperation(
        {
            description: 'Método para obtener todos los riesgos'
        }
    )
    @Get('/getAllObservations')
    async getAllObservations(){
        return await this._observationService.getAllObservations();
    }

    @Get('/getObservationByReport/:id')
    async getObservationByReport(@Param('id') idReport : string){
        return await this._observationService.getObservationByReport(idReport);
    }

    @ApiOperation(
        {
            description: 'Método para obtener un riesgo con su id'
        }
    )
    @Get('/getObservationById/:id')
    async getObservationById(
        @Param('id') id : string
    ){
        return await this._observationService.getObservationById(id);
    }

    @ApiOperation(
        {
            description: 'Método para crear un riesgo'
        }
    )
    @Post('/createObservation')
    async createObservation(
        @Body() observation : CreateObservationDTO
    ){
        return await this._observationService.createObservation(observation);
    }
    
    @ApiOperation(
        {
            description: 'Método para actualizar un riesgo'
        }
    )
    @Put('/updateObservation/:id')
    async updateObservation(
        @Param('id') id : string, @Body() observation : UpdateObservationDTO
    ){
        return this._observationService.updateObservation(id, observation);
    }

    @ApiOperation(
        {
            description: 'Método para elimianr un riesgo'
        }
    )
    @Delete('/deleteObservation/:id')
    deleteReport(
        @Param('id') id : string
    ){
        return this._observationService.deleteObservation(id);
    }
}

