export class AppConfigModel {
    production: boolean;
    appUrl: string;

    constructor() {
        this.production = true;
        this.appUrl = 'http://localhost:4201';
    }
}