import TrackerNetLines from '../enums/lines';

export declare module getPredictionSummary {
    interface Train {
        id: string;
        leadingCarID: string;
        setNo: string;
        tripNo: string;
        secondsToStation: string;
        timeTo: string;
        location: string;
        destination: string;
        inputDest: string;
        destinationCode: string;
        order: string;
        departTime: string;
        departInterval: string;
        departed: string;
        direction: string;
        isStalled: string;
        trackCode: string;
        line: string;
        leadingCarNo: string;
    }

    interface Platform {
        name: string;
        num: string;
        trackCode: string;
        nextTrain: string;
        train: Train[];
    }

    interface Station {
        code: string;
        mess: string;
        name: string;
        curTime: string;
        platform: Platform[];
    }

    interface Root {
        whenCreated: string;
        line: string;
        lineName: string;
        station: Station;
    }
}

export declare module getPredictionDetailed {
    /* An object representing a train in the prediction list */
    interface Train {
        id: string;

        /* The leading car ID for the train */
        leadingCarID: string;

        /* The set number of the train */
        setNo: string;

        /* The trip number of the train */
        tripNo: string;

        /* A value representing the ‘time to station’ for this train in seconds in the format SSS */
        secondsToStation: string;

        /* A value representing the ‘time to station’ for this train in minutes and seconds in the format MM:SS */
        timeTo: string;

        /* The current location of the train */
        location: string;

        /* The name of the destination of the train */
        destination: string;
        inputDest: string;

        /* A code representing the destination of the train */
        destinationCode: string;
        order: string;

        /* The time train departed the platform in the format `HH:MM:SS` */
        departTime: string;

        /* Interval in seconds between the departure of the specified train and the previous train */
        departInterval: string;

        /* Boolean value to determine if the train has departed the platform */
        departed: string;

        /* Direction of Travel */
        direction: string;
        isStalled: string;

        /* The current section of track the train occupies */
        trackCode: string;

        /* A code representing the line the train is running on */
        line: TrackerNetLines;

        /* The leading car number for the train */
        leadingCarNo: string;
    }

    interface Platform {
        name: string;
        num: string;
        trackCode: string;
        nextTrain: string;
        train: Train[];
    }

    interface Station {
        code: string;
        mess: string;
        name: string;
        curTime: string;
        platform: Platform[];
    }

    interface Root {
        whenCreated: string;
        line: string;
        lineName: string;
        station: Station;
    }
}

export declare module getAllLinesStatus {
    interface Line {
        id: string;
        name: string;
    }

    interface StatusType {}

    interface Status {
        id: string;
        cssClass: string;
        description: string;
        isActive: string;
        statusType: StatusType[];
    }

    interface Root {
        id: string;
        statusDetails: string;
        branchDisruptions: string;
        line: Line;
        status: Status;
    }
}

export declare module getAllStationStatus {
    interface Station {
        id: string;
        name: string;
    }

    interface StatusType {
        id: string;
        description: string;
    }

    interface Status {
        id: string;
        cssClass: string;
        description: string;
        isActive: string;
        statusType: StatusType[];
    }

    interface Root {
        id: string;
        statusDetails: string;
        station: Station;
        status: Status;
    }
}
