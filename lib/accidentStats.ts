import TfLAPI from './tfl';
import TfL from './interfaces/tfl';

export default class AccidentStats extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Gets all accident details for accidents occuring in the specified year
     * @param year The year for which to filter the accidents on.
     */
    getAll(year: number): Promise<Array<TfL['AccidentStats.AccidentDetail']>> {
        return this.sendRequest(`/AccidentStats/${year}`, {});
    }
}
