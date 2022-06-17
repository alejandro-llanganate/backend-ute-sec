import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/users')
export class UserController{

    @Get('/getAllUsers')
    getAllUsers(){
        return 'getAllUsers'
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