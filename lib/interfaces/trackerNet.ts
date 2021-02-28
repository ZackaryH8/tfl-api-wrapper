export declare module ITrackerNet {
    export interface Line {
        /** A code representing the line */
        id: string;

        /** The line name */
        name: string;
    }

    export interface Status {
        /** Status ID A numeric code representing the status of the line */
        id: string;

        /** A text code representing the general status of the line, e.g. GoodService, DisruptedService */
        cssClass: string;

        /** A description of the status of the line e.g. Part Suspended, Severe Delays */
        description: string;

        /** A Boolean indicating if the status shown is active */
        isActive: boolean;
    }

    export interface StatusType {
        id: string;
        description: string;
    }

    export interface Information {
        /** A code representing the station */
        code: string;

        /** The name of the station */
        name: string;

        /** The time the service was run in the format HH:MM:SS */
        currentTime: string;
    }

    /** An object representing a train in the prediction list */
    export interface Train {
        trainID: string;

        /** The leading car Id for the train */
        LCID: string;

        /** The set number of the train */
        setNumber: string;

        /** The trip number of the train */
        tripNumber: string;

        /** A value representing the ‘time to station’ for this train in seconds in the format SSS */
        secondsToStation: string;

        /** A value representing the ‘time to station’ for this train in minutes and seconds in the format MM:SS */
        timeTo: string;

        /** The current location of the train */
        currentLocation: string;

        /** The name of the destination of the train */
        destination: string;

        /** A code representing the destination of the train */
        destinationCode: string;

        /** The time train departed the platform in the format `H:MM:SS` */
        departedTime: string;

        /** Interval in seconds between the departure of the specified train and the previous train */
        departureInterval: string;

        /** Boolean value to determine if the train has departed the platform */
        hasDeparted: boolean;

        /** Direction of Travel */
        direction: string;

        /** The current section of track the train occupies */
        trackCode: string;

        /** A code representing the line the train is running on */
        line: string;

        leadingCarNumber: string;
    }

    /** An object representing a platform on the station */
    export interface Platform {
        name: string;
        number: string;

        /** The track code of the section of track at the front of the platform */
        trackCode: string;
        nextTrain: string;

        /** An array containing a Train object */
        trains?: Train[];
    }

    /** This service will return detailed train prediction information for a nominated station on a nominated line within 100 minute range */
    export interface PredictionDetailed {
        /** An object containing basic station information */
        information: Information;

        /** An array of platforms on the station */
        platforms: Platform[];
    }

    export interface ArrayOfLineStatus {
        /** An identifier for the line */
        id: string;

        /** A description of the status of the line if the status is not normal otherwise this will be blank */
        statusDetails: string;
        line: Line[];
        status: Status[];
        statusType: StatusType[];
    }
}
