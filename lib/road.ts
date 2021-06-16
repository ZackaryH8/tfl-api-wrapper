import TfLAPI from './tfl';

export default class Road extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Get all roads managed by TfL
     */
    getAll() {
        return this.sendRequest('/Road', {}, 'GET');
    }

    /**
     * Get the road with the specified ID (Eg. A1)
     * @param ids ID(s) of the road(s)
     */
    getByID(ids: Array<string>) {
        return this.sendRequest(`/Road/${TfLAPI.arrayToCSV(ids)}`, {}, 'GET');
    }

    /**
     * Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed
     * @param ids
     * @param startDate
     * @param endDate
     */
    getStatusByID(ids: Array<string>, startDate?: Date, endDate?: Date) {
        return this.sendRequest(
            `/Road/${TfLAPI.arrayToCSV(ids)}/Status`,
            {
                startDate: TfLAPI.convertDate(startDate),
                endDate: TfLAPI.convertDate(endDate)
            },
            'GET'
        );
    }

    /**
     * Gets a list of disrupted streets
     * @param startDate
     * @param endDate
     */
    getAllStreetDisruption(startDate: Date, endDate: Date) {
        return this.sendRequest(
            `/Road/all/Street/Disruption`,
            {
                startDate: TfLAPI.convertDate(startDate),
                endDate: TfLAPI.convertDate(endDate)
            },
            'GET'
        );
    }

    /**
     * Gets a list of active disruptions filtered by disruption Ids.
     * @param ids
     * @param stripContent When true, removes every property/node
     *                     except for id, point, severity, severityDescription,
     *                     startDate, endDate, corridor details, location and comments.
     */
    getAllDisruptionsByID(ids: Array<string>, stripContent?: boolean) {
        return this.sendRequest(
            `/Road/all/Disruption/${TfLAPI.arrayToCSV(ids)}`,
            {
                stripContent
            },
            'GET'
        );
    }

    /**
     * Gets a list of valid RoadDisruption categories
     */
    getCategories() {
        return this.sendRequest('/Road/Meta/Categories', {}, 'GET');
    }

    /**
     * Gets a list of valid RoadDisruption severity codes
     */
    getSeverities() {
        return this.sendRequest('/Road/Meta/Severities', {}, 'GET');
    }
}
