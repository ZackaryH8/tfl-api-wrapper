import TfLAPI from './tfl';
import * as interfaces from './interfaces/config';

export default class Mode extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * Returns the service type active for a mode. Currently only supports tube
     */
    getActiveServiceTypes() {
        return this.sendRequest(`/Mode/ActiveServiceTypes`, {}, 'GET');
    }

    /**
     *
     * @param mode A mode name e.g. tube, dlr
     * @param count A number of arrivals to return for each stop, -1 to return all available.
     */
    getArrivalPredictionsAllStops(mode: string, count: number) {
        return this.sendRequest(`/Mode/${mode}/Arrivals`, { count }, 'GET');
    }
}
