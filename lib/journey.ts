import TfL from './interfaces/tfl';
import TfLAPI from './tfl';

export default class Journey extends TfLAPI {
    constructor(config: string) {
        super(config);
    }

    /** Get all valid modes */
    getModes(): Promise<Array<TfL['Mode']>> {
        return this.sendRequest('/Journey/Meta/Modes', {});
    }

    /**
     * Perform a Journey Planner search from the parameters provided
     * @param from Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     * @param to Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     * @param via Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     * @param nationalSearch Does the journey cover stops outside London? eg. "nationalSearch=true"
     * @param date The date must be in yyyyMMdd format
     * @param time The time must be in HHmm format
     * @param timeIs Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
     * @param journeyPreference The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
     * @param mode The mode must be an array of modes. eg possible options: ["public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"]
     * @param accessibilityPreference The accessibility preference must be an array eg. ["noSolidStairs", "noEscalators", "noElevators", "stepFreeToVehicle", "stepFreeToPlatform"]
     * @param fromName An optional name to associate with the origin of the journey in the results.
     * @param toName An optional name to associate with the destination of the journey in the results.
     * @param viaName An optional name to associate with the via point of the journey in the results.
     * @param maxTransferMinutes The max walking time in minutes for transfer eg. "120"
     * @param maxWalkingMinutes The max walking time in minutes for journeys eg. "120"
     * @param walkingSpeed The walking speed. eg possible options: "slow" | "average" | "fast".
     * @param cyclePreference The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
     * @param adjustment Time adjustment command. eg possible options: "TripFirst" | "TripLast"
     * @param bikeProficiency An array of cycling proficiency levels. eg possible options: ["easy,moderate,fast"]
     * @param alternativeCycle Option to determine whether to return alternative cycling journey
     * @param alternativeWalking Option to determine whether to return alternative walking journey
     * @param applyHtmlMarkup Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
     * @param useMultiModalCall A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
     * @param walkingOptimization A boolean to indicate whether to optimize journeys using walking
     * @param taxiOnlyTrip A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".
     * @param routeBetweenEntrances A boolean to indicate whether public transport routes should include directions between platforms and station entrances.
     */
    journeyPlannerSearch(
        from: string,
        to: string,
        via?: string,
        nationalSearch?: boolean,
        date?: string,
        time?: string,
        timeIs?: string,
        journeyPreference?: string,
        mode?: string[],
        accessibilityPreference?: string[],
        fromName?: string,
        toName?: string,
        viaName?: string,
        maxTransferMinutes?: string,
        maxWalkingMinutes?: string,
        walkingSpeed?: string,
        cyclePreference?: string,
        adjustment?: string,
        bikeProficiency?: string[],
        alternativeCycle?: boolean,
        alternativeWalking?: boolean,
        applyHtmlMarkup?: boolean,
        useMultiModalCall?: boolean,
        walkingOptimization?: boolean,
        taxiOnlyTrip?: boolean,
        routeBetweenEntrances?: boolean
    ): Promise<TfL['JourneyPlanner.ItineraryResult']> {
        return this.sendRequest(`/Journey/JourneyResults/${from}/to/${to}`, {
            via,
            nationalSearch,
            date,
            time,
            timeIs,
            journeyPreference,
            mode: TfLAPI.arrayToCSV(mode),
            accessibilityPreference: TfLAPI.arrayToCSV(accessibilityPreference),
            fromName,
            toName,
            viaName,
            maxTransferMinutes,
            maxWalkingMinutes,
            walkingSpeed,
            cyclePreference,
            adjustment,
            bikeProficiency: TfLAPI.arrayToCSV(bikeProficiency),
            alternativeCycle,
            alternativeWalking,
            applyHtmlMarkup,
            useMultiModalCall,
            walkingOptimization,
            taxiOnlyTrip,
            routeBetweenEntrances
        });
    }
}
