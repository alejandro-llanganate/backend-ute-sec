import { Module } from '@nestjs/common';
import { ScanController } from './controllers/scan.controller';

@Module({
    controllers: [ScanController]
})
export class ScansModule {}
