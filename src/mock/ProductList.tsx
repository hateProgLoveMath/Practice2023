import { randomUUID } from 'crypto'
import { Product } from '../types/ProductList/Product.types'

export const PRODUCTS: Product[] = [
    {
        _id: randomUUID(),
        title: "Car",
        price: 316,
        image: "images/TODO"
    },
    {
        _id: randomUUID(),
        title: "Crow",
        price: 957438634,
        image: "images/TODO"
    }
]