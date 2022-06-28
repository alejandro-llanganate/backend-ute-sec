import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepo : Repository<UserEntity>
    ){}

    async getAllUsers() : Promise<UserEntity[]>{
        return this.userRepo.find();
    }

    async getUserById(id: string) : Promise<UserEntity> {
        return await this.userRepo.findOne(id);
    }

    async getUserByEmail( email : string ) : Promise<UserEntity> {
        return await this.userRepo.findOne( { email: email});
    }

    async createUser(user : CreateUserDTO) : Promise<any> {
        const newUser = this.userRepo.create(user);
        const hashPassword = await bcrypt.hash(user.password, 10);
        newUser.password = hashPassword;
        return this.userRepo.save(newUser);
    }

    async updateUser(id : string, user : UpdateUserDTO) : Promise<UserEntity> {
        let userToUpdate = await this.userRepo.findOne(id);
        const _errors = { type: 'El usuario no existe' };
        if(!userToUpdate) {
            throw new HttpException({ message: 'ERROR' , _errors}, HttpStatus.BAD_REQUEST);
        }else{
            return this.userRepo.merge(userToUpdate,user);
        }
    }

    async updateUserPassword(id: string, password : string) {
        let userToUpdate = await this.userRepo.findOne(id);
        const _errors = { type: 'El usuario no existe' };
        if(!userToUpdate) {
            throw new HttpException({ message: 'ERROR' , _errors}, HttpStatus.BAD_REQUEST);
        }else{
            let user = {...userToUpdate};
            user.password = password;    
            return this.userRepo.merge(userToUpdate,user);
        }
    }
}