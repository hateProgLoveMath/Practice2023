import { v4 } from 'uuid'
import { Product } from '../types/ProductList/Product.types'

import matholymp05 from '../assets/images/TSPSO05.jpg'
import matholymp18 from '../assets/images/TSPSO18.jpg'
import matholymp19 from '../assets/images/TSPSO19.jpg'
import matholymp21 from '../assets/images/TSPSO21.jpg'
import econom from '../assets/images/econom.jpg'
import EconomAnalyze from '../assets/images/EconomAnalyze.jpg'
import IER from '../assets/images/IER.jpg'
import WEconom from '../assets/images/WEconom.jpg'
import QA from '../assets/images/QA.jpg'

export const PRODUCTS: Product[] = [
    {
        _id: v4(),
        title: "Car",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 316,
        images: [
            matholymp18
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Crow",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 957438634,
        images: [
            matholymp19
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Crow",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 1259,
        images: [
            matholymp21
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Book",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 3359,
        images: [
            econom
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Book",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 3359,
        images: [
            EconomAnalyze
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Book",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 3359,
        images: [
            IER
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Book",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 3359,
        images: [
            WEconom
        ],
        ageLimit: 6
    },
    {
        _id: v4(),
        title: "Book",
        author: "Jane Doe",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 5285,
        images: [
            QA
        ],
        ageLimit: 6
    },
]