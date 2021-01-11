import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class StopPoint extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    searchStopPoint(name: string, modes: string) {
        return this.sendRequest(`/StopPoint/Search/${name}`, {}, 'GET');
    }

    /** Get all service arrivals and departures */
    listStationArrivals(id: string) {
        return this.sendRequest(`/StopPoint/${id}/Arrivals`, {}, 'GET');
    }
}
