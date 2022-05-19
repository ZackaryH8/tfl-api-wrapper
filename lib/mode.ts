import TfLAPI from './tfl';
import TfL from './interfaces/tfl';

export default class Mode extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Returns the service type active for a mode. Currently only supports tube
     */
    getActiveServiceTypes(): Promise<Array<TfL['ActiveServiceType']>> {
        return this.sendRequest(`/Mode/ActiveServiceTypes`, {});
    }

    /**
     *
     * @param mode A mode name e.g. tube, dlr
     * @param count Number of arrivals to return for each stop, -1 to return all available (default).
     */
    getAllArrivalPredictions(mode: string, count: number = -1): Promise<Array<TfL['Prediction']>> {
        return this.sendRequest(`/Mode/${mode}/Arrivals`, { count });
    }
}
