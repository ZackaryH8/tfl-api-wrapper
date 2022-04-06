import TfLAPI from './tfl';
import direction from './enums/direction';

export default class TravelTimes extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /**
     * Gets the TravelTime overlay
     * @param z The zoom level
     * @param pinLat The latitude of the pin
     * @param pinLon The longitude of the pin
     * @param mapCenterLat The map center latitude
     * @param mapCenterLon The map center longitude
     * @param scenarioTitle The title of the scenario
     * @param timeOfDayID The id for the time of day (AM/INTER/PM)
     * @param modeID The id of the mode
     * @param width The width of the requested overlay
     * @param height The height of the overlay
     * @param direction The direction of travel
     * @param travelTimeInterval
     * @returns
     */
    async getOverlay(
        z: number,
        pinLat: number,
        pinLon: number,
        mapCenterLat: number,
        mapCenterLon: number,
        scenarioTitle: string,
        timeOfDayID: string,
        modeID: string,
        width: number,
        height: number,
        direction: direction,
        travelTimeInterval: number
    ) {
        return this.sendRequest(`/TravelTimes/overlay/${z}/mapcenter/${mapCenterLat}/${mapCenterLon}/pinLocation/${pinLat}/${pinLon}/dimensions/${width}/${height}`, {});
    }
}
