import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateActionDTO, UpdateActionDTO } from "../dtos/action.dto";
import { ActionService } from "../services/action.service";

@ApiTags('Acciones')
@Controller('api/action')
export class ActionController {

    constructor(
        private readonly _actionService: ActionService,
    ) { }

    @ApiOperation(
        {
            summary: 'Lista de acciones del sistema'
        }
    )
    @Get('/getAllActions')
    async getAllUsers() {
        return await this._actionService.getAllActions()
    }

    @ApiOperation(
        {
            summary: 'Método para obtener todas las acciones del sistema según el id del rol del usuario'
        }
    )
    @Get('/getAllActionsByRolId/:id')
    async getAllActionsByRolId( @Param('id') id : string, ) {
        return await this._actionService.getAllActionsByRolId(id);
    }

    @ApiOperation(
        {
            summary: 'Método para obtener todas las acciones del sistema según el id de una acción'
        }
    )
    @Get('/getActionByActionId/:id')
    async getActionByActionId( @Param('id') id : string, ) {
        return await this._actionService.getActionByActionId(id);
    }


    @ApiOperation(
        {
            summary: 'Método para crear un usuario'
        }
    )
    @Post('/createUser/:idRol')
    async createUser(@Param('idRol') idRol : string, @Body() action: CreateActionDTO) {
        return await this._actionService.createAction(idRol, action);
    }

    @ApiOperation(
        {
            summary: 'Método para actualizar un usuario según su id'
        }
    )
    @Put('/updateUser/:id')
    async updateUser(@Param('id') id: string, @Body() action: UpdateActionDTO) {
        return await this._actionService.updateAction(id, action);    
    }

    @ApiOperation(
        {
            summary: 'Método para actualizar la contraseña de un usuario'
        }
    )
    @Delete('/deleteAction/:id')
    async updateUserPassword(@Param('id') id : string){
        return await this._actionService.deleteAction(id);
    }
}