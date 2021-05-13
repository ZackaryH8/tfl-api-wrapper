import TfLAPI from './tfl';
import Config from './interfaces/config';

export default class Disruptions extends TfLAPI {
    constructor(config: Config) {
        super(config);
    }

    /**
     * List of all currently disrupted lift routes, refreshed every 1 minute
     */
    getAllLifts(): Promise<getAllLifts.Root[]> {
        return this.sendRequest(`/Disruptions/Lifts`, {}, 'GET');
    }
}
