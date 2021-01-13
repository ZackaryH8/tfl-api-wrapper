import tflAPI from './tfl';
import * as interfaces from './interfaces';

export default class Road extends tflAPI {
    constructor(config: interfaces.config) {
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
     * @param id ID(s) of the road(s)
     */
    getByID(...id: Array<string>) {
        return this.sendRequest(`/Road/${this.arrayToCSV(id)}`, {}, 'GET');
    }

    /**
     * Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
     * @param startDate
     * @param endDate
     * @param id
     */
    getStatusByID(startDate: any = '', endDate: any = '', ...id: Array<string>) {
        if (startDate && endDate) {
            startDate = startDate.toISOString().split('.')[0] + 'Z';
            endDate = endDate.toISOString().split('.')[0] + 'Z';
        }

        return this.sendRequest(`/Road/${this.arrayToCSV(id)}/Status`, { startDate: startDate?.toString(), endDate: endDate?.toString() }, 'GET');
    }

    /**
     * Gets a list of disrupted streets
     */
    getAllStreetDisruption() {
        return this.sendRequest(`/Road/all/Street/Disruption`, {}, 'GET');
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
