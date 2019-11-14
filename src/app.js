import React, {PureComponent} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from "./components/header/header";
import HomePage from "./pages/home-page";
import OrdersPage from "./pages/orders-page";
import CartPage from "./pages/cart-page";


class App extends PureComponent {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path='/' exact render={props => <HomePage {...props}/>}/>
                    <Route path='/orders' exact render={props => <OrdersPage {...props}/>}/>
                    <Route path='/cart' exact  render={props => <CartPage {...props}/>}/>
                </Switch>
            </>
        );
    }
}

export default App;
