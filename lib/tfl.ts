import * as interfaces from './interfaces';
import fetch from 'node-fetch';
import * as qs from 'querystring';

export default class TfLAPI {
    public config: interfaces.config | any;
    private readonly host: string = 'api.tfl.gov.uk';
    private readonly port: number = 443;

    constructor(config: interfaces.config) {
        this.config = config;
    }

    /**
     * @ignore
     */
    async sendRequest(uri: string, params: any, method: string) {
        let FullURL = `https://${this.host}:${this.port}${uri}?${qs.stringify(this.config)}`;
        const options = {
            method,
            headers: {
                Accept: 'application/json',
                'cache-control': 'no-cache',
            },
        };
        if (params) {
            FullURL = `${FullURL}&${qs.stringify(params)}`;
        }

        const fetchReq = await fetch(FullURL, options);
        return await fetchReq.json();
    }

    /**
     * @ignore
     */
    objectToQuery(params: any): string {
        const x = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        console.log(x);
        return x;
    }

    /**
     * @ignore
     */
    arrayToCSV(arr: Array<string | number>) {
        return arr.join(',');
    }
}
