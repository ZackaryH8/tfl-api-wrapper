import TfLAPI from './tfl';


export default class Disruptions extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * List of all currently disrupted lift routes, refreshed every 1 minute
     */
    getAllLifts(): Promise<getAllLifts.Root[]> {
        return this.sendRequest(`/Disruptions/Lifts`, {}, 'GET');
    }
}
