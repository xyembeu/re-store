import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {bookGetById} from "../../sagas/book-detail";
import {bookAddToCart} from "../../actions/cart";

import {bindActionCreators, compose} from "redux";

import BookDetail from "../../components/book-detail/book-detail";


class BookDetailContainer extends Component {
    componentDidMount() {

        const {bookGetById} = this.props;
        bookGetById(+this.props.match.params.id);
    }

    render() {
        const {product, onAddToCart, loading, error} = this.props;

        if (loading) {
            return (
                <div>Loading...</div>
            );
        }

        if (error) {
            return (
                <div>{error}</div>
            );
        }


        return (
            <>
                <BookDetail data={product} onAddToCart={onAddToCart}/>
            </>
        )

    }
}

const mapStateToProps = (state) => {
    const {product, loading, error} = state.book;

    return {
        product,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        bookGetById,
        onAddToCart: bookAddToCart
    }, dispatch);
};

export default withRouter(
    compose(
        connect(mapStateToProps, mapDispatchToProps)
    )(BookDetailContainer));
