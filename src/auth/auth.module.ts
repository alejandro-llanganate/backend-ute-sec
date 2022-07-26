import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ActionController } from './controllers/action.controller';
import { AuthController } from './controllers/auth.controller';
import { RolController } from './controllers/rol.controller';
import { UserRolController } from './controllers/user-rol.controller';
import { ActionEntity } from './entities/action.entity';
import { RolEntity } from './entities/rol.entity';
import { UserRolEntity } from './entities/user-rol.entity';
import { ActionService } from './services/action.service';
import { AuthService } from './services/auth.service';
import { RolService } from './services/rol.service';
import { UserRolService } from './services/user-rol.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ActionEntity,
            RolEntity,
            UserRolEntity,
        ]),
        UsersModule,
        JwtModule.register({
            secret: "ute-sec",
            signOptions: { expiresIn: '24h' },
        }),
    ],
    controllers: [AuthController, RolController, ActionController, UserRolController],
    providers: [JwtStrategy, AuthService, RolService, ActionService, UserRolService],

})
export class AuthModule { }
