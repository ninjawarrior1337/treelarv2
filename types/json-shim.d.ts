export interface Idol {
    name: string,
    color: string,
    birthday: string
}

declare module "*lovelivedata.json" {
    var idols: Idol[]
    export {
        idols
    }
}