import OrdersPage from "./pages/orders-page";
import OrderDetailPage from "./pages/order-detail-page";
import CartPage from "./pages/cart-page";
import LoginPage from "./pages/login-page";

export const routes = [
    {
        isExact: true,
        path: '/',
        component: OrdersPage,
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


