import axios from 'axios';
import { URLSearchParams } from 'url';
import * as xmlparser from 'fast-xml-parser';
import { trackerNetRetag } from './utilities/trackerNetRetag';

export default class TfLAPI {
    public appKey: string;
    public appKeyTrackerNet?: string;
    private readonly host: string = 'api.tfl.gov.uk';
    private readonly port: number = 443;

    constructor(appKey: string, appKeyTrackerNet?: string) {
        this.appKey = appKey;
        this.appKeyTrackerNet = appKeyTrackerNet;
    }

    /**
     * Send a request to the TfL Unified API
     * @param uri URI to send request to
     * @param params Parameters to send
     * @param method Method to use (GET, POST, PUT, DELETE) (Default: GET)
     * @ignore
     */
    protected async sendRequest(uri: string, params: any, method: string = 'GET') {
        let FullURL: string = `https://${this.host}:${this.port}${uri}?app_key=${this.appKey}`;

        // Removed all undefined objects from params
        Object.keys(params).forEach((key) => (params[key] === undefined ? delete params[key] : {}));

        // If Parameters are passed then stringify them and update the request URL
        if (params) FullURL = `${FullURL}&${new URLSearchParams(params).toString()}`;

        const fetch = await axios.get(FullURL, { headers: { Accept: 'application/json', 'cache-control': 'no-cache' } });
        return fetch.data;
    }

    /**
     * Send a request to the TrackerNet API
     * @param uri URI to send request to
     * @param method Method to use (GET, POST, PUT, DELETE) (Default: GET)
     * @param reTag Boolean to check if the XML should be re-tagged
     * @ignore
     */
    protected async sendRequestTrackerNet(uri: string, method: string, reTag: boolean) {
        // Fetch data and retag the XML if required
        const fetch = await axios.get(`{this.host}:${this.port}/trackernet${uri}?app_key=${this.appKeyTrackerNet}`, { headers: { Accept: 'application/xml', 'cache-control': 'no-cache' } });
        let xmlData = fetch.data;

        if (reTag) xmlData = trackerNetRetag(xmlData);

        // Convert XML to JS / JSON
        const jsonObj = xmlparser.parse(xmlData, {
            attributeNamePrefix: '',
            ignoreAttributes: false
        });

        return jsonObj;
    }

    /**
     * Convert object to query string
     * @param params Object to convert
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
    static arrayToCSV(arr: Array<string | number> | undefined): string | undefined {
        return arr?.join(',');
    }

    /**
     * Convert Date to ISO 8601 format
     * @param date Date to convert
     * @ignore
     */
    static convertDate(date: Date | undefined): string {
        return date?.toISOString().split('.')[0] + 'Z';
    }

    /**
     * Check for incidents only
     * @param incidentsOnly Boolean to check
     * @ignore
     */
    static incidentsCheck(incidentsOnly: boolean): string {
        return incidentsOnly ? '/IncidentsOnly' : '';
    }
}
