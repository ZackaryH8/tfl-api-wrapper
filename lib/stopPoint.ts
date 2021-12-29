import TfLAPI from './tfl';
import TfL from './interfaces/tfl';

export default class StopPoint extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Gets the list of available StopPoint additional information categories
     */
    getCategories(): Promise<Array<TfL['StopPointCategory']>> {
        return this.sendRequest(`/StopPoint/Meta/Categories`, {}, 'GET');
    }
    /**
     * Gets the list of available StopPoint types
     */
    getTypes(): Promise<Array<string>> {
        return this.sendRequest(`/StopPoint/Meta/StopTypes`, {}, 'GET');
    }

    /**
     * Gets the list of available StopPoint modes
     */
    getModes(): Promise<Array<TfL['Mode']>> {
        return this.sendRequest(`/StopPoint/Meta/Modes`, {}, 'GET');
    }

    /**
     * Gets a list of StopPoints corresponding to the given list of stop ids
     * @param ids A list of stop point ids (station naptan code e.g. 940GZZLUASL).
     * @param includeCrowdingData Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}
     */
    getByIDs(ids: Array<string>, includeCrowdingData: boolean): Promise<Array<TfL['StopPoint']>> {
        return this.sendRequest(`/StopPoint/${TfLAPI.arrayToCSV(ids)}`, { includeCrowdingData }, 'GET');
    }

    /**
     * Gets all stop points of a given type
     * @param types A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint
     */
    getAllByStopType(types: Array<string>): Promise<Array<TfL['StopPoint']>> {
        return this.sendRequest(`/StopPoint/Type/${TfLAPI.arrayToCSV(types)}`, {}, 'GET');
    }

    /**
     * Gets the service types for a given Stop Point
     * @param id
     * @param lineIds
     * @param modes
     */
    getServiceTypesByID(id: string, lineIds?: Array<string>, modes?: Array<string>): Promise<Array<TfL['LineServiceType']>> {
        return this.sendRequest(`/StopPoint/ServiceTypes`, { id, lineIds, modes }, 'GET');
    }

    /**
     * Search StopPoints by their common name. Will not return a valid NaPTAN for HUB
     * @param name Name of station
     * @param modes Eg. tfl, dlr
     */
    search(name: string, modes: string): Promise<TfL['SearchResponse']> {
        return this.sendRequest(`/StopPoint/Search/${name}`, { modes }, 'GET');
    }

    /**
     * Get all service arrivals
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     */
    getStationArrivals(id: string): Promise<Array<TfL['Prediction']>> {
        return this.sendRequest(`/StopPoint/${id}/Arrivals`, {}, 'GET');
    }

    /**
     *
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     * @param lineIds List of line ids e.g. tfl-rail, london-overground, thameslink
     */
    // getArrivalDepartures(id: string, lineIds: Array<string>) {
    //     return this.sendRequest(`/StopPoint/${id}/ArrivalsDepartures`, { lineIds }, 'GET');
    // }

    /**
     * Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have
     * @param ids A list of StopPoint ids (station naptan code e.g. 940GZZLUAS)
     * @param getFamily Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
     * @param includeRouteBlockedStops
     * @param flattenResponse Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true)
     */
    getDisruptionsByID(ids: Array<string>, getFamily: boolean, includeRouteBlockedStops: boolean, flattenResponse: boolean): Promise<Array<TfL['DisruptedPoint']>> {
        return this.sendRequest(
            `/StopPoint/${TfLAPI.arrayToCSV(ids)}/Disruption`,
            {
                getFamily,
                includeRouteBlockedStops,
                flattenResponse
            },
            'GET'
        );
    }

    /**
     * Gets a distinct list of disrupted stop points for the given modes
     * @param modes An array of modes e.g. ['tube', 'dlr']
     * @param includeRouteBlockedStops
     */
    getDisruptionsByMode(modes: Array<string>, includeRouteBlockedStops: boolean): Promise<Array<TfL['DisruptedPoint']>> {
        return this.sendRequest(`/StopPoint/Mode/${TfLAPI.arrayToCSV(modes)}/Disruption`, { includeRouteBlockedStops }, 'GET');
    }

    /**
     * Gets Stop points that are reachable from a station/line combination
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     * @param lineID Line id of the line to filter by (e.g. victoria)
     * @param serviceTypes List of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular'.
     */
    getReachableStationsByID(id: string, lineID: string, serviceTypes: Array<string> = ['Regular']): Promise<Array<TfL['Identifier']>> {
        return this.sendRequest(`/StopPoint/${id}/CanReachOnLine/${lineID}`, { serviceTypes: TfLAPI.arrayToCSV(serviceTypes) }, 'GET');
    }

    /**
     * Get the route sections for all the lines that service the given stop point id
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     * @param serviceTypes List of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular'.
     */
    getRouteSectionByID(id: string, serviceTypes: Array<string> = ['Regular']): Promise<Array<TfL['StopPointRouteSection']>> {
        return this.sendRequest(`/StopPoint/${id}/  `, { serviceTypes: TfLAPI.arrayToCSV(serviceTypes) }, 'GET');
    }

    /**
     * Gets a list of StopPoints within {radius} by the specified criteria
     * @param stopTypes a list of stopTypes that should be returned.
     * @param radius The radius of the bounding circle in metres (default : 200)
     * @param useStopPointHierarchy Re-arrange the output into a parent/child hierarchy.
     * @param modes The list of modes to search (e.g. tube, dlr)
     * @param categories an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties.
     * @param returnLines True to return the lines that each stop point serves as a nested resource.
     * @param latitude
     * @param longitude
     */
    getInRadius(
        stopTypes: Array<string>,
        radius: number = 200,
        useStopPointHierarchy: boolean,
        modes: Array<string>,
        categories: Array<string>,
        returnLines: boolean,
        latitude: number,
        longitude: number
    ) {
        return this.sendRequest(
            `/StopPoint`,
            { stopTypes: TfLAPI.arrayToCSV(stopTypes), radius, useStopPointHierarchy, modes: TfLAPI.arrayToCSV(modes), categories: TfLAPI.arrayToCSV(categories), returnLines, latitude, longitude },
            'GET'
        );
    }

    /**
     * Gets a StopPoint for a given sms code.
     * @param smsID A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.
     * @param output If set to "web", a 302 redirect to relevant website bus stop page is returned. All other values are ignored.
     */
    getBySMSCode(smsID: number, output?: string): Promise<TfL['StopPoint']> {
        return this.sendRequest(`/StopPoint/Sms/${smsID}`, { output }, 'GET');
    }

    /**
     * Gets a list of taxi ranks corresponding to the given stop point id
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     */
    getTaxiRanksByID(id: string): Promise<Array<TfL['Place']>> {
        return this.sendRequest(`/StopPoint/${id}/TaxiRanks`, {}, 'GET');
    }

    /**
     * Get car parks corresponding to the given stop point id
     * @param id A StopPoint id (station naptan code e.g. 940GZZLUAS)
     */
    getCarParksByID(id: string): Promise<Array<TfL['Place']>> {
        return this.sendRequest(`/StopPoint/${id}/CarParks`, {}, 'GET');
    }
}
