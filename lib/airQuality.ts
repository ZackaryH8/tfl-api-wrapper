import TfLAPI from './tfl';

export default class AirQuality extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /** Get all current and future air quality forecast */
    getAirQuality() {
        return this.sendRequest('/AirQuality', {}, 'GET');
    }
}
