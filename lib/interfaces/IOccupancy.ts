import { BayType, ChargeConnectorStatus } from '../enums/occupancy';

export module GetBikePointsByIDs {
    interface BikePoint {
        $type: string;
        id: string;
        name: string;
        bikesCount: number;
        emptyDocks: number;
        totalDocks: number;
    }

    export interface Root extends Array<BikePoint> {}
}

export module GetChargeConnectorByID {
    export interface Root extends ChargeConnector {}
}

export module GetCarkParkByID {
    export interface Root extends CarPark {}
}

export module GetAllCarParks {
    export interface Root extends Array<CarPark> {}
}

export module GetAllChargeConnectors {
    export interface Root extends Array<ChargeConnector> {}
}

interface CarPark {
    $type: string;
    id: string;
    bays: Bay[];
    name: string;
    carParkDetailsUrl: string;
}

interface Bay {
    $type: string;
    bayType: BayType;
    bayCount: number;
    free: number;
    occupied: number;
}

interface ChargeConnector {
    $type: string;
    id: number;
    sourceSystemPlaceId: string;
    status: ChargeConnectorStatus;
}
