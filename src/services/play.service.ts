import axios from "axios"

const client = axios.create({
    baseURL: 'https://play.beocraft.net/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class PlayService {
    static async getPlayerStatus() {
        return await client.get('/status/players')
    }

    static async getUser(uuid: string) {
        return await client.get('/user?uuid=' + uuid)
    }
}