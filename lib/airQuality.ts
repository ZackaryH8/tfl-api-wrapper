import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class AirQuality extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /** Get all current and future air quality forecast */
    getAirQuality() {
        return this.sendRequest('/AirQuality', {}, 'GET');
    }
}
