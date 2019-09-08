import OrdersPage from "./pages/orders-page";
import OrderDetailPage from "./pages/order-detail-page";
import CartPage from "./pages/cart-page";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";

export const routes = [
    {
        isExact: true,
        path: '/',
        component: HomePage,
        isPrivate: true
    },
    {
        path: '/orders/:id',
        component: OrderDetailPage,
        isPrivate: true
    },
    {
        path: '/orders',
        component: OrdersPage,
        isPrivate: true
    },
    {
        path: '/cart',
        component: CartPage,
        isPrivate: true
    },
    {
        path: '/login',
        component: LoginPage
    }
];


