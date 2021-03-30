import TfLAPI from './tfl';
import Config from './interfaces/config';
import Occupancy from './interfaces/occupancy'

export default class Occupancy extends TfLAPI {
    constructor(config: Config) {
        super(config);
    }

    /**
     * Get the occupancy for bike points.
     * @param id Bike Point ID
     */
    getBikePointByID(id: string): Promise<Occupancy.CarPark> {
        return this.sendRequest(`/Occupancy/BikePoints/${id}`, {}, 'GET');

    }

    /**
     * Gets the occupancy for a charge connectors with a given id
     * @param id Charge Connector ID (Eg. ChargePointESB-UT06NW-1)
     */
    getCarkParkByID(id: string): Promise<Occupancy.CarPark> {
        return this.sendRequest(`/Occupancy/ChargeConnector/${id}`, {}, 'GET');

    }

    /**
     * Gets the occupancy for a charge connectors with a given id
     * @param id Charge Connector ID (Eg. ChargePointESB-UT06NW-1)
     */
    getChargeConnectorByID(id: string): Promise<Occupancy.ChargeConnector> {
        return this.sendRequest(`/Occupancy/ChargeConnector/${id}`, {}, 'GET');

    }

    /**
     * Gets the occupancy for all car parks that have occupancy data
     */
    getAllCarParks(): Promise<Occupancy.CarPark> {
        return this.sendRequest(`/Occupancy/CarPark`, {}, 'GET');
    }

    /**
     * Gets the occupancy for all charge connectors
     */
    getAllChargeConnectors(): Promise<Occupancy.ChargeConnector[]> {
        return this.sendRequest(`/Occupancy/ChargeConnector`, {}, 'GET');

    }
}
