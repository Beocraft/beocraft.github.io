import { PlayerModel } from "./player.model"

export interface StatusModel {
    max: number
    online: number
    list: PlayerModel[]
}