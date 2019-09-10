import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {booksFilter, booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";

import BookList from "../../components/book-list/book-list";
import {bindActionCreators, compose} from "redux";
import BookFilter from "../../components/book-filter/book-filter";
import {productsReSelector, filterReSelector} from "../../selectors/books";


class BookListContainer extends Component {

    componentDidMount() {
        const {booksFetch} = this.props;
        booksFetch();
    }

    render() {
        console.log('render')
        const {products, loading, error, filter, booksFilter, bookAddToCart} = this.props;

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
                <BookFilter setFilter={booksFilter} filter={filter}/>
                <br/>
                <BookList data={products} onAddToCart={bookAddToCart}/>
            </>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const {loading, error} = state.books;

    return {
        products: productsReSelector(state, ownProps),
        filter: filterReSelector(state, ownProps),
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksFetch,
        bookAddToCart,
        booksFilter
    }, dispatch);
};


const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(BookListContainer);