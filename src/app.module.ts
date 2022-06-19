import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { ScansModule } from './scans/scans.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module(
  {
    imports: [
      AuthModule,
      ReportsModule,
      UsersModule,
      ScansModule,
      TypeOrmModule.forRoot(
        {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'root',
          password: '1R4T55SFF1',
          database: 'my_db',
          autoLoadEntities: true,
          synchronize: true,
        }
      )
    ]
  }
)
export class AppModule { }