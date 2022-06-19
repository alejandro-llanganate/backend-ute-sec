import { Controller, Get, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController{

    constructor(
        private readonly userService : UserService,
    ){}

    @Get('/getAllUsers')
    getAllUsers(){
        return 'getAllUsers' + this.userService.getAllUsers();
    }

    @Get('/getUserById')
    getUserById(){
        return 'getUserById'
    }

    @Post('/createUser')
    createUser(){
        return 'createUser'
    }

    @Put('/updateUser')
    updateUser(){
        return 'updateUser'
    }
}