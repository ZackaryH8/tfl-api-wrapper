import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class StopPoint extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * Gets the list of available StopPoint additional information categories
     */
    getCategories() {
        return this.sendRequest(`/StopPoint/Meta/Categories`, {}, 'GET');
    }
    /**
     * Gets the list of available StopPoint types
     */
    getTypes() {
        return this.sendRequest(`/StopPoint/Meta/StopTypes`, {}, 'GET');
    }

    /**
     * Gets the list of available StopPoint modes
     */
    getModes() {
        return this.sendRequest(`/StopPoint/Meta/Modes`, {}, 'GET');
    }

    /**
     * Gets a list of StopPoints corresponding to the given list of stop ids
     * @param ids A list of stop point ids (station naptan code e.g. 940GZZLUASL).
     * @param includeCrowding Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}
     */
    getByIDs(ids: Array<string>, includeCrowding: boolean) {
        return this.sendRequest(`/StopPoint/${this.arrayToCSV(ids)}`, { includeCrowding }, 'GET');
    }

    /**
     * Gets all stop points of a given type
     * @param types A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint.
     */
    getAllByStopType(types: Array<string>) {
        return this.sendRequest(`/StopPoint/${this.arrayToCSV(types)}`, {}, 'GET');
    }

    /**
     * Gets the service types for a given Stop Point
     * @param id
     * @param lineIds
     * @param modes
     */
    getServiceTypesByID(id: string, lineIds?: Array<string>, modes?: Array<string>) {
        return this.sendRequest(`/StopPoint/ServiceTypes`, { id, lineIds, modes }, 'GET');
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
     * Get all service arrivals
     * @param id
     */
    getStationArrivals(id: string) {
        return this.sendRequest(`/StopPoint/${id}/Arrivals`, {}, 'GET');
    }

    /**
     *
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     * @param lineIds List of line ids e.g. tfl-rail, london-overground, thameslink
     */
    getArrivalDepartures(id: string, lineIds: Array<string>) {
        return this.sendRequest(`/StopPoint/${id}/ArrivalsDepartures`, {}, 'GET');
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
                getFamily,
                flattenResponse,
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
     * @param NaPTAN The id (station naptan code e.g. 940GZZLUASL)
     * @param lineID Line id of the line to filter by (e.g. victoria)
     * @param serviceTypes  List of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular'
     */
    getReachableStationsByNaPTAN(NaPTAN: string, lineID: string, serviceTypes: Array<string> = ['Regular']) {
        return this.sendRequest(`/StopPoint/${NaPTAN}/CanReachOnLine/${lineID}`, { serviceTypes: this.arrayToCSV(serviceTypes) }, 'GET');
    }

    /**
     * Get the route sections for all the lines that service the given stop point id
     * @param id
     * @param serviceTypes
     */
    getRouteSectionByID(id: string, serviceTypes: Array<string> = ['Regular']) {
        return this.sendRequest(`/StopPoint/${id}/Route`, { serviceTypes: this.arrayToCSV(serviceTypes) }, 'GET');
    }

    /**
     * Gets a list of StopPoints within {radius} by the specified criteria
     * @param stopTypes
     * @param radius
     * @param useStopPointHierarchy
     * @param modes
     * @param categories
     * @param returnLines
     * @param latitude
     * @param longitude
     */
    getInRadius(stopTypes: Array<string>, radius: number, useStopPointHierarchy: boolean, modes: Array<string>, categories: Array<string>, returnLines: boolean, latitude: number, longitude: number) {
        return this.sendRequest(
            `/StopPoint`,
            { stopTypes: this.arrayToCSV(stopTypes), radius, useStopPointHierarchy, modes: this.arrayToCSV(modes), categories: this.arrayToCSV(categories), returnLines, latitude, longitude },
            'GET'
        );
    }
}
