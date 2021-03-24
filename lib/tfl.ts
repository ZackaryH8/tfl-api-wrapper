import fetch from 'node-fetch';
import * as qs from 'querystring';
import * as xml2js from 'xml2js';
import Config from './interfaces/config';

export default class TfLAPI {
    public config: Config | any;
    private readonly host: string = 'api.tfl.gov.uk';
    private readonly port: number = 443;

    constructor(config: Config) {
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

        // Removed all undefined objects from params
        Object.keys(params).forEach((key) => (params[key] === undefined ? delete params[key] : {}));

        if (params) {
            FullURL = `${FullURL}&${qs.stringify(params)}`;
        }

        const fetchReq = await fetch(FullURL, options);
        return await fetchReq.json();
    }

    /**
     * @ignore
     */
    async sendRequestTrackerNet(uri: string, params: any, method: string) {
        let FullURL = `http://cloud.tfl.gov.uk/TrackerNet${uri}`;

        const options = {
            method,
            headers: {
                Accept: 'application/xml',
                'cache-control': 'no-cache',
            },
        };

        const fetchReq = await fetch(FullURL, options);
        return await xml2js.parseStringPromise(await fetchReq.text());
    }

    /**
     * @ignore
     */
    objectToQuery(params: any): string {
        return Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
    }

    /**
     * @ignore
     */
    arrayToCSV(arr: Array<string | number>) {
        return arr.join(',');
    }

    /**
     * @ignore
     */
    convertDate(oldDate: Date | undefined): string {
        return oldDate?.toISOString().split('.')[0] + 'Z';
    }
}
