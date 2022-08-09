import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ObservationController } from './controllers/observation.controller';
import { ReportController } from './controllers/report.controller';
import { RiskController } from './controllers/risk.controller';
import { ObservationEntity } from './entities/observation.enitity';
import { ReportEntity } from './entities/report.entity';
import { RiskEntity } from './entities/risk.entity';
import { ObservationService } from './services/observation.service';
import { ReportService } from './services/report.service';
import { RiskService } from './services/risk.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReportEntity, ObservationEntity, RiskEntity]), UsersModule],
    controllers: [ReportController, RiskController, ObservationController],
    providers: [ReportService, RiskService, ObservationService]
})
export class ReportsModule {}
