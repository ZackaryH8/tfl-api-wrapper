import TfL from './interfaces/tfl';
import TfLAPI from './tfl';

export default class Occupancy extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Get the occupancy for bike points.
     * @param id Bike Point ID
     */
    getBikePointByIDs(ids: string[]): Promise<Array<TfL['BikePointOccupancy']>> {
        return this.sendRequest(`/Occupancy/BikePoints/${TfLAPI.arrayToCSV(ids)}`, {});
    }

    /**
     * Gets the occupancy for a charge connectors with a given id
     * @param id Charge Connector ID (Eg. ChargePointESB-UT06NW-1)
     */
    getCarkParkByID(id: string): Promise<TfL['CarParkOccupancy']> {
        return this.sendRequest(`/Occupancy/CarPark/${id}`, {});
    }

    /**
     * Gets the occupancy for a charge connectors with a given id
     * @param id Charge Connector ID (Eg. ChargePointCM-24119-49940)
     */
    getChargeConnectorByID(id: string): Promise<TfL['ChargeConnectorOccupancy']> {
        return this.sendRequest(`/Occupancy/ChargeConnector/${id}`, {});
    }

    /**
     * Gets the occupancy for all car parks that have occupancy data
     */
    getAllCarParks(): Promise<Array<TfL['CarParkOccupancy']>> {
        return this.sendRequest(`/Occupancy/CarPark`, {});
    }

    /**
     * Gets the occupancy for all charge connectors
     */
    getAllChargeConnectors(): Promise<Array<TfL['ChargeConnectorOccupancy']>> {
        return this.sendRequest(`/Occupancy/ChargeConnector`, {});
    }
}
