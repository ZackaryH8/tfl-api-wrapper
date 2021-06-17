import TfLAPI from './tfl';

export default class Line extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Gets all accident details for accidents occuring in the specified year
     * @param year The year for which to filter the accidents on.
     */
    getAll(year: number) {
        return this.sendRequest(`/AccidentStats/${year}`, {}, 'GET');
    }
}
