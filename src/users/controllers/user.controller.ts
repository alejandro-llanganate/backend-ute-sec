import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { runInThisContext } from "vm";
import { CreateUserDTO } from "../dto/user.dto";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController {

    constructor(
        private readonly _userService: UserService,
    ) { }

    @Get('/getAllUsers')
    getAllUsers() {
        return this._userService.getAllUsers();
    }

    @Get('/getUserById')
    getUserById() {
//        return this.userService.getUserById();
    }

    @Post('/createUser')
    async createUser(@Body() user: CreateUserDTO) {
        return this._userService.createUser(user);
    }

    @Put('/updateUser')
    updateUser() {
        return this._userService.updateUser();
    }
}