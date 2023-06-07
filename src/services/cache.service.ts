import axios from "axios"

const client = axios.create({
    baseURL: 'https://api.pequla.com/guildcache',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class CacheService {
    static async retrieveAll() {
        return await client.get('/data')
    }

    static async retrieveByUuid(uuid: string) {
        return await client.get('/data/uuid/' + uuid)
    }

    static async retrieveStats() {
        return await client.get('/data/stats')
    }
}