import TfLAPI from './tfl';
import { IBikePoint } from './interfaces/bikepoint';

export default class BikePoint extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    getAll(): Promise<IBikePoint.Root[]> {
        return this.sendRequest(`/BikePoint/`, {}, 'GET');
    }

    getByID(id: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/${id}`, {}, 'GET');
    }

    getByName(query: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/Search`, { query }, 'GET');
    }
}
