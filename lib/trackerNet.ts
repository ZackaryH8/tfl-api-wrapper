import TfLAPI from './tfl';
import * as interfaces from './interfaces';

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
}
