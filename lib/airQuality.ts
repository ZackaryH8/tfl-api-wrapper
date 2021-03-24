import TfLAPI from './tfl';
import Config from './interfaces/config';

export default class AirQuality extends TfLAPI {
    constructor(config: Config) {
        super(config);
    }

    /** Get all current and future air quality forecast */
    getAirQuality() {
        return this.sendRequest('/AirQuality', {}, 'GET');
    }
}
