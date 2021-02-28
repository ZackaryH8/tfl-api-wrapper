import TfLAPI from './tfl';
import * as interfaces from './interfaces';
import { ITrackerNet } from './interfaces/trackerNet';

export default class TrackerNet extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * This service will return detailed train prediction information for a nominated station on a nominated line within 100 minute range.
     * @param line A code representing the line (see Appendix A - {@link http://content.tfl.gov.uk/trackernet-data-services-guide-beta.pdf|TFL Docs})
     * @param stationCode A code representing the station (see Appendix B - {@link http://content.tfl.gov.uk/trackernet-data-services-guide-beta.pdf|TFL Docs})
     */
    getPredictionDetailed(line: string, stationCode: string): Promise<interfaces.ITrackerNet.RootObject> {
        return this.sendRequestTrackerNet(`/PredictionDetailed/${line}/${stationCode}`, {}, 'GET');
    }

    /**
     * This service will return the status of all lines on the network indicating any delays, disruptions or suspensions on the lines.
     * @param IncidentsOnly An indication of whether only lines that have incidents should be returned
     */
    async getAllLinesStatus(IncidentsOnly?: boolean): Promise<ITrackerNet.ArrayOfLineStatus> {
        let uri = IncidentsOnly ? '/IncidentsOnly' : '';
        const req = await this.sendRequestTrackerNet(`/LineStatus${uri}`, {}, 'GET');

        return req.ArrayOfLineStatus.LineStatus.map((line: any) => {
            return {
                id: line.$.ID,
                statusDetails: line.$.StatusDetails,
                branchDisruptions: line.BranchDisruptions,
                line: line.Line.map((x: any) => {
                    return { id: x.$.ID, name: x.$.Name };
                }),
                status: line.Status.map((obj: any) => {
                    return { id: obj.$.ID, cssClass: obj.$.CssClass, description: obj.$.Description, isActive: !!obj.$.IsActive };
                }),
                statusType: line.Status.map((obj: any) => {
                    return { id: obj.$.ID, description: obj.$.Description };
                }),
            };
        });
    }
}
