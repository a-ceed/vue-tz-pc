export interface IState {
    articles: Iarticle[]
}

export interface Iarticle {
    id: number,
    title: string,
    imgUrl: string,
    description: string,
    lois: number,
    comments?: IComment[],
}

export interface IComment {
    commentNumber: number,
    commentBody: string,
}