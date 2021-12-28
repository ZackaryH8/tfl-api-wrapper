import TfLAPI from './tfl';
import * as IDisruptions from './interfaces/IDisruptions';

export default class Disruptions extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /* List of all currently disrupted lift routes, refreshed every 1 minute */
    getAllLifts(): Promise<IDisruptions.GetAllLifts.Root> {
        return this.sendRequest(`/Disruptions/Lifts`, {}, 'GET');
    }
}
