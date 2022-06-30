import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { ActionController } from './controllers/action.controller';
import { AuthController } from './controllers/auth.controller';
import { RolController } from './controllers/rol.controller';
import { ActionEntity } from './entities/action.entity';
import { RolEntity } from './entities/rol.entity';
import { UserRolEntity } from './entities/user-rol.entity';
import { ActionService } from './services/action.service';
import { AuthService } from './services/auth.service';
import { RolService } from './services/rol.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ActionEntity,
            RolEntity,
            UserRolEntity,
        ]),
    ],
    controllers: [AuthController, RolController, ActionController],
    providers: [AuthService, RolService, ActionService],

})
export class AuthModule {}
