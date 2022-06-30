import { Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthCredentialsDTO } from "../dtos/auth.dto";

@ApiTags('Autenticación')
@Controller('/auth')
export class AuthController {

    @ApiOperation({
        description: 'Método para hacer login.'
    })
    @Post('/login')
    login(credentials : AuthCredentialsDTO){
        return 'login'
    }

    @ApiOperation({
        description: 'Método para hacer logout'
    })
    @Post('/logout')
    logout(){
        return 'logout'
    }
}