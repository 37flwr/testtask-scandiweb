import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductsPage'

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
]