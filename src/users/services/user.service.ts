import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

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
    createUser() {
        return 'createUser';
    }

    updateUser() {
        return 'updateUser';
    }
}