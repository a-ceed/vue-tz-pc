export interface IState {
    saveLocal: string,
    companies: ICompany[],
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

export interface ICompany {
    name: string,
    imgUrl: string,
    antirating: number,
}

export interface IComment {
    number: number,
    message: string,
}