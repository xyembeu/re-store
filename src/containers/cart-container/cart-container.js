import React, {Component} from 'react';
import {connect} from "react-redux";
import {bookAddToCart, bookRemoveFromCart, allBooksRemoveFromCart} from "../../actions/cart";

import {compose} from "redux";
import Cart from "../../components/cart/cart";


class CartContainer extends Component {
    render() {
        const {cartItems, onIncrease, onDecrease, onDelete} = this.props;

        return(
            <Cart data={cartItems} onIncrease={onIncrease} onDecrease={onDecrease}
                  onDelete={onDelete}/>
        )
    }
}

const mapStateToProps = (state) => {
    const {cartItems} = state.cart;

    return {
        cartItems
    }
};

const mapDispatchToProps = {
    onIncrease: bookAddToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CartContainer);