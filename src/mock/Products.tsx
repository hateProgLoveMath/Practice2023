import { v4 } from 'uuid'
import { Product } from '../types/ProductList/Product.types'

export const PRODUCTS: Product[] = [
    {
        _id: v4(),
        title: "Car",
        price: 316,
        images: [
            "images/TODO",
        ]
    },
    {
        _id: v4(),
        title: "Crow",
        price: 957438634,
        images: [
            "images/TODO",
        ]
    }
]