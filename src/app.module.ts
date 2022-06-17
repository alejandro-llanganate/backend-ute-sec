import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { ScansModule } from './scans/scans.module';

@Module(
    {
  imports: [AuthModule, ReportsModule, UsersModule, ScansModule]
}
)
export class AppModule{}