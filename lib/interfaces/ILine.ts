import { Direction, ModeName, RouteType, ServiceTypeName, StopType, Type } from '../enums/line';

export module GetModes {
    interface Mode {
        $type: string;
        isTflService: boolean;
        isFarePaying: boolean;
        isScheduledService: boolean;
        modeName: ModeName;
    }

    export interface Root extends Array<Mode> {}
}

export declare module GetSeverityCodes {
    interface SeverityCode {
        $type: string;
        modeName: ModeName;
        severityLevel: number;
        description: string;
    }

    export interface Root extends Array<SeverityCode> {}
}

export declare module GetAllStopPoints {
    interface StopPoint {
        $type: string;
        naptanId: string;
        modes: ModeName[];
        icsCode: string;
        stopType?: StopType;
        stationNaptan: string;
        lines: Line[];
        lineGroup: LineGroup[];
        lineModeGroups: LineModeGroup[];
        status: boolean;
        id: string;
        commonName: string;
        placeType: PlaceType;
        additionalProperties: AdditionalProperty[];
        children: StopPoint[];
        lat: number;
        lon: number;
        hubNaptanCode?: string;
        indicator?: string;
        stopLetter?: string;
    }

    interface AdditionalProperty {
        $type: string;
        category: Category;
        key: string;
        sourceSystemKey: SourceSystemKey;
        value: string;
    }

    interface LineGroup {
        $type: string;
        naptanIdReference?: string;
        stationAtcoCode: string;
        lineIdentifier: string[];
    }

    interface LineModeGroup {
        $type: string;
        modeName: ModeName;
        lineIdentifier: string[];
    }

    interface Line {
        $type: string;
        id: string;
        name: string;
        uri: string;
        type: Type;
        crowding: Crowding;
        routeType: RouteType;
        status: RouteType;
    }

    const enum Category {
        Accessibility = 'Accessibility',
        Address = 'Address',
        Facility = 'Facility',
        Geo = 'Geo',
        NearestPlaces = 'NearestPlaces',
        OpeningTime = 'Opening Time',
        ServiceInfo = 'ServiceInfo',
        VisitorCentre = 'VisitorCentre'
    }

    const enum SourceSystemKey {
        Lrad = 'LRAD',
        StaticObjects = 'StaticObjects',
        TransXchangeETL = 'TransXchangeETL'
    }

    const enum PlaceType {
        StopPoint = 'StopPoint'
    }

    export interface Root extends Array<StopPoint> {}
}

export module GetAllByModes {
    interface Mode {
        $type: string;
        id: string;
        name: string;
        modeName: ModeName;
        disruptions: any[];
        created: Date;
        modified: Date;
        lineStatuses: any[];
        routeSections: any[];
        serviceTypes: ServiceType[];
        crowding: Crowding;
    }

    export interface Root extends Array<Mode> {}
}

export module GetStatusByLine {
    interface Status {
        $type: string;
        id: string;
        name: string;
        modeName: ModeName;
        disruptions: any[];
        created: Date;
        modified: Date;
        lineStatuses: LineStatus[];
        routeSections: any[];
        serviceTypes: ServiceType[];
        crowding: Crowding;
    }

    interface LineStatus {
        $type: string;
        id: number;
        statusSeverity: number;
        statusSeverityDescription: string;
        created: Date;
        validityPeriods: any[];
    }

    export interface Root extends Array<Status> {}
}

export module GetStatusByModes {
    interface Status {
        $type: string;
        id: string;
        name: string;
        modeName: ModeName;
        disruptions: any[];
        created: Date;
        modified: Date;
        lineStatuses: LineStatus[];
        routeSections: any[];
        serviceTypes: ServiceType[];
        crowding: Crowding;
    }

    interface LineStatus {
        $type: string;
        id: number;
        statusSeverity: number;
        statusSeverityDescription: string;
        created: Date;
        validityPeriods: ValidityPeriod[];
        lineId?: string;
        reason?: string;
        disruption?: Disruption;
    }

    interface ValidityPeriod {
        $type: string;
        fromDate: Date;
        toDate: Date;
        isNow: boolean;
    }

    export interface Root extends Array<Status> {}
}

export module GetTimetableFromTo {
    interface TimetableResponse {
        $type: string;
        lineId: string;
        lineName: string;
        direction: string;
        stations: Station[];
        stops: Station[];
        timetable: Timetable;
    }

    interface Station {
        $type: string;
        stationId?: string;
        icsId: string;
        topMostParentId?: string;
        modes: ModeName[];
        stopType: StopType;
        zone: string;
        lines: Line[];
        status: boolean;
        id: string;
        name: string;
        lat: number;
        lon: number;
        parentId?: string;
        hasDisruption?: boolean;
    }

    interface Line {
        $type: string;
        id: string;
        name: string;
        uri: string;
        type: Type;
        crowding: Crowding;
        routeType: RouteType;
        status: RouteType;
    }

    interface Timetable {
        $type: string;
        departureStopId: string;
        routes: Route[];
    }

    interface Route {
        $type: string;
        stationIntervals: StationInterval[];
        schedules: Schedule[];
    }

    interface Schedule {
        $type: string;
        name: string;
        knownJourneys: FirstJourney[];
        firstJourney: FirstJourney;
        lastJourney: FirstJourney;
        periods: Period[];
    }

    interface FirstJourney {
        $type: string;
        hour: string;
        minute: string;
        intervalId?: number;
    }

    interface Period {
        $type: string;
        type: string;
        fromTime: FirstJourney;
        toTime: FirstJourney;
        frequency?: Frequency;
    }

    interface Frequency {
        $type: string;
        lowestFrequency: number;
        highestFrequency: number;
    }

    interface StationInterval {
        $type: string;
        id: string;
        intervals: Interval[];
    }

    interface Interval {
        $type: string;
        stopId: string;
        timeToArrival: number;
    }

    export interface Root extends Array<TimetableResponse> {}
}

export module GetTimetableByStation {
    interface TimetableResponse {
        $type: string;
        lineId: string;
        lineName: string;
        direction: string;
        stations: Station[];
        stops: Station[];
        timetable: Timetable;
    }

    interface Station {
        $type: string;
        stationId?: string;
        icsId: string;
        topMostParentId?: string;
        modes: ModeName[];
        stopType: StopType;
        zone: string;
        lines: Line[];
        status: boolean;
        id: string;
        name: string;
        lat: number;
        lon: number;
        parentId?: string;
        hasDisruption?: boolean;
    }

    interface Line {
        $type: string;
        id: string;
        name: string;
        uri: string;
        type: Type;
        crowding: Crowding;
        routeType: RouteType;
        status: RouteType;
    }

    interface Timetable {
        $type: string;
        departureStopId: string;
        routes: Route[];
    }

    interface Route {
        $type: string;
        stationIntervals: StationInterval[];
        schedules: Schedule[];
    }

    interface Schedule {
        $type: string;
        name: string;
        knownJourneys: FirstJourney[];
        firstJourney: FirstJourney;
        lastJourney: FirstJourney;
        periods: Period[];
    }

    interface FirstJourney {
        $type: string;
        hour: string;
        minute: string;
        intervalId?: number;
    }

    interface Period {
        $type: string;
        type: PeriodType;
        fromTime: FirstJourney;
        toTime: FirstJourney;
        frequency?: Frequency;
    }

    interface Frequency {
        $type: string;
        lowestFrequency: number;
        highestFrequency: number;
    }

    const enum PeriodType {
        FrequencyMinutes = 'FrequencyMinutes',
        Normal = 'Normal'
    }

    interface StationInterval {
        $type: string;
        id: string;
        intervals: Interval[];
    }

    interface Interval {
        $type: string;
        stopId: string;
        timeToArrival: number;
    }

    export interface Root extends Array<TimetableResponse> {}
}

export module GetArrivalsByNaptan {
    interface Prediction {
        $type: string;
        id: string;
        operationType: number;
        vehicleId: string;
        naptanId: string;
        stationName: string;
        lineId: string;
        lineName: string;
        platformName: string;
        direction: Direction;
        bearing: string;
        destinationNaptanId: string;
        destinationName: string;
        timestamp: Date;
        timeToStation: number;
        currentLocation: string;
        towards: string;
        expectedArrival: Date;
        timeToLive: Date;
        modeName: ModeName;
        timing: Timing;
    }

    interface Timing {
        $type: string;
        countdownServerAdjustment: string;
        source: Date;
        insert: Date;
        read: Date;
        sent: Date;
        received: Date;
    }

    export interface Root extends Array<Prediction> {}
}

export module GetDisruptionsByID {
    export interface Root extends Array<Disruption> {}
}

export module SearchByString {
    export interface Root extends Array<Disruption> {}
}

export module GetAllValidRoutes {
    interface Route {
        $type: string;
        id: string;
        name: string;
        modeName: ModeName;
        disruptions: any[];
        created: Date;
        modified: Date;
        lineStatuses: any[];
        routeSections: RouteSection[];
        serviceTypes: ServiceType[];
        crowding: Crowding;
    }

    interface RouteSection {
        $type: string;
        name: string;
        direction: Direction;
        originationName: string;
        destinationName: string;
        originator: string;
        destination: string;
        serviceType: ServiceTypeName;
        validTo: Date;
        validFrom: Date;
    }

    export interface Root extends Array<Route> {}
}

interface Crowding {
    $type: string;
}

interface Disruption {
    $type: string;
    category: string;
    categoryDescription: string;
    description: string;
    affectedRoutes: any[];
    affectedStops: any[];
    closureText: string;
    created?: Date;
    additionalInfo?: string;
}

interface ServiceType {
    $type: string;
    name: ServiceTypeName;
    uri: string;
}
