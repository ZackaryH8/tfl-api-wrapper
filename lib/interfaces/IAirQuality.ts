declare module GetAirQuality {
    export interface CurrentForecast {
        $id: string;
        $type: string;
        forecastType: string;
        forecastID: string;
        forecastBand: string;
        forecastSummary: string;
        nO2Band: string;
        o3Band: string;
        pM10Band: string;
        pM25Band: string;
        sO2Band: string;
        forecastText: string;
    }

    export interface Root {
        $id: string;
        $type: string;
        updatePeriod: string;
        updateFrequency: string;
        forecastURL: string;
        disclaimerText: string;
        currentForecast: CurrentForecast[];
    }
}
