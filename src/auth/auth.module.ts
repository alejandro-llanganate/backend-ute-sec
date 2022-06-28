import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { ActionEntity } from './entities/action.entity';
import { RolEntity } from './entities/rol.entity';
import { UserRolEntity } from './entities/user-rol.entity';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ActionEntity,
            RolEntity,
            UserRolEntity
        ]),
    ],
    controllers: [AuthController],
    providers: [AuthService],

})
export class AuthModule {}
