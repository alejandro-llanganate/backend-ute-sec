import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

    getAllUsers() {
        return "getAllUsers";
    }

    getUserById() {
        return 'getUserById';
    }

    createUser() {
        return 'createUser';
    }

    updateUser() {
        return 'updateUser';
    }
}