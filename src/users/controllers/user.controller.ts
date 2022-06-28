import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO, UpdateUserDTO, UpdateUserPasswordDTO } from "../dto/user.dto";
import { UserService } from "../services/user.service";

@Controller('/User')
export class UserController {

    constructor(
        private readonly _userService: UserService,
    ) { }

    @Get('/getAllUsers')
    async getAllUsers() {
        return await this._userService.getAllUsers();
    }

    @Get('/getUserById/:id')
    async getUserById(@Param('id') id: string) {
        return await this._userService.getUserById(id);
    }

    @Post('/createUser')
    async createUser(@Body() user: CreateUserDTO) {
        return await this._userService.createUser(user);
    }

    @Put('/updateUser/:id')
    async updateUser(@Param('id') id: string, @Body() user: UpdateUserDTO) {
        return await this._userService.updateUser(id, user);
    }

    @Put('/updateUserPassword')
    async updateUserPassword(@Body() userPasswordAndId : UpdateUserPasswordDTO){
        return await this._userService.updateUserPassword(userPasswordAndId.id, userPasswordAndId.password);
    }
}