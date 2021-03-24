declare module Crowding {

    export interface TimeBand {
        timeBand: string;
        percentageOfBaseLine: number;
    }

    export interface Root {
        naptan: string;
        dayOfWeek: string;
        amPeakTimeBand: string;
        pmPeakTimeBand: string;
        timeBands: TimeBand[];
        isFound: boolean;
    }

}

export default Crowding;
