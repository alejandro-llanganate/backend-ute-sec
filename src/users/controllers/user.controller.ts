import { Controller, Get, Post, Put } from "@nestjs/common";
import { runInThisContext } from "vm";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Get('/getAllUsers')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/getUserById')
    getUserById() {
        return this.userService.getUserById();
    }

    @Post('/createUser')
    createUser() {
        return this.userService.createUser();
    }

    @Put('/updateUser')
    updateUser() {
        return this.userService.updateUser();
    }
}