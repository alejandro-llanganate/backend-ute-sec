import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserDTO, UpdateUserDTO, UpdateUserPasswordDTO } from "../dto/user.dto";
import { UserService } from "../services/user.service";

@ApiBearerAuth()
@ApiTags('Usuarios')
@Controller('api/user')
export class UserController {

    constructor(
        private readonly _userService: UserService,
    ) { }

    @ApiOperation(
        {
            summary: 'Lista de usuarios del sistema'
        }
    )
    @Get('/getAllUsers')
    async getAllUsers() {
        return await this._userService.getAllUsers();
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation(
        {
            summary: 'Método para obtener un usuario según su id'
        }
    )
    @Get('/getUserById/:id')
    async getUserById(@Param('id') id: string) {
        return await this._userService.getUserById(id);
    }

    @ApiOperation(
        {
            summary: 'Método para crear un usuario'
        }
    )
    @Post('/createUser')
    async createUser(@Body() user: CreateUserDTO) {
        return await this._userService.createUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @UseGuards(JwtAuthGuard)
    @ApiOperation(
        {
            summary: 'Método para actualizar un usuario según su id'
        }
    )
    @Put('/updateUser/:id')
    async updateUser(@Param('id') id: string, @Body() user: UpdateUserDTO) {
        return await this._userService.updateUser(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation(
        {
            summary: 'Método para actualizar la contraseña de un usuario'
        }
    )
    @Put('/updateUserPassword')
    async updateUserPassword(@Body() userPasswordAndId : UpdateUserPasswordDTO){
        return await this._userService.updateUserPassword(userPasswordAndId.id, userPasswordAndId.password);
    }
}