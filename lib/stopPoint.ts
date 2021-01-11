import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class StopPoint extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * Search StopPoints by their common name. Will not return a valid NaPTAN for HUB
     * @param name Name of station
     * @param modes Eg. tfl, dlr
     */
    search(name: string, modes: string) {
        return this.sendRequest(`/StopPoint/Search/${name}`, {}, 'GET');
    }

    /**
     * Get all service arrivals and departures
     * @param id
     */
    listStationArrivals(id: string) {
        return this.sendRequest(`/StopPoint/${id}/Arrivals`, {}, 'GET');
    }

    /**
     * Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
     * @param NaPTAN
     * @param getFamily Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
     * @param flattenResponse Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).
     */
    getDisruptionsByNaPTAN(NaPTAN: string, getFamily: boolean, flattenResponse: boolean) {
        return this.sendRequest(
            `/StopPoint/${NaPTAN}/Disruption`,
            {
                getFamily: getFamily,
                flattenResponse: flattenResponse,
            },
            'GET'
        );
    }

    /**
     * Gets a distinct list of disrupted stop points for the given modes
     * @param modes An array of modes e.g. ['tube', 'dlr']
     */
    getDisruptionsByMode(modes: Array<string>) {
        return this.sendRequest(`/StopPoint/${this.arrayToCSV(modes)}/Disruption`, {}, 'GET');
    }

    /**
     * Gets Stop points that are reachable from a station/line combination
     * @param NaPTAN
     * @param lineID Line id of the line to filter by (e.g. victoria)
     * @param serviceType Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    getReachableStationsByNaPTAN(NaPTAN: string, lineID: string, serviceType: Array<string> = ['Regular']) {
        return this.sendRequest(`/StopPoint/${NaPTAN}/CanReachOnLine/${lineID}`, { serviceTypes: serviceType }, 'GET');
    }
}
