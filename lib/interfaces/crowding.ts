declare module Crowding {
    export interface TimeBand {
        timeBand: string;
        percentageOfBaseLine: number;
    }

    export interface DaysOfWeek {
        dayOfWeek: string;
        amPeakTimeBand: string;
        pmPeakTimeBand: string;
        timeBands: TimeBand[];
    }

    export interface Root {
        naptan: string;
        daysOfWeek?: DaysOfWeek[];
        isFound: boolean;
        isAlwaysQuiet: boolean;
    }
}

export default Crowding;
