export type Product = {
    readonly _id: string,
    title: string,
    author: string,
    about: string,
    price: number,
    // category: string,
    images: string[],
    ageLimit: number
}