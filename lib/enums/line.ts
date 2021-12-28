export const enum Direction {
    Inbound = 'inbound',
    Outbound = 'outbound'
}

export const enum DisruptionCategories {
    Undefined = 'Undefined',
    RealTime = 'RealTime',
    PlannedWork = 'PlannedWork',
    Information = 'Information',
    Event = 'Event',
    Crowding = 'Crowding',
    StatusAlert = 'StatusAlert'
}

export const enum ModeName {
    Bus = 'bus',
    CableCar = 'cable-car',
    CycleHire = 'cycle-hire',
    DLR = 'dlr',
    NationalRail = 'national-rail',
    Overground = 'overground',
    RiverBus = 'river-bus',
    RiverTour = 'river-tour',
    Road = 'road',
    TfLRail = 'tflrail',
    Tram = 'tram',
    Tube = 'tube'
}

export enum RouteType {
    Unknown = 'Unknown'
}

export const enum ServiceTypeName {
    Night = 'Night',
    Regular = 'Regular'
}

export const enum StopType {
    NaptanMetroStation = 'NaptanMetroStation',
    TransportInterchange = 'TransportInterchange'
}

export const enum Type {
    Line = 'Line'
}
