export default interface TfL {
    'AccidentStats.AccidentDetail': {
        /** Format: int32 */
        id?: number;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
        location?: string;
        /** Format: date-time */
        date?: string;
        severity?: string;
        borough?: string;
        casualties?: TfL['AccidentStats.Casualty'][];
        vehicles?: TfL['AccidentStats.Vehicle'][];
    };
    'AccidentStats.Casualty': {
        /** Format: int32 */
        age?: number;
        class?: string;
        severity?: string;
        mode?: string;
        ageBand?: string;
    };
    'AccidentStats.Vehicle': {
        type?: string;
    };
    'AccidentStats.AccidentStatsOrderedSummary': {
        /** Format: int32 */
        year?: number;
        borough?: string;
        /** Format: int32 */
        accidents?: number;
    };
    'System.Object': { [key: string]: unknown };
    Place: {
        /** @description A unique identifier. */
        id?: string;
        /** @description The unique location of this resource. */
        url?: string;
        /** @description A human readable name. */
        commonName?: string;
        /**
         * Format: double
         * @description The distance of the place from its search point, if this is the result
         *             of a geographical search, otherwise zero.
         */
        distance?: number;
        /** @description The type of Place. See /Place/Meta/placeTypes for possible values. */
        placeType?: string;
        /** @description A bag of additional key/value pairs with extra information about this place. */
        additionalProperties?: TfL['AdditionalProperties'][];
        children?: TfL['Place'][];
        childrenUrls?: string[];
        /**
         * Format: double
         * @description WGS84 latitude of the location.
         */
        lat?: number;
        /**
         * Format: double
         * @description WGS84 longitude of the location.
         */
        lon?: number;
    };
    AdditionalProperties: {
        category?: string;
        key?: string;
        sourceSystemKey?: string;
        value?: string;
        /** Format: date-time */
        modified?: string;
    };
    CycleSuperhighway: {
        /** @description The Id */
        id?: string;
        /** @description The long label to show on maps when zoomed in */
        label?: string;
        /** @description The short label to show on maps */
        labelShort?: string;
        /** @description A LineString or MultiLineString that forms the route of the highway */
        geography?: TfL['System.Data.Spatial.DbGeography'];
        /** @description True if the route is split into segments */
        segmented?: boolean;
        /**
         * Format: date-time
         * @description When the data was last updated
         */
        modified?: string;
        /** @description Cycle route status i.e Proposed, Existing etc */
        status?: 'Unknown' | 'All' | 'Open' | 'In Progress' | 'Planned' | 'Planned - Subject to feasibility and consultation.' | 'Not Open';
        /** @description Type of cycle route e.g CycleSuperhighways, Quietways, MiniHollands etc */
        routeType?: 'Unknown' | 'All' | 'Cycle Superhighways' | 'Quietways' | 'Cycleways' | 'Mini-Hollands' | 'Central London Grid' | 'Streetspace Route';
    };
    'System.Data.Spatial.DbGeography': {
        geography?: TfL['System.Data.Spatial.DbGeographyWellKnownValue'];
    };
    'System.Data.Spatial.DbGeographyWellKnownValue': {
        /** Format: int32 */
        coordinateSystemId?: number;
        wellKnownText?: string;
        /** Format: byte */
        wellKnownBinary?: string;
    };
    'Fares.Fare': {
        /** Format: int32 */
        id?: number;
        passengerType?: string;
        /** Format: date-time */
        validFrom?: string;
        /** Format: date-time */
        validUntil?: string;
        ticketTime?: string;
        ticketType?: string;
        cost?: string;
        /** Format: double */
        cap?: number;
        description?: string;
        zone?: string;
        mode?: string;
    };
    'Fares.FaresSection': {
        header?: string;
        /** Format: int32 */
        index?: number;
        journey?: TfL['Fares.Journey'];
        rows?: TfL['Fares.FareDetails'][];
        messages?: TfL['Message'][];
    };
    'Fares.Journey': {
        fromStation?: TfL['Fares.FareStation'];
        toStation?: TfL['Fares.FareStation'];
    };
    'Fares.FareDetails': {
        /** Format: int32 */
        boundsId?: number;
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        endDate?: string;
        mode?: string;
        passengerType?: string;
        contactlessPAYGOnlyFare?: boolean;
        from?: string;
        to?: string;
        fromStation?: string;
        toStation?: string;
        via?: string;
        routeCode?: string;
        displayName?: string;
        /** Format: int32 */
        displayOrder?: number;
        routeDescription?: string;
        validatorInformation?: string;
        operator?: string;
        specialFare?: boolean;
        throughFare?: boolean;
        isTour?: boolean;
        ticketsAvailable?: TfL['Fares.Ticket'][];
        messages?: TfL['Message'][];
    };
    Message: {
        /** Format: int32 */
        bulletOrder?: number;
        header?: boolean;
        messageText?: string;
        linkText?: string;
        url?: string;
    };
    'Fares.FareStation': {
        atcoCode?: string;
        commonName?: string;
        fareCategory?: 'Cash' | 'Oyster' | 'Contactless' | 'ContactlessOnly' | 'All';
    };
    'Fares.Ticket': {
        passengerType?: string;
        ticketType?: TfL['Fares.TicketType'];
        ticketTime?: TfL['Fares.TicketTime'];
        cost?: string;
        description?: string;
        mode?: string;
        /** Format: int32 */
        displayOrder?: number;
        messages?: TfL['Message'][];
    };
    'Fares.TicketType': {
        type?: string;
        description?: string;
    };
    'Fares.TicketTime': {
        type?: string;
        description?: string;
    };
    'Fares.FareBounds': {
        /** Format: int32 */
        id?: number;
        from?: string;
        to?: string;
        via?: string;
        routeCode?: string;
        description?: string;
        displayName?: string;
        operator?: string;
        /** Format: int32 */
        displayOrder?: number;
        isPopularFare?: boolean;
        isPopularTravelCard?: boolean;
        isTour?: boolean;
        messages?: TfL['Message'][];
    };
    'Fares.FaresPeriod': {
        /** Format: int32 */
        id?: number;
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        viewableDate?: string;
        /** Format: date-time */
        endDate?: string;
        isFuture?: boolean;
    };
    'Fares.FaresMode': {
        /** Format: int32 */
        id?: number;
        name?: string;
        description?: string;
    };
    'Fares.PassengerType': {
        type?: string;
        description?: string;
        displayName?: string;
        /** Format: int32 */
        displayOrder?: number;
    };
    Coordinate: {
        /** Format: double */
        longitude?: number;
        /** Format: double */
        latitude?: number;
        /** Format: double */
        easting?: number;
        /** Format: double */
        northing?: number;
        /** Format: int32 */
        xCoord?: number;
        /** Format: int32 */
        yCoord?: number;
    };
    GeoCodeSearchMatch: {
        /** @description The type of the place e.g. "street_address" */
        types?: string[];
        /** @description A string describing the formatted address of the place. Adds additional context to the place's Name. */
        address?: string;
        id?: string;
        url?: string;
        name?: string;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
    };
    Mode: {
        isTflService?: boolean;
        isFarePaying?: boolean;
        isScheduledService?: boolean;
        modeName?: string;
    };
    /** @description A DTO representing a list of possible journeys. */
    'JourneyPlanner.ItineraryResult': {
        journeys?: TfL['JourneyPlanner.Journey'][];
        lines?: TfL['Line'][];
        cycleHireDockingStationData?: TfL['JourneyPlanner.JourneyPlannerCycleHireDockingStationData'];
        stopMessages?: string[];
        /** Format: int32 */
        recommendedMaxAgeMinutes?: number;
        searchCriteria?: TfL['JourneyPlanner.SearchCriteria'];
        journeyVector?: TfL['JourneyPlanner.JourneyVector'];
    };
    /** @description Object that represents an end to end journey (see schematic). */
    'JourneyPlanner.Journey': {
        /** Format: date-time */
        startDateTime?: string;
        /** Format: int32 */
        duration?: number;
        /** Format: date-time */
        arrivalDateTime?: string;
        legs?: TfL['JourneyPlanner.Leg'][];
        fare?: TfL['JourneyPlanner.JourneyFare'];
    };
    Line: {
        id?: string;
        name?: string;
        modeName?: string;
        disruptions?: TfL['Disruption'][];
        /** Format: date-time */
        created?: string;
        /** Format: date-time */
        modified?: string;
        lineStatuses?: TfL['LineStatus'][];
        routeSections?: TfL['MatchedRoute'][];
        serviceTypes?: TfL['LineServiceTypeInfo'][];
        crowding?: TfL['Crowding'];
    };
    'JourneyPlanner.JourneyPlannerCycleHireDockingStationData': {
        /** Format: int32 */
        originNumberOfBikes?: number;
        /** Format: int32 */
        destinationNumberOfBikes?: number;
        /** Format: int32 */
        originNumberOfEmptySlots?: number;
        /** Format: int32 */
        destinationNumberOfEmptySlots?: number;
        originId?: string;
        destinationId?: string;
    };
    'JourneyPlanner.SearchCriteria': {
        /** Format: date-time */
        dateTime?: string;
        dateTimeType?: 'Arriving' | 'Departing';
        timeAdjustments?: TfL['JourneyPlanner.TimeAdjustments'];
    };
    'JourneyPlanner.JourneyVector': {
        from?: string;
        to?: string;
        via?: string;
        uri?: string;
    };
    'JourneyPlanner.Leg': {
        /** Format: int32 */
        duration?: number;
        speed?: string;
        /**
         * @description Describes the action the user need to take for this section, E.g. "walk to the
         *             district line"
         */
        instruction?: TfL['Instruction'];
        obstacles?: TfL['JourneyPlanner.Obstacle'][];
        /** Format: date-time */
        departureTime?: string;
        /** Format: date-time */
        arrivalTime?: string;
        departurePoint?: TfL['Point'];
        arrivalPoint?: TfL['Point'];
        path?: TfL['JourneyPlanner.Path'];
        routeOptions?: TfL['JourneyPlanner.RouteOption'][];
        mode?: TfL['Identifier'];
        disruptions?: TfL['Disruption'][];
        plannedWorks?: TfL['JourneyPlanner.PlannedWork'][];
        /** Format: double */
        distance?: number;
        isDisrupted?: boolean;
        hasFixedLocations?: boolean;
    };
    'JourneyPlanner.JourneyFare': {
        /** Format: int32 */
        totalCost?: number;
        fares?: TfL['JourneyPlanner.Fare'][];
        caveats?: TfL['JourneyPlanner.FareCaveat'][];
    };
    /** @description Represents a disruption to a route within the transport network. */
    Disruption: {
        /** @description Gets or sets the category of this dispruption. */
        category?: 'Undefined' | 'RealTime' | 'PlannedWork' | 'Information' | 'Event' | 'Crowding' | 'StatusAlert';
        /** @description Gets or sets the disruption type of this dispruption. */
        type?: string;
        /** @description Gets or sets the description of the category. */
        categoryDescription?: string;
        /** @description Gets or sets the description of this disruption. */
        description?: string;
        /** @description Gets or sets the summary of this disruption. */
        summary?: string;
        /** @description Gets or sets the additionaInfo of this disruption. */
        additionalInfo?: string;
        /**
         * Format: date-time
         * @description Gets or sets the date/time when this disruption was created.
         */
        created?: string;
        /**
         * Format: date-time
         * @description Gets or sets the date/time when this disruption was last updated.
         */
        lastUpdate?: string;
        /** @description Gets or sets the routes affected by this disruption */
        affectedRoutes?: TfL['DisruptedRoute'][];
        /** @description Gets or sets the stops affected by this disruption */
        affectedStops?: TfL['StopPoint'][];
        /** @description Text describing the closure type */
        closureText?: string;
    };
    LineStatus: {
        /** Format: int32 */
        id?: number;
        lineId?: string;
        /** Format: int32 */
        statusSeverity?: number;
        statusSeverityDescription?: string;
        reason?: string;
        /** Format: date-time */
        created?: string;
        /** Format: date-time */
        modified?: string;
        validityPeriods?: TfL['ValidityPeriod'][];
        disruption?: TfL['Disruption'];
    };
    /** @description Description of a Route used in Route search results. */
    MatchedRoute: {
        /** @description The route code */
        routeCode?: string;
        /** @description Name such as "72" */
        name?: string;
        /** @description Inbound or Outbound */
        direction?: string;
        /** @description The name of the Origin StopPoint */
        originationName?: string;
        /** @description The name of the Destination StopPoint */
        destinationName?: string;
        /** @description The Id (NaPTAN code) of the Origin StopPoint */
        originator?: string;
        /** @description The Id (NaPTAN code) or the Destination StopPoint */
        destination?: string;
        /** @description Regular or Night */
        serviceType?: string;
        /**
         * Format: date-time
         * @description The DateTime that the Service containing this Route is valid until.
         */
        validTo?: string;
        /**
         * Format: date-time
         * @description The DateTime that the Service containing this Route is valid from.
         */
        validFrom?: string;
    };
    LineServiceTypeInfo: {
        name?: string;
        uri?: string;
    };
    Crowding: {
        /** @description Busiest times at a station (static information) */
        passengerFlows?: TfL['PassengerFlow'][];
        /** @description Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information) */
        trainLoadings?: TfL['TrainLoading'][];
    };
    'JourneyPlanner.TimeAdjustments': {
        earliest?: TfL['JourneyPlanner.TimeAdjustment'];
        earlier?: TfL['JourneyPlanner.TimeAdjustment'];
        later?: TfL['JourneyPlanner.TimeAdjustment'];
        latest?: TfL['JourneyPlanner.TimeAdjustment'];
    };
    Instruction: {
        summary?: string;
        detailed?: string;
        steps?: TfL['InstructionStep'][];
    };
    'JourneyPlanner.Obstacle': {
        type?: string;
        incline?: string;
        /** Format: int32 */
        stopId?: number;
        position?: string;
    };
    /** @description Represents a point located at a latitude and longitude using the WGS84 co-ordinate system. */
    Point: {
        /**
         * Format: double
         * @description WGS84 latitude of the location.
         */
        lat?: number;
        /**
         * Format: double
         * @description WGS84 longitude of the location.
         */
        lon?: number;
    };
    'JourneyPlanner.Path': {
        lineString?: string;
        stopPoints?: TfL['Identifier'][];
        elevation?: TfL['Tfl.Api.Common.JourneyPlanner.JpElevation'][];
    };
    'JourneyPlanner.RouteOption': {
        /** @description The Id of the route */
        id?: string;
        /** @description Name such as "72" */
        name?: string;
        directions?: string[];
        /** @description The line identifier (e.g. District Line), from where you can obtain line status information e.g. the rainbow board status "good service". */
        lineIdentifier?: TfL['Identifier'];
    };
    Identifier: {
        id?: string;
        name?: string;
        uri?: string;
        fullName?: string;
        type?: string;
        crowding?: TfL['Crowding'];
        routeType?: 'Unknown' | 'All' | 'Cycle Superhighways' | 'Quietways' | 'Cycleways' | 'Mini-Hollands' | 'Central London Grid' | 'Streetspace Route';
        status?: 'Unknown' | 'All' | 'Open' | 'In Progress' | 'Planned' | 'Planned - Subject to feasibility and consultation.' | 'Not Open';
    };
    'JourneyPlanner.PlannedWork': {
        id?: string;
        description?: string;
        /** Format: date-time */
        createdDateTime?: string;
        /** Format: date-time */
        lastUpdateDateTime?: string;
    };
    'JourneyPlanner.Fare': {
        /** Format: int32 */
        lowZone?: number;
        /** Format: int32 */
        highZone?: number;
        /** Format: int32 */
        cost?: number;
        chargeProfileName?: string;
        isHopperFare?: boolean;
        chargeLevel?: string;
        /** Format: int32 */
        peak?: number;
        /** Format: int32 */
        offPeak?: number;
        taps?: TfL['JourneyPlanner.FareTap'][];
    };
    'JourneyPlanner.FareCaveat': {
        text?: string;
        type?: string;
    };
    /** @description keep old RouteSection name so as not to break contract */
    DisruptedRoute: {
        /** @description The Id of the route */
        id?: string;
        /** @description The Id of the Line */
        lineId?: string;
        /** @description The route code */
        routeCode?: string;
        /** @description Name such as "72" */
        name?: string;
        /** @description The co-ordinates of the route's path as a geoJSON lineString */
        lineString?: string;
        /** @description Inbound or Outbound */
        direction?: string;
        /** @description The name of the Origin StopPoint */
        originationName?: string;
        /** @description The name of the Destination StopPoint */
        destinationName?: string;
        /** @description (where applicable) via Charing Cross / Bank / King's Cross / Embankment / Newbury Park / Woodford */
        via?: TfL['RouteSectionNaptanEntrySequence'];
        /** @description Whether this represents the entire route section */
        isEntireRouteSection?: boolean;
        /**
         * Format: date-time
         * @description The DateTime that the Service containing this Route is valid until.
         */
        validTo?: string;
        /**
         * Format: date-time
         * @description The DateTime that the Service containing this Route is valid from.
         */
        validFrom?: string;
        routeSectionNaptanEntrySequence?: TfL['RouteSectionNaptanEntrySequence'][];
    };
    StopPoint: {
        naptanId?: string;
        platformName?: string;
        /** @description The indicator of the stop point e.g. "Stop K" */
        indicator?: string;
        /** @description The stop letter, if it could be cleansed from the Indicator e.g. "K" */
        stopLetter?: string;
        modes?: string[];
        icsCode?: string;
        smsCode?: string;
        stopType?: string;
        stationNaptan?: string;
        accessibilitySummary?: string;
        hubNaptanCode?: string;
        lines?: TfL['Identifier'][];
        lineGroup?: TfL['LineGroup'][];
        lineModeGroups?: TfL['LineModeGroup'][];
        fullName?: string;
        naptanMode?: string;
        status?: boolean;
        /** @description A unique identifier. */
        id?: string;
        /** @description The unique location of this resource. */
        url?: string;
        /** @description A human readable name. */
        commonName?: string;
        /**
         * Format: double
         * @description The distance of the place from its search point, if this is the result
         *             of a geographical search, otherwise zero.
         */
        distance?: number;
        /** @description The type of Place. See /Place/Meta/placeTypes for possible values. */
        placeType?: string;
        /** @description A bag of additional key/value pairs with extra information about this place. */
        additionalProperties?: TfL['AdditionalProperties'][];
        children?: TfL['Place'][];
        childrenUrls?: string[];
        /**
         * Format: double
         * @description WGS84 latitude of the location.
         */
        lat?: number;
        /**
         * Format: double
         * @description WGS84 longitude of the location.
         */
        lon?: number;
    };
    /** @description Represents a period for which a planned works is valid. */
    ValidityPeriod: {
        /**
         * Format: date-time
         * @description Gets or sets the start date.
         */
        fromDate?: string;
        /**
         * Format: date-time
         * @description Gets or sets the end date.
         */
        toDate?: string;
        /** @description If true is a realtime status rather than planned or info */
        isNow?: boolean;
    };
    PassengerFlow: {
        /** @description Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
        timeSlice?: string;
        /**
         * Format: int32
         * @description Count of passenger flow towards a platform
         */
        value?: number;
    };
    TrainLoading: {
        /** @description The Line Name e.g. "Victoria" */
        line?: string;
        /** @description Direction of the Line e.g. NB, SB, WB etc. */
        lineDirection?: string;
        /** @description Direction displayed on the platform e.g. NB, SB, WB etc. */
        platformDirection?: string;
        /** @description Direction in regards to Journey Planner i.e. inbound or outbound */
        direction?: string;
        /** @description Naptan of the adjacent station */
        naptanTo?: string;
        /** @description Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
        timeSlice?: string;
        /**
         * Format: int32
         * @description Scale between 1-6,
         *              1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy
         */
        value?: number;
    };
    'JourneyPlanner.TimeAdjustment': {
        date?: string;
        time?: string;
        timeIs?: string;
        uri?: string;
    };
    InstructionStep: {
        description?: string;
        turnDirection?: string;
        streetName?: string;
        /** Format: int32 */
        distance?: number;
        /** Format: int32 */
        cumulativeDistance?: number;
        /** Format: int32 */
        skyDirection?: number;
        skyDirectionDescription?: 'North' | 'NorthEast' | 'East' | 'SouthEast' | 'South' | 'SouthWest' | 'West' | 'NorthWest';
        /** Format: int32 */
        cumulativeTravelTime?: number;
        /** Format: double */
        latitude?: number;
        /** Format: double */
        longitude?: number;
        pathAttribute?: TfL['PathAttribute'];
        descriptionHeading?: string;
        trackType?: 'CycleSuperHighway' | 'CanalTowpath' | 'QuietRoad' | 'ProvisionForCyclists' | 'BusyRoads' | 'None' | 'PushBike' | 'Quietway';
    };
    'Tfl.Api.Common.JourneyPlanner.JpElevation': {
        /** Format: int32 */
        distance?: number;
        /** Format: double */
        startLat?: number;
        /** Format: double */
        startLon?: number;
        /** Format: double */
        endLat?: number;
        /** Format: double */
        endLon?: number;
        /** Format: int32 */
        heightFromPreviousPoint?: number;
        /** Format: double */
        gradient?: number;
    };
    'JourneyPlanner.FareTap': {
        atcoCode?: string;
        tapDetails?: TfL['JourneyPlanner.FareTapDetails'];
    };
    RouteSectionNaptanEntrySequence: {
        /** Format: int32 */
        ordinal?: number;
        stopPoint?: TfL['StopPoint'];
    };
    LineGroup: {
        naptanIdReference?: string;
        stationAtcoCode?: string;
        lineIdentifier?: string[];
    };
    LineModeGroup: {
        modeName?: string;
        lineIdentifier?: string[];
    };
    PathAttribute: {
        name?: string;
        value?: string;
    };
    'JourneyPlanner.FareTapDetails': {
        modeType?: string;
        validationType?: string;
        hostDeviceType?: string;
        busRouteId?: string;
        /** Format: int32 */
        nationalLocationCode?: number;
        /** Format: date-time */
        tapTimestamp?: string;
    };
    StatusSeverity: {
        modeName?: string;
        /** Format: int32 */
        severityLevel?: number;
        description?: string;
    };
    RouteSequence: {
        lineId?: string;
        lineName?: string;
        direction?: string;
        isOutboundOnly?: boolean;
        mode?: string;
        lineStrings?: string[];
        stations?: TfL['MatchedStop'][];
        stopPointSequences?: TfL['StopPointSequence'][];
        orderedLineRoutes?: TfL['OrderedRoute'][];
    };
    MatchedStop: {
        /** Format: int32 */
        routeId?: number;
        parentId?: string;
        stationId?: string;
        icsId?: string;
        topMostParentId?: string;
        direction?: string;
        towards?: string;
        modes?: string[];
        stopType?: string;
        stopLetter?: string;
        zone?: string;
        accessibilitySummary?: string;
        hasDisruption?: boolean;
        lines?: TfL['Identifier'][];
        status?: boolean;
        id?: string;
        url?: string;
        name?: string;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
    };
    StopPointSequence: {
        lineId?: string;
        lineName?: string;
        direction?: string;
        /**
         * Format: int32
         * @description The id of this branch.
         */
        branchId?: number;
        /**
         * @description The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be
         *             identical in the case of a looped route e.g. the Circle line.
         */
        nextBranchIds?: number[];
        /**
         * @description The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be
         *             identical in the case of a looped route e.g. the Circle line.
         */
        prevBranchIds?: number[];
        stopPoint?: TfL['MatchedStop'][];
        serviceType?: 'Regular' | 'Night';
    };
    OrderedRoute: {
        name?: string;
        naptanIds?: string[];
        serviceType?: string;
    };
    'Tfl.Api.Common.DateRange': {
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        endDate?: string;
    };
    RouteSearchResponse: {
        input?: string;
        searchMatches?: TfL['RouteSearchMatch'][];
    };
    RouteSearchMatch: {
        lineId?: string;
        mode?: string;
        lineName?: string;
        lineRouteSection?: TfL['LineRouteSection'][];
        matchedRouteSections?: TfL['MatchedRouteSections'][];
        matchedStops?: TfL['MatchedStop'][];
        id?: string;
        url?: string;
        name?: string;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
    };
    LineRouteSection: {
        /** Format: int32 */
        routeId?: number;
        direction?: string;
        destination?: string;
        fromStation?: string;
        toStation?: string;
        serviceType?: string;
        vehicleDestinationText?: string;
    };
    MatchedRouteSections: {
        /** Format: int32 */
        id?: number;
    };
    TimetableResponse: {
        lineId?: string;
        lineName?: string;
        direction?: string;
        pdfUrl?: string;
        stations?: TfL['MatchedStop'][];
        stops?: TfL['MatchedStop'][];
        timetable?: TfL['Timetable'];
        disambiguation?: TfL['Timetables.Disambiguation'];
        statusErrorMessage?: string;
    };
    Timetable: {
        departureStopId?: string;
        routes?: TfL['TimetableRoute'][];
    };
    'Timetables.Disambiguation': {
        disambiguationOptions?: TfL['Timetables.DisambiguationOption'][];
    };
    TimetableRoute: {
        stationIntervals?: TfL['StationInterval'][];
        schedules?: TfL['Schedule'][];
    };
    'Timetables.DisambiguationOption': {
        description?: string;
        uri?: string;
    };
    StationInterval: {
        id?: string;
        intervals?: TfL['Interval'][];
    };
    Schedule: {
        name?: string;
        knownJourneys?: TfL['KnownJourney'][];
        firstJourney?: TfL['KnownJourney'];
        lastJourney?: TfL['KnownJourney'];
        periods?: TfL['Period'][];
    };
    Interval: {
        stopId?: string;
        /** Format: double */
        timeToArrival?: number;
    };
    KnownJourney: {
        hour?: string;
        minute?: string;
        /** Format: int32 */
        intervalId?: number;
    };
    Period: {
        type?: 'Normal' | 'FrequencyHours' | 'FrequencyMinutes' | 'Unknown';
        fromTime?: TfL['TwentyFourHourClockTime'];
        toTime?: TfL['TwentyFourHourClockTime'];
        frequency?: TfL['ServiceFrequency'];
    };
    TwentyFourHourClockTime: {
        hour?: string;
        minute?: string;
    };
    ServiceFrequency: {
        /** Format: double */
        lowestFrequency?: number;
        /** Format: double */
        highestFrequency?: number;
    };
    /** @description DTO to capture the prediction details */
    Prediction: {
        /** @description The identitier for the prediction */
        id?: string;
        /**
         * Format: int32
         * @description The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache)
         */
        operationType?: number;
        /** @description The actual vehicle in transit (for train modes, the leading car of the rolling set) */
        vehicleId?: string;
        /** @description Identifier for the prediction */
        naptanId?: string;
        /** @description Station name */
        stationName?: string;
        /** @description Unique identifier for the Line */
        lineId?: string;
        /** @description Line Name */
        lineName?: string;
        /** @description Platform name (for bus, this is the stop letter) */
        platformName?: string;
        /** @description Direction (unified to inbound/outbound) */
        direction?: string;
        /** @description Bearing (between 0 to 359) */
        bearing?: string;
        /** @description Naptan Identifier for the prediction's destination */
        destinationNaptanId?: string;
        /** @description Name of the destination */
        destinationName?: string;
        /**
         * Format: date-time
         * @description Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration)
         */
        timestamp?: string;
        /**
         * Format: int32
         * @description Prediction of the Time to station in seconds
         */
        timeToStation?: number;
        /** @description The current location of the vehicle. */
        currentLocation?: string;
        /** @description Routing information or other descriptive text about the path of the vehicle towards the destination */
        towards?: string;
        /**
         * Format: date-time
         * @description The expected arrival time of the vehicle at the stop/station
         */
        expectedArrival?: string;
        /**
         * Format: date-time
         * @description The expiry time for the prediction
         */
        timeToLive?: string;
        /** @description The mode name of the station/line the prediction relates to */
        modeName?: string;
        /** @description Keep the original timestamp from MongoDb fo debugging purposes */
        timing?: TfL['PredictionTiming'];
    };
    PredictionTiming: {
        countdownServerAdjustment?: string;
        /** Format: date-time */
        source?: string;
        /** Format: date-time */
        insert?: string;
        /** Format: date-time */
        read?: string;
        /** Format: date-time */
        sent?: string;
        /** Format: date-time */
        received?: string;
    };
    ActiveServiceType: {
        mode?: string;
        serviceType?: string;
    };
    /** @description Represent travel network status */
    NetworkStatus: {
        operator?: string;
        status?: string;
        message?: string;
        /** Format: int32 */
        statusLevel?: number;
    };
    CarParkOccupancy: {
        id?: string;
        bays?: TfL['Bay'][];
        name?: string;
        carParkDetailsUrl?: string;
    };
    Bay: {
        bayType?: string;
        /** Format: int32 */
        bayCount?: number;
        /** Format: int32 */
        free?: number;
        /** Format: int32 */
        occupied?: number;
    };
    ChargeConnectorOccupancy: {
        /** Format: int32 */
        id?: number;
        sourceSystemPlaceId?: string;
        status?: string;
    };
    /** @description Bike point occupancy */
    BikePointOccupancy: {
        /** @description Id of the bike point such as BikePoints_1 */
        id?: string;
        /** @description Name / Common name of the bike point */
        name?: string;
        /**
         * Format: int32
         * @description Total bike counts
         */
        bikesCount?: number;
        /**
         * Format: int32
         * @description Empty docks
         */
        emptyDocks?: number;
        /**
         * Format: int32
         * @description Total docks available
         */
        totalDocks?: number;
    };
    PlaceCategory: {
        category?: string;
        availableKeys?: string[];
    };
    SearchResponse: {
        query?: string;
        /** Format: int32 */
        from?: number;
        /** Format: int32 */
        page?: number;
        /** Format: int32 */
        pageSize?: number;
        provider?: string;
        /** Format: int32 */
        total?: number;
        matches?: TfL['SearchMatch'][];
        /** Format: double */
        maxScore?: number;
    };
    SearchMatch: {
        id?: string;
        url?: string;
        name?: string;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
    };
    'Tfl.Api.Common.PostcodeInput': {
        postcode?: string;
    };
    PlacePolygon: {
        geoPoints?: TfL['Tfl.Api.Common.GeoPoint'][];
        commonName?: string;
    };
    'Tfl.Api.Common.GeoPoint': {
        /** Format: double */
        lat: number;
        /** Format: double */
        lon: number;
    };
    'Tfl.Api.Common.PlaceGeo': {
        /** Format: double */
        swLat?: number;
        /** Format: double */
        swLon?: number;
        /** Format: double */
        neLat?: number;
        /** Format: double */
        neLon?: number;
        /** Format: double */
        lat?: number;
        /** Format: double */
        lon?: number;
    };
    RoadCorridor: {
        /** @description The Id of the Corridor e.g. "A406" */
        id?: string;
        /**
         * @description The display name of the Corridor e.g. "North Circular (A406)". This
         *             may be identical to the Id.
         */
        displayName?: string;
        /** @description The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null. */
        group?: string;
        /** @description Standard multi-mode status severity code */
        statusSeverity?: string;
        /** @description Description of the status severity as applied to RoadCorridors */
        statusSeverityDescription?: string;
        /**
         * @description The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate
         *             pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"
         */
        bounds?: string;
        /**
         * @description The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon
         *             in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"
         */
        envelope?: string;
        /**
         * Format: date-time
         * @description The start of the period over which status has been aggregated, or null if this is the current corridor status.
         */
        statusAggregationStartDate?: string;
        /**
         * Format: date-time
         * @description The end of the period over which status has been aggregated, or null if this is the current corridor status.
         */
        statusAggregationEndDate?: string;
        /** @description URL to retrieve this Corridor. */
        url?: string;
    };
    'Tfl.Api.Common.DateRangeNullable': {
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        endDate?: string;
    };
    RoadDisruption: {
        /** @description Unique identifier for the road disruption */
        id?: string;
        /** @description URL to retrieve this road disruption */
        url?: string;
        /** @description Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string. */
        point?: string;
        /** @description A description of the severity of the disruption. */
        severity?: string;
        /**
         * Format: int32
         * @description An ordinal of the disruption based on severity, level of interest and corridor.
         */
        ordinal?: number;
        /** @description Describes the nature of disruption e.g. Traffic Incidents, Works */
        category?: string;
        /** @description Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load */
        subCategory?: string;
        /** @description Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate. */
        comments?: string;
        /**
         * @description Text of the most recent update from the LSTCC on the state of the
         *              disruption, including the current traffic impact and any advice to
         *              road users.
         */
        currentUpdate?: string;
        /**
         * Format: date-time
         * @description The time when the last CurrentUpdate description was recorded,
         *             or null if no CurrentUpdate has been applied.
         */
        currentUpdateDateTime?: string;
        /** @description The Ids of affected corridors, if any. */
        corridorIds?: string[];
        /**
         * Format: date-time
         * @description The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
         *             For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.
         */
        startDateTime?: string;
        /**
         * Format: date-time
         * @description The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned
         *             disruptions in progress, this field will be omitted.
         */
        endDateTime?: string;
        /**
         * Format: date-time
         * @description The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly
         *             compare two instances of the same disruption to determine if it has been changed.
         */
        lastModifiedTime?: string;
        /**
         * @description This describes the level of potential impact on traffic operations of the disruption.
         *             High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention
         *             Medium = This is the default value
         *             Low = e.g. a frequently occurring disruption which is well known
         */
        levelOfInterest?: string;
        /** @description Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited. */
        location?: string;
        /**
         * @description This describes the status of the disruption.
         *             Active = currently in progress
         *             Active Long Term = currently in progress and long term
         *             Scheduled = scheduled to start within the next 180 days
         *             Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.
         *             Recently Cleared = recently cleared in the last 24 hours
         *             Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.
         */
        status?: string;
        /**
         * @description Geography version of Point for output as GeoJSON.
         *             Can not use Geometry in a consistent way as non-TIMS disruptions do not have a polygon
         */
        geography?: TfL['System.Data.Spatial.DbGeography'];
        /**
         * @description GeoJSON formatted latitude/longitude (WGS84) pairs forming an enclosed polyline or polygon. The polygon will only be included where affected streets information
         *             is not available for the disruption, would be inappropriate (e.g. a very large number of streets), or is centred on an area without streets (e.g. a football stadium).
         */
        geometry?: TfL['System.Data.Spatial.DbGeography'];
        /** @description A collection of zero or more streets affected by the disruption. */
        streets?: TfL['Street'][];
        /** @description True if the disruption is planned on a future date that is open to change */
        isProvisional?: boolean;
        /**
         * @description True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a
         *             Severe or Serious disruption for severity filtering purposes.
         */
        hasClosures?: boolean;
        /** @description The text of any associated link */
        linkText?: string;
        /** @description The url of any associated link */
        linkUrl?: string;
        /** @description Any associated road project */
        roadProject?: TfL['RoadProject'];
        /**
         * Format: date-time
         * @description TDM Additional properties
         */
        publishStartDate?: string;
        /** Format: date-time */
        publishEndDate?: string;
        timeFrame?: string;
        roadDisruptionLines?: TfL['RoadDisruptionLine'][];
        roadDisruptionImpactAreas?: TfL['RoadDisruptionImpactArea'][];
        recurringSchedules?: TfL['RoadDisruptionSchedule'][];
    };
    Street: {
        /** @description Street name */
        name?: string;
        /**
         * @description Type of road closure. Some example values:
         *             Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.
         *             Partial Closure = road is partially blocked, closed or restricted.
         *             Full Closure = road is fully blocked or closed.
         */
        closure?: string;
        /**
         * @description The direction of the disruption on the street. Some example values:
         *             All Directions
         *             All Approaches
         *             Clockwise
         *             Anti-Clockwise
         *             Northbound
         *             Eastbound
         *             Southbound
         *             Westbound
         *             Both Directions
         */
        directions?: string;
        /** @description Geographic description of the sections of this street that are affected. */
        segments?: TfL['StreetSegment'][];
        /**
         * Format: int64
         * @description The ID from the source system of the disruption that this street belongs to.
         */
        sourceSystemId?: number;
        /** @description The key of the source system of the disruption that this street belongs to. */
        sourceSystemKey?: string;
    };
    RoadProject: {
        projectId?: string;
        schemeName?: string;
        projectName?: string;
        projectDescription?: string;
        projectPageUrl?: string;
        consultationPageUrl?: string;
        /** Format: date-time */
        consultationStartDate?: string;
        /** Format: date-time */
        consultationEndDate?: string;
        /** Format: date-time */
        constructionStartDate?: string;
        /** Format: date-time */
        constructionEndDate?: string;
        boroughsBenefited?: string[];
        cycleSuperhighwayId?: string;
        phase?: 'Unscoped' | 'Concept' | 'ConsultationEnded' | 'Consultation' | 'Construction' | 'Complete';
        contactName?: string;
        contactEmail?: string;
        externalPageUrl?: string;
        projectSummaryPageUrl?: string;
    };
    RoadDisruptionLine: {
        /** Format: int32 */
        id?: number;
        roadDisruptionId?: string;
        isDiversion?: boolean;
        multiLineString?: TfL['System.Data.Spatial.DbGeography'];
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        endDate?: string;
        startTime?: string;
        endTime?: string;
    };
    RoadDisruptionImpactArea: {
        /** Format: int32 */
        id?: number;
        roadDisruptionId?: string;
        polygon?: TfL['System.Data.Spatial.DbGeography'];
        /** Format: date-time */
        startDate?: string;
        /** Format: date-time */
        endDate?: string;
        startTime?: string;
        endTime?: string;
    };
    RoadDisruptionSchedule: {
        /** Format: date-time */
        startTime?: string;
        /** Format: date-time */
        endTime?: string;
    };
    StreetSegment: {
        /** @description A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link. */
        toid?: string;
        /** @description geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment. */
        lineString?: string;
        /**
         * Format: int64
         * @description The ID from the source system of the disruption that this street belongs to.
         */
        sourceSystemId?: number;
        /** @description The key of the source system of the disruption that this street belongs to. */
        sourceSystemKey?: string;
    };
    Redirect: {
        shortUrl?: string;
        longUrl?: string;
        active?: boolean;
    };
    StopPointCategory: {
        category?: string;
        availableKeys?: string[];
    };
    LineServiceType: {
        lineName?: string;
        lineSpecificServiceTypes?: TfL['LineSpecificServiceType'][];
    };
    LineSpecificServiceType: {
        serviceType?: TfL['LineServiceTypeInfo'];
        stopServesServiceType?: boolean;
    };
    /** @description DTO to capture the prediction details */
    ArrivalDeparture: {
        /** @description Platform name (for bus, this is the stop letter) */
        platformName?: string;
        /** @description Naptan Identifier for the prediction's destination */
        destinationNaptanId?: string;
        /** @description Name of the destination */
        destinationName?: string;
        /** @description Identifier for the prediction */
        naptanId?: string;
        /** @description Station name */
        stationName?: string;
        /**
         * Format: date-time
         * @description Estimated time of arrival
         */
        estimatedTimeOfArrival?: string;
        /**
         * Format: date-time
         * @description Estimated time of arrival
         */
        scheduledTimeOfArrival?: string;
        /**
         * Format: date-time
         * @description Estimated time of arrival
         */
        estimatedTimeOfDeparture?: string;
        /**
         * Format: date-time
         * @description Estimated time of arrival
         */
        scheduledTimeOfDeparture?: string;
        /** @description Estimated time of arrival */
        minutesAndSecondsToArrival?: string;
        /** @description Estimated time of arrival */
        minutesAndSecondsToDeparture?: string;
        /** @description Reason for cancellation or delay */
        cause?: string;
        /** @description Status of departure */
        departureStatus?: 'OnTime' | 'Delayed' | 'Cancelled' | 'NotStoppingAtStation';
        /** @description Keep the original timestamp from MongoDb fo debugging purposes */
        timing?: TfL['PredictionTiming'];
    };
    StopPointRouteSection: {
        naptanId?: string;
        lineId?: string;
        mode?: string;
        /** Format: date-time */
        validFrom?: string;
        /** Format: date-time */
        validTo?: string;
        direction?: string;
        routeSectionName?: string;
        lineString?: string;
        isActive?: boolean;
        serviceType?: string;
        vehicleDestinationText?: string;
        destinationName?: string;
    };
    DisruptedPoint: {
        atcoCode?: string;
        /** Format: date-time */
        fromDate?: string;
        /** Format: date-time */
        toDate?: string;
        description?: string;
        commonName?: string;
        type?: string;
        mode?: string;
        stationAtcoCode?: string;
        appearance?: string;
        additionalInformation?: string;
    };
    /** @description A paged response containing StopPoints */
    StopPointsResponse: {
        /** @description The centre latitude/longitude of this list of StopPoints */
        centrePoint?: number[];
        /** @description Collection of stop points */
        stopPoints?: TfL['StopPoint'][];
        /**
         * Format: int32
         * @description The maximum size of the page in this response i.e. the maximum number of StopPoints
         */
        pageSize?: number;
        /**
         * Format: int32
         * @description The total number of StopPoints available across all pages
         */
        total?: number;
        /**
         * Format: int32
         * @description The index of this page
         */
        page?: number;
    };
    'Fares.RecommendationResponse': {
        recommendations?: TfL['Fares.Recommendation'][];
    };
    'Fares.Recommendation': {
        /** Format: int32 */
        id?: number;
        /** Format: int32 */
        rule?: number;
        /** Format: int32 */
        rank?: number;
        fareType?: string;
        product?: string;
        ticketType?: string;
        ticketTime?: string;
        productType?: string;
        discountCard?: string;
        zones?: string;
        cost?: string;
        priceDescription?: string;
        priceComparison?: string;
        recommendedTopUp?: string;
        notes?: TfL['Message'][];
        keyFeatures?: TfL['Message'][];
        gettingYourTicket?: TfL['Message'][];
        /** Format: double */
        singleFare?: number;
    };
    VehicleMatch: {
        vrm?: string;
        type?: string;
        make?: string;
        model?: string;
        colour?: string;
        compliance?: 'NotAvailable' | 'NotCompliant' | 'Compliant' | 'Exempt';
    };
    'Tfl.Api.Common.ApiVersionInfo': {
        label?: string;
        /** Format: date-time */
        timestamp?: string;
        version?: string;
        assemblies?: string[];
    };
}
