import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: "ute-sec",
            signOptions: { expiresIn: '24h' },
        }),
    ],
    controllers: [AuthController,],
    providers: [JwtStrategy, AuthService],

})
export class AuthModule { }
