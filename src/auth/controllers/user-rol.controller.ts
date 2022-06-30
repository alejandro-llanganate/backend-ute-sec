import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateActionDTO, UpdateActionDTO } from "../dtos/action.dto";
import { CreateUserRolDTO } from "../dtos/user-rol.dto";
import { ActionService } from "../services/action.service";
import { UserRolService } from "../services/user-rol.service";

@ApiTags('Usuarios Roles')
@Controller('api/user_rol')
export class UserRolController {

    constructor(
        private readonly _userRolService: UserRolService,
    ) { }

    @ApiOperation(
        {
            summary: 'Lista de la juntura de roles y usuarios del sistema'
        }
    )
    @Get('/getAllUserRols')
    async getAllUserRols() {
        return await this._userRolService.getAllUserRols()
    }

    @ApiOperation(
        {
            summary: 'Lista de la juntura de roles y usuarios del sistema por id del rol'
        }
    )
    @Get('/getAllUserRolsByRolId/:id')
    async getAllUserRolsByRolId( @Param('id') id : string, ) {
        return await this._userRolService.getAllUserRolsByRolId(id)
    }

    @ApiOperation(
        {
            summary: 'Lista de la juntura de roles y usuarios del sistema por id del usuario'
        }
    )
    @Get('/getAllUserRolsByUserId/:id')
    async getAllUserRolsByUserId( @Param('id') id : string, ) {
        return await this._userRolService.getAllUserRolsByUserId(id)
    }

    @ApiOperation(
        {
            summary: 'Método para crear un rol-usuario'
        }
    )
    @Post('/createUserRol')
    async createUserRol(@Body() userRol: CreateUserRolDTO) {
        return await this._userRolService.createUserRol(userRol)
    }

    @ApiOperation(
        {
            summary: 'Método para actualizar un rol-usuario según su id'
        }
    )
    @Put('/updateUserRol/:idUserRol')
    async updateUserRol(@Param('idUserRol') idUserRol : string, @Body() userRol: CreateUserRolDTO) {
        return await this._userRolService.updateUserRol(idUserRol, userRol)
    }


    @ApiOperation(
        {
            summary: 'Método para eliminar un user-rol'
        }
    )
    @Delete('/deleteUserRol/:id')
    async deleteUserRol(@Param('id') id : string){
        return await this._userRolService.deleteUserRol(id)
    }
}