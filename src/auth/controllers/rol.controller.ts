import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateRolDTO, UpdateRolDTO } from "../dtos/rol.dto";
import { RolService } from "../services/rol.service";

@ApiTags('Roles')
@Controller('api//rol')
export class RolController {

    constructor(
        private _rolService : RolService
    ){}

    @ApiOperation({
        description: 'Método para crear un rol'
    })
    @Post('/createRol')
    async createRol( @Body() rol : CreateRolDTO ){
        return await this._rolService.createRol(rol);
    }

    @Put('/updateRol/:id')
    async updateRol( @Param('id') id : string, @Body() rol : UpdateRolDTO ) {
        return await this._rolService.updateRol(id, rol);
    }

}