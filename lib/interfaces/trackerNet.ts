export declare module ITrackerNet {
    export interface Line {
        id: string;
        name: string;
    }

    export interface Status {
        id: string;
        cssClass: string;
        description: string;
        isActive: boolean;
    }

    export interface StatusType {
        id: string;
        description: string;
    }

    export interface Information {
        code: string;
        name: string;
        currentTime: string;
    }

    export interface Train {
        trainID: string;
        LCID: string;
        setNumber: string;
        tripNumber: string;
        timeToStation: string;
        currentLocation: string;
        destination: string;
        destinationCode: string;
        departedTime: string;
        departureInterval: string;
        hasDeparted: boolean;
        direction: string;
        isStalled: string;
        trackCode: string;
        line: string;
        leadingCarNumber: string;
    }

    export interface Platform {
        name: string;
        number: string;
        trackCode: string;
        nextTrain: string;
        trains: Train[];
    }

    export interface PredictionDetailed {
        information: Information;
        platforms: Platform[];
    }

    export interface ArrayOfLineStatus {
        id: string;
        statusDetails: string;
        branchDisruptions: string[];
        line: Line[];
        status: Status[];
        statusType: StatusType[];
    }
}
