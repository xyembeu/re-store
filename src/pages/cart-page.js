import React, {Component} from 'react';
import Cart from "../containers/cart-container/cart-container";

class cartPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <h4>Заказы</h4>
                    <Cart/>
                </div>
            </div>
        );
    }
}

export default cartPage;