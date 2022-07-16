import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import ProductListPage from '../pages/ProductListPage'
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
        component: ProductListPage,
    },
    {
        path: `/product:id`,
        exact: false,
        component: ProductPage,
    },
    {
        path: `/cart`,
        exact: true,
        component: CartPage,
    },
]