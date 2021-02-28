import TfLAPI from './tfl';
import * as interfaces from './interfaces/config';
import { ITrackerNet } from './interfaces/trackerNet';

export default class TrackerNet extends TfLAPI {
    constructor(config: interfaces.config) {
        super(config);
    }

    /**
     * This service will return detailed train prediction information for a nominated station on a nominated line within 100 minute range.
     * @param line A code representing the line (Appendix A - {@link http://content.tfl.gov.uk/trackernet-data-services-guide-beta.pdf TFL Docs})
     * @param stationCode A code representing the station (Appendix B - {@link http://content.tfl.gov.uk/trackernet-data-services-guide-beta.pdf TFL Docs})
     */
    async getPredictionDetailed(line: string, stationCode: string): Promise<ITrackerNet.PredictionDetailed> {
        const request = await this.sendRequestTrackerNet(`/PredictionDetailed/${line}/${stationCode}`, {}, 'GET');
        const root = request.ROOT;
        return {
            information: {
                code: root.S[0].$.Code,
                name: root.S[0].$.N.slice(0, -1),
                currentTime: root.S[0].$.CurTime,
            },
            platforms: root.S[0].P.map((platform: any) => {
                return {
                    name: platform.$.N,
                    number: platform.$.Num,
                    trackCode: platform.$.TrackCode,
                    nextTrain: platform.$.NextTrain,
                    trains: platform?.T?.map((train: any) => {
                        return {
                            trainID: train.$.TrainId,
                            LCID: train.$.LCID,
                            setNumber: train.$.SetNo,
                            tripNumber: train.$.TripNo,
                            timeToStation: train.$.TimeTo,
                            currentLocation: train.$.Location,
                            destination: train.$.Destination,
                            destinationCode: train.$.DestCode,
                            departedTime: train.$.DepartTime,
                            departureInterval: train.$.DepartInterval,
                            hasDeparted: !!train.$.Departed,
                            direction: train.$.Direction,
                            isStalled: train.$.IsStalled,
                            trackCode: train.$.TrackCode,
                            line: train.$.LN,
                            leadingCarNumber: train.$.LeadingCarNo,
                        };
                    }),
                };
            }),
        };
    }

    /**
     * This service will return the status of all lines on the network indicating any delays, disruptions or suspensions on the lines.
     * @param incidentsOnly An indication of whether only lines that have incidents should be returned
     */
    async getAllLinesStatus(incidentsOnly?: boolean): Promise<ITrackerNet.ArrayOfLineStatus[]> {
        const incidentsOnlyCheck = incidentsOnly ? '/IncidentsOnly' : '';
        const request = await this.sendRequestTrackerNet(`/LineStatus${incidentsOnlyCheck}`, {}, 'GET');

        return request.ArrayOfLineStatus.LineStatus.map((line: any) => {
            return {
                id: line.$.ID,
                name: line.Line[0].$.Name,
                statusDetails: line.$.StatusDetails,
                branchDisruptions: line.BranchDisruptions,
                status: line.Status.map((obj: any) => {
                    return { id: obj.$.ID, cssClass: obj.$.CssClass, description: obj.$.Description, isActive: !!obj.$.IsActive };
                }),

                // The data below is duplicated from above
                // statusType: line.Status.map((obj: any) => {
                //     return { id: obj.$.ID, description: obj.$.Description };
                // }),
            };
        });
    }
}
