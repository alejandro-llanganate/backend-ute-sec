import { Body, Controller, Put } from "@nestjs/common";
import { CreateRolDTO } from "../dtos/rol.dto";
import { RolService } from "../services/rol.service";


@Controller('Rol')
export class RolController {

    constructor(
        private _rolService : RolService
    ){}

    @Put('/createRol')
    async createRol( @Body() rol : CreateRolDTO ){
        return await this._rolService.createRol(rol);
    }

}