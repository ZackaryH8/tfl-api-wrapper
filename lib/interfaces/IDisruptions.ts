export declare module GetAllLifts {
    interface Disruption {
        icsCode: string;
        naptanCode: string;
        stopPointName: string;
        outageStartArea: string;
        outageEndArea: string;
        message: string;
    }

    export interface Root extends Array<Disruption> {}
}
