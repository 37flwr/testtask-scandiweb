import HomePage from '../pages/HomePage'
import ItemPage from '../pages/ItemPage'
import ProductPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

export const publicRoutes = [
    {
        path: `/`,
        exact: true,
        component: HomePage,
    },
    {
        path: `/:category`,
        exact: false,
        component: ProductPage,
    },
    {
        path: `/item:id`,
        exact: false,
        component: ItemPage,
    },
    {
        path: `/cart`,
        exact: false,
        component: CartPage,
    },
]