import TfL from './interfaces/tfl';
import TfLAPI from './tfl';

export default class Line extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /** Get all valid modes */
    getModes(): Promise<Array<TfL['Mode']>> {
        return this.sendRequest('/Line/Meta/Modes', {});
    }

    /** Gets a list of all severity codes */
    getSeverityCodes(): Promise<Array<TfL['StatusSeverity']>> {
        return this.sendRequest('/Line/Meta/Severity', {});
    }

    /** Gets a list of all disruption types */
    getDisruptionCategories(): Promise<Array<TfL['Disruption']['category']>> {
        return this.sendRequest('/Line/Meta/DisruptionCategories', {});
    }

    /** Gets a list of all service types */
    getServiceTypes(): Promise<Array<'Regular' | 'Night'>> {
        return this.sendRequest('/Line/Meta/ServiceTypes', {});
    }

    /** Gets a list of the stations that serve the given line id */
    getAllStopPoints(line: string): Promise<Array<TfL['StopPoint']>> {
        return this.sendRequest(`/Line/${line}/StopPoints`, {});
    }

    /**
     * Gets all lines that serve the given modes
     * @param modes An array of modes e.g. tube, tram
     */
    getAllByModes(modes: Array<string>): Promise<Array<TfL['Line']>> {
        return this.sendRequest(`/Line/Mode/${TfLAPI.arrayToCSV(modes)}`, {});
    }

    /**
     * Gets the line status of for given line ids e.g Minor Delays
     * @param lines A list of line ids e.g. victoria, circle, N133
     * @param detail Include details of the disruptions that are causing the line status including the affected stops and routes
     * @param startDate
     * @param endDate
     */
    getStatusByLine(lines: Array<string>, detail: boolean = false, startDate?: Date, endDate?: Date): Promise<Array<TfL['Line']>> {
        if (!startDate || !endDate) {
            return this.sendRequest(`/Line/${TfLAPI.arrayToCSV(lines)}/Status`, { detail });
        } else {
            return this.sendRequest(`/Line/${TfLAPI.arrayToCSV(lines)}/Status/${TfLAPI.convertDate(startDate)}/to/${TfLAPI.convertDate(endDate)}`, { detail });
        }
    }

    /**
     * Gets the line status of for all lines for the given modes
     * @param modes A comma-separated list of modes to filter by. e.g. tube,dlr
     * @param detail Include details of the disruptions that are causing the line status including the affected stops and routes
     * @param severityLevel If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level
     */
    getStatusByModes(modes: Array<string>, detail?: boolean, severityLevel?: string): Promise<Array<TfL['Line']>> {
        return this.sendRequest(`/Line/Mode/${TfLAPI.arrayToCSV(modes)}/Status`, { detail, severityLevel });
    }

    /** Gets the timetable for a specified station on the give line with specified destination */
    getTimetableFromTo(line: string, from: string, to: string): Promise<Array<TfL['TimetableResponse']>> {
        return this.sendRequest(`/Line/${line}/Timetable/${from}/to/${to}`, {});
    }

    /**
     * Gets the inbound timetable for a specified station on the give line
     *
     * @param line Id of the line e.g. 'victoria'
     * @param NaptanID Id of the stop (station naptan code e.g. 940GZZLUASL)
     * @param direction What direction you want the timetable for. Leave blank for outbound or 'inbound'
     */
    getTimetableFromStation(line: string, NaPTANID: string, direction?: string): Promise<Array<TfL['TimetableResponse']>> {
        return this.sendRequest(`/Line/${line}/Timetable/${NaPTANID}`, { direction });
    }

    /** Get the list of arrival predictions for given line ids based at the given stop
     * @param ids list of line ids e.g. ['victoria','circle','N133']
     * @param NaptanID Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL)
     * @param direction Optional. The direction of travel. Can be inbound or outbound or all. Default: all
     * @param destinationStationId Optional. Id of destination stop
     */
    getArrivalsByNaptan(ids: Array<string>, NaptanID: string, direction: string = 'all', destinationStationId?: string): Promise<Array<TfL['Prediction']>> {
        return this.sendRequest(`/Line/${TfLAPI.arrayToCSV(ids)}/Arrivals/${NaptanID}`, { direction, destinationStationId });
    }

    /**
     * Get disruptions for the given line ids
     * @param ids list of line ids e.g. ['victoria','circle','N133']
     */
    getDistruptionsByID(ids: Array<string>): Promise<Array<TfL['Disruption']>> {
        return this.sendRequest(`/Line/${TfLAPI.arrayToCSV(ids)}/Disruption`, {});
    }

    /**
     * Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
     * @param serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    getAllValidRoutes(serviceTypes?: string): Promise<Array<TfL['Line']>> {
        return this.sendRequest(`/Line/Route`, { serviceTypes });
    }
}
