import TfLAPI from './tfl';
import * as interfaces from './interfaces';

export default class Line extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /** Get all valid modes */
    listValidModes() {
        return this.sendRequest('/Line/Meta/Modes', {}, 'GET');
    }

    /** Gets a list of all severity codes */
    listSeverityCodes() {
        return this.sendRequest('/Line/Meta/Severity', {}, 'GET');
    }

    /** Gets a list of all disruption types */
    listDisruptionCategories() {
        return this.sendRequest('/Line/Meta/DisruptionCategories', {}, 'GET');
    }

    /** Gets a list of all service types */
    listServiceTypes() {
        return this.sendRequest('/Line/Meta/ServiceTypes', {}, 'GET');
    }

    /** Gets a list of the stations that serve the given line id */
    listAllStopPoints(line: string) {
        return this.sendRequest(`/Line/${line}/StopPoints`, {}, 'GET');
    }

    /** Gets all lines that serve the given modes. */
    getAllLinesFromMode(modes: Array<string | number>) {
        return this.sendRequest(`/Line/Mode/${this.arrayToCSV(modes)}`, {}, 'GET');
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
}
