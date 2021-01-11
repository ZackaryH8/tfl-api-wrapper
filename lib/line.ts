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

    /** Gets lines that serve the given modes. */
    getAllLinesFromMode(modes: Array<string | number>) {
        return this.sendRequest(`/Line/Mode/${this.arrayToCSV(modes)}`, {}, 'GET');
    }
}
