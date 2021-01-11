import * as interfaces from './interfaces';
import fetch from 'node-fetch';

export default class TfLAPI {
    public config: interfaces.config;
    private readonly host: string = 'api.tfl.gov.uk';
    private readonly port: number = 443;

    constructor(config: interfaces.config) {
        this.config = config;
    }

    async sendRequest(uri: string, params: object = {}, method: string) {
        const options = {
            method,
            headers: {
                Accept: 'application/json',
                'cache-control': 'no-cache',
            },
        };

        const fetchReq = await fetch(`https://${this.host}:${this.port}/${uri}`, options);
        return await fetchReq.json();
    }

    objectToQuery(params: any): string {
        const x = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        console.log(x);
        return x;
    }
    arrayToCSV(arr: Array<string | number>) {
        return arr.join(',');
    }
}
