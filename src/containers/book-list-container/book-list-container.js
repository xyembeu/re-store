import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";

import BookList from "../../components/book-list/book-list";
import {bindActionCreators, compose} from "redux";

import {productsReSelector} from "../../selectors/books";


class BookListContainer extends Component {

    componentDidMount() {
        const {booksFetch} = this.props;
        booksFetch(true);
        console.log('999');
    }


    render() {
        const {products, loading, error,  bookAddToCart} = this.props;

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
                <BookList data={products} onAddToCart={bookAddToCart}/>
            </>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const {loading, error} = state.books;

    return {
        products: productsReSelector(state, ownProps),
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksFetch,
        bookAddToCart
    }, dispatch);
};


const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(BookListContainer);
