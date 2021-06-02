import TfLAPI from './tfl';
import Crowding from './interfaces/crowding'

export default class Crowding extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Returns crowding information for Naptan
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     */
    getallByNaptan(naptanID: string): Promise<Crowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}`, {}, 'GET');
    }

    /**
     * Returns crowding information for Naptan for a specified day of week
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     * @param dayOfTheWeek The day of which you would like data to return (eg. MON, TUE, WED, THU, FRI, SAT, SUN)
     */
    getByNaptanDay(naptanID: string, dayOfTheWeek: string): Promise<Crowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}/${dayOfTheWeek}`, {}, 'GET');
    }
}
