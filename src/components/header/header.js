import React from 'react';
import CartTotal from "../../containers/cart-total-container/cart-total-container";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <NavLink to={'/'}>Главная</NavLink>/
                        <NavLink to={'/orders'}>Заказы</NavLink>/
                        <NavLink to={'/cart'}>Корзина</NavLink>
                    </div>
                    <div className="col-md-6">
                        <CartTotal/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
