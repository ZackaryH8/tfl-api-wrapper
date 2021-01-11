import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class Disruptions extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * List of all currently disrupted lift routes
     */
    getAllLifts() {
        return this.sendRequest(`/Disruptions/Lifts`, {}, 'GET');
    }
}
