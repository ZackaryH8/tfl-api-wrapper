import TfLAPI from './tfl';
import Config from './interfaces/config';
import Crowding from './interfaces/crowding'
import DaysOfTheWeek from './enums/DaysOfTheWeek'

export default class Crowding extends TfLAPI {
    constructor(config: Config) {
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
     * Returns crowding information for Naptan for Day of Week
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     * @param dayOfTheWeek The day of which you would like data to return (eg. MON, TUE)
     */
    getByNaptanDay(naptanID: string, dayOfTheWeek: DaysOfTheWeek): Promise<Crowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}/${dayOfTheWeek}`, {}, 'GET');
    }
}
