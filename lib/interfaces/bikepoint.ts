declare module IBikePoint {
    export interface AdditionalProperty {
        $type: string;
        category: string;
        key: string;
        sourceSystemKey: string;
        value: string;
        modified: Date;
    }

    export interface Root {
        $type: string;
        id: string;
        url: string;
        commonName: string;
        placeType: string;
        additionalProperties: AdditionalProperty[];
        children: any[];
        childrenUrls: any[];
        lat: number;
        lon: number;
    }
}

export { IBikePoint };
