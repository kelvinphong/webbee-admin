import { Injectable } from '@angular/core';
import { AppConfigModel } from '../models/app-config.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AppConfigService {
    public config = new AppConfigModel();
    constructor(private http: HttpClient) {}

    loadConfig(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`assets/app-config.json?t=${(new Date()).getTime()}`).subscribe(
                (data: any) => {
                    this.config = data;
                    resolve(data);
                }, err => reject(err)
            );
        });
    }
}