import TfLAPI from './tfl';
import * as ITrackerNet from './interfaces/trackerNet';
import TrackerNetLines from './enums/lines';
import TrackerNetStations from './enums/stationCodes';

export default class TrackerNet extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    async getPredictionSummary(line: TrackerNetLines): Promise<getPredictionSummary.Root> {
        const request = await this.sendRequestTrackerNet(`/PredictionSummary/${line}`, {}, 'GET');
        const root = request.ROOT;

        return {
            currentTime: root.Time[0].$.TimeStamp,
            stations: root.S.map((station: any) => {
                return {
                    code: station.$.Code,
                    name: station.$.N.slice(0, -1),
                    platforms: station.P.map((platform: any) => {
                        return {
                            name: platform.$.N,
                            code: platform.$.Code,
                            next: platform.$.Next,
                            trains: platform?.T?.map((train: any) => {
                                return {
                                    setNumber: train.$.S,
                                    tripNumber: train.$.T,
                                    destinationCode: train.$.D,
                                    timeToStation: train.$.C,
                                    currentLocation: train.$.L,
                                    destination: train.$.D
                                };
                            })
                        };
                    })
                };
            })
        };
    }

    /**
     * Get detailed train prediction information for a nominated station on a nominated line within 100 minute range.
     * @param {TrackerNetLines} line
     * @param {TrackerNetStations} stationCode
     * @returns {<ITrackerNet.PredictionDetailed>}
     */
    async getPredictionDetailed(line: TrackerNetLines, stationCode: TrackerNetStations): Promise<getPredictionDetailed.Root> {
        const request = await this.sendRequestTrackerNet(`/PredictionDetailed/${line}/${stationCode}`, {}, 'GET');
        const root = request.ROOT;
        return {
            information: {
                code: root.S[0].$.Code,
                name: root.S[0].$.N.slice(0, -1),
                currentTime: root.S[0].$.CurTime
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
                            secondsToStation: train.$.SecondsTo,
                            timeToStation: train.$.TimeTo,
                            currentLocation: train.$.Location,
                            destination: train.$.Destination,
                            destinationCode: train.$.DestCode,
                            departedTime: train.$.DepartTime,
                            departureInterval: train.$.DepartInterval,
                            hasDeparted: !!train.$.Departed,
                            direction: train.$.Direction,
                            trackCode: train.$.TrackCode,
                            line: train.$.LN,
                            leadingCarNumber: train.$.LeadingCarNo
                        };
                    })
                };
            })
        };
    }

    /**
     * Get the status of all lines on the network indicating any delays, disruptions or suspensions on the lines.
     * @param incidentsOnly An indication of whether only lines that have incidents should be returned
     */
    async getAllLinesStatus(incidentsOnly?: boolean): Promise<getPredictionDetailed.ArrayOfLineStatus[]> {
        const incidentsOnlyCheck = incidentsOnly ? '/IncidentsOnly' : '';
        const request = await this.sendRequestTrackerNet(`/LineStatus${incidentsOnlyCheck}`, {}, 'GET');

        return request.ArrayOfLineStatus.LineStatus.map((line: any) => {
            return {
                id: line.$.ID,
                name: line.Line[0].$.Name,
                statusDetails: line.$.StatusDetails,
                status: line.Status.map((obj: any) => {
                    return {
                        id: obj.$.ID,
                        cssClass: obj.$.CssClass,
                        description: obj.$.Description,
                        isActive: !!obj.$.IsActive
                    };
                })

                // The data below is duplicated from above
                // statusType: line.Status.map((obj: any) => {
                //     return { id: obj.$.ID, description: obj.$.Description };
                // }),
            };
        });
    }

    /**
     *  station status information for all stations.
     * @param {boolean} incidentsOnly Get station status information for stations with incidents only.
     */
    async getAllStationStatus(incidentsOnly?: boolean): Promise<getAllStationStatus> {
        const incidentsOnlyCheck = incidentsOnly ? '/IncidentsOnly' : '';
        const request = await this.sendRequestTrackerNet(`/StationStatus${incidentsOnlyCheck}`, {}, 'GET');

        return request.ArrayOfStationStatus.StationStatus.map((station: any) => {
            return {
                stationID: station.$.ID,
                statusDetails: station.$.StatusDetails,
                stationName: station.Station[0].$.Name,
                description: station.Status[0].$.Description,
                isActive: !!station.Status[0].$.IsActive,
                cssClass: station.Status[0].$.CssClass
            };
        });
    }
}
