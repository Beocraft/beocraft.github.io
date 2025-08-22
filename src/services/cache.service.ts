import axios from "axios"
import { DataModel } from "@/models/data.model"

const client = axios.create({
    baseURL: 'https://sync.beocraft.net/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class CacheService {
    static async getDataList() {
        return await client.get<DataModel[]>('/data/list')
    }

    static async getDataByUUID(uuid: string) {
        return await client.get<DataModel>('/data/uuid/' + uuid)
    }
}