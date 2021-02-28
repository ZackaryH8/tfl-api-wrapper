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

    export interface ArrayOfLineStatus {
        id: string;
        statusDetails: string;
        branchDisruptions: string[];
        line: Line[];
        status: Status[];
        statusType: StatusType[];
    }
}
