import TfLAPI from './tfl';
import Config from './interfaces/config';

export default class BikePoint extends TfLAPI {
    constructor(config: Config) {
        super(config);
    }

    getAll() {
        return this.sendRequest(`/BikePoint/`, {}, 'GET');
    }

    getByID(id: string) {
        return this.sendRequest(`/BikePoint/${id}`, {}, 'GET');
    }

    getByName(query: string) {
        return this.sendRequest(`/BikePoint/Search`, { query }, 'GET');
    }
}
