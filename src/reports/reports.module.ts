import { Module } from '@nestjs/common';
import { ReportController } from './controllers/report.controller';

@Module({
    controllers: [ReportController]
})
export class ReportsModule {}
