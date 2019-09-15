import React, {Component} from 'react';
import {connect} from "react-redux";


class CartTotalContainer extends Component {
    render() {
        const {cartTotal, cartCount} = this.props;

        return <div style={{'textAlign': 'right'}}>{cartCount}шт. / {cartTotal}тг.</div>
    }
}

const mapStateToProps = (state) => {
    const {cartItems} = state.cart;

    const cartTotal = cartItems.reduce((prev, current) => {
        return prev + current.total;
    }, 0);

    const cartCount = cartItems.length;
    return {
        cartTotal,
        cartCount
    }
};

export default connect(mapStateToProps)(CartTotalContainer);