import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import * as cheerio from 'cheerio';
import { Agent } from "https";
import { Valoracion } from "src/reports/entities/observation.enitity";
import { ScanResult } from "../models/scan-result.interface";

@Injectable()
export class ScanService {

    constructor(private readonly httpService: HttpService) { }

    async createScan(url : string) : Promise<ScanResult> {

        const httpsAgent = new Agent({ rejectUnauthorized: false });
        const resp = await this.httpService.get(url, {httpsAgent}).toPromise();

        if(!resp){
            return null;
        }
        const R2 = this.verifyNoDataEncryption(resp);
        const R4 = this.verifyAutocomplete(resp.data);
        const R5 = this.verifyBadDataObfuscation(resp.data);
        const R8 = this.useKeylogger(resp.data);
        const R9 = this.virifySocialNetworks(resp.data);
        const valoracion : ScanResult =
            {
                R2: R2,
                R4: R4,
                R5: R5,
                R8: R8,
                R9: R9
            }
        return valoracion;
    }

    private verifyBadDataObfuscation(webPage : string){
        const $ = cheerio.load(webPage);
        const scripts = $('script');
        scripts.each((i, element) => {
            const sources = $(element).attr("src");
            if (
                sources
            ) {
                if(sources.split(".").includes("min")){return Valoracion.BAJO}
                return Valoracion.MEDIO;
            }
        })
        if(scripts.length > 2){
            return Valoracion.MEDIO
        }else{
            return Valoracion.BAJO;
        }
    }


    private verifyAutocomplete(webPage: string) {

        const $ = cheerio.load(webPage);
        const results = $('input');
        results.each((i, element) => {
            const typeIput = $(element).attr("autocomplete");
            if (typeIput === "on") {
                return Valoracion.ALTO
            }else{
                return Valoracion.MEDIO;
            }
        })
        return Valoracion.BAJO;
    }

    private verifyNoDataEncryption(response: any) {

        if (response.request.res.socket.getPeerCertificate) {
            if (response.request.res.socket.getPeerCertificate(false)) {
                return Valoracion.BAJO;
            } else {
                return Valoracion.MEDIO;
            }
        } else {
            return Valoracion.ALTO;
        }
    }

    private useKeylogger(webPage: string) {

        const $ = cheerio.load(webPage);
        const results = $('input');
        results.each((i, element) => {
            const typeIput = $(element).attr("type");
            if (typeIput === "password") {
                return Valoracion.ALTO;
            }
        })
        if(results.length > 1){
            return Valoracion.MEDIO
        }else{
            return Valoracion.BAJO;
        }
    }

    private virifySocialNetworks(webPage: string) {

        const $ = cheerio.load(webPage);
        const results = $('a');
        if(results){
            results.each((i, element) => {
                const hrefs = $(element).attr("href");
               if(hrefs){
                if (
                    hrefs.split(".").includes("facebook")
                    || hrefs.split(".").includes("instagram")
                    || hrefs.split(".").includes("twitter")
                    || hrefs.split(".").includes("linkedin")
                    || hrefs.split(".").includes("youtube")
                    || hrefs.split(".").includes("tiktok")
                ) {
                    return Valoracion.ALTO;
                }
               }
            })                
        }

        if(results.length > 2){
            return Valoracion.MEDIO
        }else{
            return Valoracion.BAJO;
        }
    }

}