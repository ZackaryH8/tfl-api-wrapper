import TfLAPI from './tfl';
import { LondonAirForecast } from './interfaces/airQuality';

export default class AirQuality extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /** Get all current and future air quality forecast */
    getAirQuality(): Promise<LondonAirForecast> {
        return this.sendRequest('/AirQuality', {}, 'GET');
    }
}
