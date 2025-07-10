export interface IQuote {
    id: number,
    author: string,
    quote: string
}

export interface IProduct {
    id: number,
    title: string,
    thumbnail: string,
    price: number
}

export interface IComment {
    id: number,
    body: string,
    likes: number,
    user: {
        id: number,
        fullName: string,
        username: string
    }
}


export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string
}


export interface IPost {
    id: number,
    body: string,
    title: string
}

export interface IRecipe {
    id: number,
    servings: number,
    name: string, 
    image: string
}