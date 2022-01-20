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

    export interface Live {
        dataAvailable: boolean;
        percentageOfBaseline: number;
        timeUtc: Date;
        timeLocal: Date;
    }

    export interface Root {
        naptan: string;
        daysOfWeek?: DaysOfWeek[];
        isFound: boolean;
        isAlwaysQuiet: boolean;
    }
}

export default Crowding;
