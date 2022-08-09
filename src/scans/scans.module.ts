import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScanController } from './controllers/scan.controller';
import { ScanService } from './services/scan.service';

@Module({
    imports: [HttpModule],
    controllers: [ScanController],
    providers: [ScanService]
})
export class ScansModule {}
