import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './controllers/report.controller';
import { ReportEntity } from './entities/report.entity';
import { ReportService } from './services/report.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReportEntity])],
    controllers: [ReportController],
    providers: [ReportService]
})
export class ReportsModule {}
