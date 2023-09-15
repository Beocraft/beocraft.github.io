import axios from "axios"
import {StatusModel} from "@/models/status.model";
import {StatsModel} from "@/models/stats.model";
import {DataModel} from "@/models/data.model";

const client = axios.create({
    baseURL: 'https://api.beocraft.net',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class CacheService {
    static async retrieveAll() {
        return await client.get<DataModel[]>('/data')
    }

    static async retrieveByUuid(uuid: string) {
        return await client.get<DataModel>('/data/uuid/' + uuid)
    }

    static async retrieveStats() {
        return await client.get<StatsModel>('/data/stats')
    }

    static async retrieveStatus(addr: string) {
        return client.get<StatusModel>('/status/' + addr)
    }
}