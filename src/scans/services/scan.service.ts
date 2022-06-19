import { Injectable } from "@nestjs/common";


@Injectable()
export class ScanService {
    getAllScans(){
        return 'getAllScans';
    }

    getScanById(){
        return 'getScanById';
    }

    createScan(){
        return 'createScan';
    }

    updateScan(){
        return 'updateScan';
    }

    deleteScan(){
        return 'deleteScan';
    }
}