import TfLAPI from './tfl';
import * as interfaces from './interfaces/config';

export default class Line extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /** Get all valid modes */
    getValidModes() {
        return this.sendRequest('/Line/Meta/Modes', {}, 'GET');
    }

    /** Gets a list of all severity codes */
    getSeverityCodes() {
        return this.sendRequest('/Line/Meta/Severity', {}, 'GET');
    }

    /** Gets a list of all disruption types */
    getDisruptionCategories() {
        return this.sendRequest('/Line/Meta/DisruptionCategories', {}, 'GET');
    }

    /** Gets a list of all service types */
    getServiceTypes() {
        return this.sendRequest('/Line/Meta/ServiceTypes', {}, 'GET');
    }

    /** Gets a list of the stations that serve the given line id */
    getAllStopPoints(line: string) {
        return this.sendRequest(`/Line/${line}/StopPoints`, {}, 'GET');
    }

    /** Gets all lines that serve the given modes. */
    getAllFromMode(modes: Array<string | number>) {
        return this.sendRequest(`/Line/Mode/${this.arrayToCSV(modes)}`, {}, 'GET');
    }

    /**
     * Gets the line status of for given line ids e.g Minor Delays
     * @param lines A list of line ids e.g. victoria, circle, N133
     * @param detail Include details of the disruptions that are causing the line status including the affected stops and routes
     * @param startDate
     * @param endDate
     */
    getStatusByLine(lines: Array<string>, detail: boolean, startDate?: Date, endDate?: Date) {
        if (!startDate || !endDate) {
            return this.sendRequest(`/Line/${this.arrayToCSV(lines)}/Status`, { detail }, 'GET');
        } else {
            return this.sendRequest(`/Line/${this.arrayToCSV(lines)}/Status/${this.convertDate(startDate)}/to/${this.convertDate(endDate)}`, { detail }, 'GET');
        }
    }

    /** Gets the timetable for a specified station on the give line with specified destination */
    getTimetableFromTo(line: string, from: string, to: string) {
        return this.sendRequest(`/Line/${line}/Timetable/${from}/to/${to}`, {}, 'GET');
    }

    /** Gets the inbound timetable for a specified station on the give line */
    getTimetableFromStationIn(line: string, NaPTANID: string) {
        return this.sendRequest(`/Line/${line}/Timetable/${NaPTANID}`, { direction: 'inbound' }, 'GET');
    }

    /** Gets the outbound timetable for a specified station on the give line */
    getTimetableFromStationOut(line: string, NaPTANID: string) {
        return this.sendRequest(`/Line/${line}/Timetable/${NaPTANID}`, {}, 'GET');
    }

    /** Get the list of arrival predictions for given line ids based at the given stop
     * @param ids list of line ids e.g. ['victoria','circle','N133']
     * @param NaptanID Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL)
     * @param direction Optional. The direction of travel. Can be inbound or outbound or all. Default: all
     * @param destinationStationId Optional. Id of destination stop
     */
    getArrivalsByNaptan(ids: Array<string>, NaptanID: string, direction: string = 'all', destinationStationId?: string) {
        return this.sendRequest(`/Line/${this.arrayToCSV(ids)}/Arrivals/${NaptanID}`, { direction, destinationStationId }, 'GET');
    }
}
