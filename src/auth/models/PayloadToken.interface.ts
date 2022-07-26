import { RolType } from "../entities/rol.enum";

export interface PayloadToken {
    rol : RolType,
    sub : string,
}