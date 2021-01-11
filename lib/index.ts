import fetch from 'node-fetch';
import * as interfaces from './interfaces';

export default class TfLAPI {
    private config: interfaces.config;
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

    sendSerialisedArrayRequest(uri: any, items: (string | number)[], options: object | undefined, method: string) {
        return this.sendRequest(`${uri}${this.serialiseArray(items)}`, options, method);
    }

    /**
     * @method module:TfLUnified/api.TfLUnified~serialiseParam
     * @description serialises a parameter in the apropriate manor
     * @returns {String} the serialised parameter
     * @private
     * @param param
     */
    serialiseParam(param: (string | number)[]): string {
        if (Array.isArray(param)) {
            return this.serialiseArray(param);
        } else {
            return `${param}`;
        }
    }

    /**
     * @method module:TfLUnified/api.TfLUnified~serialiseArray
     * @description serialises an array into a string with each element seperated by a ','
     * @param {String[]|Number[]} array input array to serialise
     * @returns {String} a comma separated string of all the array elements
     * @private
     */
    serialiseArray(array: Array<string | number>): string {
        return array && Array.isArray(array) ? array.join(',') : array || '';
    }

    /**
     * @method module:TfLUnified/api.TfLUnified~serialiseBoolean
     * @description serialises a boolean into a string
     * @param {Boolean} boolean input array to serialise
     * @returns {String} a boolean string of true or false
     * @private
     */
    serialiseBoolean(boolean: boolean) {
        return boolean ? 'true' : 'false';
    }

    // /**
    //  * @method module:TfLUnified/api.TfLUnified~serialiseDate
    //  * @description serialises a moment/ js date into a string
    //  * @param {Moment|Date|String} date input array to serialise
    //  * @returns {String} a boolean string of true or false
    //  * @private
    //  */
    // serialiseDate(date) {
    //     if (moment.isMoment(date)) {
    //         return date.toISOString()
    //     } else {
    //         return moment(date).toISOString();
    //     }
    // }

    /**
     * @method module:TfLUnified/api.TfLUnified~parseParams
     * @description parses the optional parameters to sort arrays
     * @param {Object} params
     * @returns {Object} returns a query object with the correct formatting when sending the search query
     * @private
     */
    parseParams(params: { [x: string]: (string | number)[] }) {
        const keys = Object.keys(Object.assign({}, params));
        const options = {};

        for (let i = 0, iLength = keys.length; i < iLength; i += 1) {
            // @ts-ignore
            options[keys[i]] = this.serialiseParam(params[keys[i]]);
        }

        return options;
    }
}

import '../tests/test';
