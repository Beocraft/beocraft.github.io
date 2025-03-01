import { MemberModel } from "@/models/member.model"
import { PlayerModel } from "@/models/player.model"
import { StatusModel } from "@/models/status.model"
import axios from "axios"

const client = axios.create({
    baseURL: 'https://api.beocraft.net',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: function (status: number) {
        return status === 200
    }
})

export class DataService {
    static async getServerStatus() {
        return await client.get<StatusModel>('/status/players')
    }

    static async getDiscordMember(uuid: string) {
        return await client.get<MemberModel>('/user/' + uuid)
    }

    static async getPlayersList() {
        return await client.get<PlayerModel[]>('/players')
    }
}