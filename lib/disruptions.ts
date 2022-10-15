import TfLAPI from './tfl';
import IDisruption from './interfaces/disruptions';

export default class Disruptions extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /* List of all currently disrupted lift routes, refreshed every 1 minute */
    getAllLifts(): Promise<IDisruption.Root[]> {
        return this.sendRequest(`/Disruptions/Lifts`, {});
    }
}
