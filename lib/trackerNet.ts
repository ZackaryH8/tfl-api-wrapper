import TfLAPI from './tfl';
import * as humps from 'humps';
import * as ITrackerNet from './interfaces/trackerNet';
import TrackerNetLines from './enums/lines';
import TrackerNetStations from './enums/stationCodes';

export default class TrackerNet extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    async getPredictionSummary(line: TrackerNetLines): Promise<ITrackerNet.getPredictionSummary.Root> {
        const request = await this.sendRequestTrackerNet(`/PredictionSummary/${line}`, 'GET', true);

        //@ts-expect-error
        request = humps.camelizeKeys(request.ROOT, function (key, convert) {
            return /^[A-Z0-9_]+$/.test(key) ? key.toLowerCase() : convert(key);
        });

        return request;
    }

    /**
     * Get detailed train prediction information for a nominated station on a nominated line within 100 minute range.
     * @param {TrackerNetLines} line
     * @param {TrackerNetStations} stationCode
     * @returns {<ITrackerNet.PredictionDetailed>}
     */
    async getPredictionDetailed(line: TrackerNetLines, stationCode: TrackerNetStations): Promise<ITrackerNet.getPredictionDetailed.Root> {
        if (!line) console.error('You must enter a line code!');
        if (!stationCode) console.error('You must enter a station code!');
        const request = await this.sendRequestTrackerNet(`/PredictionDetailed/${line}/${stationCode}`, 'GET', true);

        //@ts-expect-error
        request = humps.camelizeKeys(request.ROOT, function (key, convert) {
            return /^[A-Z0-9_]+$/.test(key) ? key.toLowerCase() : convert(key);
        });

        delete request['xmlns'];
        delete request['xmlns:xsd'];
        delete request['xmlns:xsi'];
        delete request.disclaimer;

        return request;
    }

    /**
     * Get the status of all lines on the network indicating any delays, disruptions or suspensions on the lines.
     * @param {boolean} incidentsOnly An indication of whether only lines that have incidents should be returned. Default: false
     */
    async getAllLinesStatus(incidentsOnly: boolean = false): Promise<ITrackerNet.getAllLinesStatus.Root> {
        const request = await this.sendRequestTrackerNet(`/LineStatus${TrackerNet.incidentsCheck(incidentsOnly)}`, 'GET', false);

        //@ts-expect-error
        return humps.camelizeKeys(request.ArrayOfLineStatus.LineStatus, function (key, convert) {
            return /^[A-Z0-9_]+$/.test(key) ? key.toLowerCase() : convert(key);
        });
    }

    /**
     * Get the status of all stations on the network indicating any disruptions or closures of stations.
     * @param {boolean} incidentsOnly Get station status information for stations with incidents only. Default: false
     */
    async getAllStationStatus(incidentsOnly: boolean = false): Promise<ITrackerNet.getAllStationStatus.Root> {
        const request = await this.sendRequestTrackerNet(`/StationStatus${TrackerNet.incidentsCheck(incidentsOnly)}`, 'GET', false);

        //@ts-expect-error
        return humps.camelizeKeys(request.ArrayOfStationStatus.StationStatus, function (key, convert) {
            return /^[A-Z0-9_]+$/.test(key) ? key.toLowerCase() : convert(key);
        });
    }
}
