import fetch from 'node-fetch';
import * as qs from 'querystring';
import * as xmlparser from 'fast-xml-parser';
// @ts-ignore
import { retag } from 'trackernet-xml-retag';
export default class TfLAPI {
    public appKey: string;
    private readonly host: string = 'api.tfl.gov.uk';
    private readonly port: number = 443;

    constructor(appKey: string) {
        this.appKey = appKey;
    }

    /**
     * @ignore
     */
    protected async sendRequest(uri: string, params: any, method: string) {
        let FullURL: string = `https://${this.host}:${this.port}${uri}?app_key=${this.appKey}`;
        const options = {
            method,
            headers: {
                Accept: 'application/json',
                'cache-control': 'no-cache'
            }
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
    protected async sendRequestTrackerNet(uri: string, params: any, method: string, reTag: boolean) {
        let FullURL = `http://cloud.tfl.gov.uk/TrackerNet${uri}`;

        const options = {
            method,
            headers: {
                Accept: 'application/xml',
                'cache-control': 'no-cache'
            }
        };

        const fetchReq = await fetch(FullURL, options);
        return await parseStringPromise(await fetchReq.text());
    }

    /**
     * @ignore
     */
    static objectToQuery(params: any): string {
        return Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
    }

    /**
     * @ignore
     */
    static arrayToCSV(arr: Array<string | number>) {
        return arr.join(',');
    }

    /**
     * @ignore
     */
    static convertDate(oldDate: Date | undefined): string {
        return oldDate?.toISOString().split('.')[0] + 'Z';
    }
}
