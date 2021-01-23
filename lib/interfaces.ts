export interface config {
    app_key: string;
}

export declare module ITrackerNet {
    export interface Station {
        Code: string;
        Mess: string;
        N: string;
        CurTime: string;
    }

    export interface Platform {
        N: string;
        Num: string;
        TrackCode: string;
        NextTrain: string;
    }

    export interface Train {
        TrainId: string;
        LCID: string;
        SetNo: string;
        TripNo: string;
        SecondsTo: string;
        TimeTo: string;
        Location: string;
        Destination: string;
        InputDest: string;
        DestCode: string;
        Order: string;
        DepartTime: string;
        DepartInterval: string;
        Departed: string;
        Direction: string;
        IsStalled: string;
        TrackCode: string;
        LN: string;
        LeadingCarNo: string;
    }

    /**
     * Train Object
     * @interface S
     */
    export interface T {
        $: Train;
    }

    /**
     * Platform Object
     * @interface S
     */
    export interface P {
        $: 3;
        T: T[];
    }

    /**
     * Station Object
     * @interface S
     */
    export interface S {
        $: 2;
        P: P[];
    }

    export interface RootObject {
        Disclaimer: string[];
        WhenCreated: string[];
        Line: string[];
        LineName: string[];
        S: S[];
    }
}