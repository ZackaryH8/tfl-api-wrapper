declare module Occupancy {

    export interface ChargeConnector {
        $type: string;
        id: number;
        sourceSystemPlaceId: string;
        status: string;
    }

    export interface Bay {
        $type: string;
        bayType: string;
        bayCount: number;
        free: number;
        occupied: number;
    }

    export interface CarPark {
        $type: string;
        id: string;
        bays: Bay[];
        name: string;
        carParkDetailsUrl: string;
    }

}

export default Occupancy;
