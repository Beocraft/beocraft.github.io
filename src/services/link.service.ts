import axios from "axios"

const client = axios.create({
    baseURL: 'https://link.samifying.com/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class LinkService {
    static async retrieveStatus() {
        return client.get('/status/play.beocraft.net')
    }
}