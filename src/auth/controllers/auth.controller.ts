import { Body, Controller, Get, HttpException, Post, Req } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { JwtService } from "@nestjs/jwt";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { UserService } from "src/users/services/user.service";
import { AuthCredentialsDTO } from "../dtos/auth.dto";
import { AuthService } from "../services/auth.service";

@ApiTags('Autenticación')
@Controller('/auth')
export class AuthController {

    constructor(
        private _authService : AuthService,
        private jwtService : JwtService,
        private userService : UserService,
    ){}
    @ApiOperation({
        description: 'Método para hacer login.'
    })
    @Post('/login')
    async login(@Body() credentials : AuthCredentialsDTO){
        const userAuth = await this._authService.login(credentials);
        if (userAuth) {
            return this._authService.generateJWT(userAuth);
        }else {
            return new HttpException('USUARIO NO AUTORIZADO', 404);        
        }
    }

  
    @Get('getuser')
    @ApiOperation({
        description: 'Método para obtener un usuario a partir de un token'
    })
    async getUsuario(@Req() req: Request) {
      const reqToken = req.headers.authorization.split(" ")[1]
      const values = this.jwtService.decode(reqToken);
      const {password, ...user} = await this.userService.getUserById(values.sub)
      return user;   
    }
}