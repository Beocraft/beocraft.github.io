import axios from "axios"

const client = axios.create({
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class StatusService {
    static async retrieveStatus() {
        return client.get('https://api.pequla.com/mcstatus')
    }

    static async retrieveModdedStatus() {
        return client.get('https://api.pequla.com/mcstatusmoded')
    }
}