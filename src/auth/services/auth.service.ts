import { Injectable } from "@nestjs/common";
import { UserService } from "src/users/services/user.service";
import { AuthCredentialsDTO } from "../dtos/auth.dto";
import * as bcrypt from 'bcrypt';
import { UserEntity } from "src/users/entities/user.entity";
import { PayloadToken } from "../models/PayloadToken.interface";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {

    constructor(
        private userService : UserService,
        private jwtService : JwtService
    ){}

    async login(user: AuthCredentialsDTO) : Promise<any>{
        const userToLogin = await this.userService.getUserByEmail(user.email);
        if(user) {
            const isMatch = await bcrypt.compare(user.password, userToLogin.password);
            if (isMatch) {
                return await this.userService.getUserByEmail(userToLogin.email);
            }
        }
        return null;
    }

    generateJWT(user : UserEntity){
        const payload : PayloadToken = { sub: user.id, rol: user.rol}
        return {
            access_token: this.jwtService.sign(payload),
            user
        }
    }

    
}

