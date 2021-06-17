import TfLAPI from './tfl';
import { GetArrivalPredictionsAllStops, GetActiveServiceTypes } from './interfaces/mode';

export default class Mode extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Returns the service type active for a mode. Currently only supports tube
     */
    getActiveServiceTypes(): Promise<GetActiveServiceTypes.Root[]> {
        return this.sendRequest(`/Mode/ActiveServiceTypes`, {}, 'GET');
    }

    /**
     *
     * @param mode A mode name e.g. tube, dlr
     * @param count Number of arrivals to return for each stop, -1 to return all available (default).
     */
    getArrivalPredictionsAllStops(mode: string, count: number = -1): Promise<GetArrivalPredictionsAllStops.Root[]> {
        return this.sendRequest(`/Mode/${mode}/Arrivals`, { count }, 'GET');
    }
}
