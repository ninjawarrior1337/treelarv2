interface Project {
    title: string
    description: string
    img: string
    links: string[]
}
declare module "*projects.yaml" {
    var Projects: Project[]
    export = Projects
}

interface AnimeCard {
    title: string
    jatitle: string
    imgUrl: string
    desc: string
}

declare module "*anime.yaml" {
    var currShows: AnimeCard[]
    var prevShows: AnimeCard[]
    export {
        currShows,
        prevShows
    }
}