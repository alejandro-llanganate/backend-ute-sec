import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { ScansModule } from './scans/scans.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module(
  {
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      AuthModule,
      ReportsModule,
      UsersModule,
      ScansModule,
      TypeOrmModule.forRoot(
        {
          type: 'postgres',
          host: process.env.P_HOST,
          port: Number(process.env.P_PORT),
          username: process.env.P_USER,
          password: process.env.P_PASSWORD,
          database: process.env.P_DATABASE,
          autoLoadEntities: true,
          synchronize: true,
        }
      )
    ]
  }
)
export class AppModule { }