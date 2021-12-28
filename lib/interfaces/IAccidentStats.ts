export declare module GetAll {
    interface Casualty {
        $type: string;
        age?: number;
        class: Class;
        severity: Severity;
        mode: Mode;
        ageBand: AgeBand;
    }

    interface Vehicle {
        $type: string;
        type: Type;
    }

    interface Accident {
        $type: string;
        id: number;
        lat: number;
        lon: number;
        location: string;
        date: Date;
        severity: Severity;
        borough: Borough;
        casualties: Casualty[];
        vehicles: Vehicle[];
    }

    export interface Root extends Array<Accident> {}
}

enum Borough {
    BarkingAndDagenham = 'Barking and Dagenham',
    Barnet = 'Barnet',
    Bexley = 'Bexley',
    Brent = 'Brent',
    Bromley = 'Bromley',
    Camden = 'Camden',
    CityOfLondon = 'City of London',
    CityOfWestminster = 'City of Westminster',
    Croydon = 'Croydon',
    Ealing = 'Ealing',
    Enfield = 'Enfield',
    Greenwich = 'Greenwich',
    Hackney = 'Hackney',
    HammersmithAndFulham = 'Hammersmith and Fulham',
    Haringey = 'Haringey',
    Harrow = 'Harrow',
    Havering = 'Havering',
    Hillingdon = 'Hillingdon',
    Hounslow = 'Hounslow',
    Islington = 'Islington',
    KensingtonAndChelsea = 'Kensington and Chelsea',
    Kingston = 'Kingston',
    Lambeth = 'Lambeth',
    Lewisham = 'Lewisham',
    Merton = 'Merton',
    Newham = 'Newham',
    Redbridge = 'Redbridge',
    RichmondUponThames = 'Richmond upon Thames',
    Southwark = 'Southwark',
    Sutton = 'Sutton',
    TowerHamlets = 'Tower Hamlets',
    WalthamForest = 'Waltham Forest',
    Wandsworth = 'Wandsworth'
}

enum AgeBand {
    Adult = 'Adult',
    Child = 'Child',
    Unknown = 'Unknown'
}

enum Class {
    Driver = 'Driver',
    Passenger = 'Passenger',
    Pedestrian = 'Pedestrian'
}

export enum Mode {
    BusOrCoach = 'BusOrCoach',
    Car = 'Car',
    GoodsVehicle = 'GoodsVehicle',
    OtherVehicle = 'OtherVehicle',
    PedalCycle = 'PedalCycle',
    Pedestrian = 'Pedestrian',
    PoweredTwoWheeler = 'PoweredTwoWheeler',
    PrivateHire = 'PrivateHire',
    Taxi = 'Taxi'
}

enum Severity {
    Fatal = 'Fatal',
    Serious = 'Serious',
    Slight = 'Slight'
}

enum Type {
    AgriculturalVehicle = 'AgriculturalVehicle',
    BusOrCoach = 'BusOrCoach',
    Car = 'Car',
    HeavyGoodsVehicle = 'HeavyGoodsVehicle',
    LightGoodsVehicle = 'LightGoodsVehicle',
    MediumGoodsVehicle = 'MediumGoodsVehicle',
    Minibus = 'Minibus',
    Motorcycle0_50Cc = 'Motorcycle_0_50cc',
    Motorcycle125_500Cc = 'Motorcycle_125_500cc',
    Motorcycle500CcPlus = 'Motorcycle_500cc_Plus',
    Motorcycle50_125Cc = 'Motorcycle_50_125cc',
    OtherMotorVehicle = 'OtherMotorVehicle',
    PedalCycle = 'PedalCycle',
    RiddenHorse = 'RiddenHorse',
    Taxi = 'Taxi'
}
