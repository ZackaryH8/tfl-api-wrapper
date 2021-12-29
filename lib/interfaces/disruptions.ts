declare module Disruptions {
    export interface Root {
        icsCode: string;
        naptanCode: string;
        stopPointName: string;
        outageStartArea: string;
        outageEndArea: string;
        message: string;
    }
}

export default Disruptions;
