import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepo : Repository<UserEntity>
    ){}

    getAllUsers() {
        return "getAllUsers";
    }

/*    async getUserById(id: string) : Promise<UserEntity> {
        const found = await this.userRepo.findOne(id); 
    }
*/
    async createUser(user : CreateUserDTO) : Promise<any> {
        const newUser = this.userRepo.create(user);
        const hashPassword = await bcrypt.hash(user.password, 10);
        newUser.password = hashPassword;
        return this.userRepo.save(newUser);
    }

    updateUser() {
        return 'updateUser';
    }
}