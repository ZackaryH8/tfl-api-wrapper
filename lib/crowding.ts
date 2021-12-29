import TfLAPI from './tfl';
import ICrowding from './interfaces/crowding';
import DaysOfTheWeek from './enums/DaysOfTheWeek';

export default class Crowding extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Returns crowding information for Naptan
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     */
    getAllByNaptan(naptanID: string): Promise<ICrowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}`, {}, 'GET');
    }

    /**
     * Returns crowding information for Naptan for a specified day of week
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     * @param dayOfTheWeek The day of which you would like data to return (eg. MON, TUE)
     */
    getByNaptanDay(naptanID: string, dayOfTheWeek: DaysOfTheWeek): Promise<ICrowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}/${dayOfTheWeek}`, {}, 'GET');
    }
}
