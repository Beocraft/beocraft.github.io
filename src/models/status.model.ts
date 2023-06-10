import {DataModel} from "@/models/data.model";

export interface StatusModel {
    description: {
        text: string
    },
    players: {
        max: number,
        online: number,
        sample: DataModel[]
    },
    version: {
        name: string,
        protocol: number
    },
    favicon: string,
    time: number
}