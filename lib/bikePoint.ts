import TfLAPI from './tfl';
import { IBikePoint } from './interfaces/bikepoint';

export default class BikePoint extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /* Gets all bike point locations */
    getAll(): Promise<IBikePoint.Root[]> {
        return this.sendRequest(`/BikePoint/`, {}, 'GET');
    }

    /* Gets the bike point by the given id */
    getByID(id: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/${id}`, {}, 'GET');
    }

    /* Search for bike points by their name */
    getByName(query: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/Search`, { query }, 'GET');
    }
}
