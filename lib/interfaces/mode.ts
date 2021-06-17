declare module GetArrivalPredictionsAllStops {
    export interface Timing {
        $type: string;
        countdownServerAdjustment: string;
        source: Date;
        insert: Date;
        read: Date;
        sent: Date;
        received: Date;
    }

    export interface Root {
        $type: string;
        id: string;
        operationType: number;
        vehicleId: string;
        naptanId: string;
        stationName: string;
        lineId: string;
        lineName: string;
        platformName: string;
        direction: string;
        bearing: string;
        destinationNaptanId: string;
        destinationName: string;
        timestamp: Date;
        timeToStation: number;
        currentLocation: string;
        towards: string;
        expectedArrival: Date;
        timeToLive: Date;
        modeName: string;
        timing: Timing;
    }
}

declare module GetActiveServiceTypes {
    export interface Root {
        $type: string;
        mode: string;
        serviceType: string;
    }
}

export { GetArrivalPredictionsAllStops, GetActiveServiceTypes };
