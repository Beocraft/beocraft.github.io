import axios from "axios"
import { DataModel } from "@/models/data.model"

const client = axios.create({
    baseURL: 'https://cache.samifying.com/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class CacheService {
    static async retrieveByUUID(uuid: string) {
        return await client.get<DataModel>('/data/uuid/' + uuid)
    }
}