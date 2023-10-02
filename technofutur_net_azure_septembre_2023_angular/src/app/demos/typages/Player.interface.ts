export interface IPlayer{
    name : string
    ranked : number
    win : number
    loose : number
    avatar : string
    money : number
}

export class Player implements IPlayer{
    name: string
    ranked: number
    win: number
    loose: number
    avatar: string
    money: number

    constructor(name : string, ranked : number, win : number, loose : number, avatar : string, money : number) {
        this.name = name
        this.ranked = ranked
        this.win = win
        this.loose = loose
        this.avatar = avatar
        this.money = money
    }

}



export interface IListPlayers{
    playersList : Player[]

    ban(player : Player) : void
    asc?() : void
    desc() : void
}