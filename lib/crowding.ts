import TfLAPI from './tfl';
import ICrowding from './interfaces/crowding';
import DaysOfTheWeek from './enums/DaysOfTheWeek';

export default class Crowding extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Get crowding information for Naptan
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     */
    getAllByNaptan(naptanID: string): Promise<ICrowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}`, {});
    }

    /**
     * Get crowding information for Naptan for a specified day of week
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     * @param dayOfTheWeek The day of which you would like data to return (eg. MON, TUE)
     */
    getByNaptanDay(naptanID: string, dayOfTheWeek: DaysOfTheWeek): Promise<ICrowding.Root> {
        return this.sendRequest(`/Crowding/${naptanID}/${dayOfTheWeek}`, {});
    }

    /**
     * Get live crowding information for Naptan
     * @param naptanID ID of the stop (eg. 940GZZLUASL)
     */
    getLiveByNaptan(naptan: string): Promise<ICrowding.Live> {
        return this.sendRequest(`/Crowding/${naptan}/Live`, {});
    }
}
