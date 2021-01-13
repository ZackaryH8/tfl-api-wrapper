import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class Disruptions extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * List of all currently disrupted lift routes, refreshed every 1 minute
     */
    getAllLifts() {
        return this.sendRequest(`/Disruptions/Lifts`, {}, 'GET');
    }
}
