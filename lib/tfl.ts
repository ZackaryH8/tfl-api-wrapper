import axios from 'axios';
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

        // Removed all undefined objects from params
        Object.keys(params).forEach((key) => (params[key] === undefined ? delete params[key] : {}));

        // If Parameters are passed then stringify them and update the request URL
        if (params) FullURL = `${FullURL}&${qs.stringify(params)}`;

        const fetch = await axios.get(FullURL, { headers: { Accept: 'application/json', 'cache-control': 'no-cache' } });
        return fetch.data;
    }

    /**
     * @ignore
     */
    protected async sendRequestTrackerNet(uri: string, method: string, reTag: boolean) {
        // Fetch data and retag the XML if required
        const fetch = await axios.get(`http://cloud.tfl.gov.uk/TrackerNet${uri}`, { headers: { Accept: 'application/xml', 'cache-control': 'no-cache' } });
        let xmlData = fetch.data;

        if (reTag) xmlData = retag.trackerNetRetag(xmlData);

        // Convert XML to JS / JSON
        const jsonObj = xmlparser.parse(xmlData, {
            attributeNamePrefix: '',
            ignoreAttributes: false
        });

        return jsonObj;
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

    /**
     * @ignore
     */

    static incidentsCheck(incidentsOnly: boolean): string {
        return incidentsOnly ? '/IncidentsOnly' : '';
    }
}
