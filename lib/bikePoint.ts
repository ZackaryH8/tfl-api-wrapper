import TfLAPI from './tfl';
import { IBikePoint } from './interfaces/bikepoint';

export default class BikePoint extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /* Get all Bikepoints */
    getAll(): Promise<IBikePoint.Root[]> {
        return this.sendRequest(`/BikePoint/`, {}, 'GET');
    }

    /** 
     * Get bikepoint by ID
     * @param id ID of the bikepoint
     */
    getByID(id: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/${id}`, {}, 'GET');
    }

    /** 
     * Get bikepoint by common name 
     * @param query Common name of the bikepoint
     */
    getByName(query: string): Promise<IBikePoint.Root> {
        return this.sendRequest(`/BikePoint/Search`, { query }, 'GET');
    }
}
