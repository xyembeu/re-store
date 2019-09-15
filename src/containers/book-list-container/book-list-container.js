import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";

import BookList from "../../components/book-list/book-list";
import {bindActionCreators, compose} from "redux";
import BookFilter from "../../components/book-filter/book-filter";
import {productsReSelector, filterReSelector} from "../../selectors/books";
import pickBy from "lodash.pickby";
import identity from "lodash.identity";
import queryString from "query-string";


class BookListContainer extends Component {

    componentDidMount() {
        const {booksFetch} = this.props;
        booksFetch();
    }

    booksFilter = (filter) =>{

        if (!Object.keys(filter).length) {
            this.props.history.push(`/orders`);
            return;
        }
        const cleanedFilters = pickBy(filter, identity);
        const queryParams = queryString.stringify(cleanedFilters);
        this.props.history.push('/orders?' + queryParams);
    };

    render() {

        const {products, loading, error, filter,  bookAddToCart} = this.props;

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
                <BookFilter setFilter={this.booksFilter} filter={filter}/>
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
        bookAddToCart
    }, dispatch);
};


const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(BookListContainer);
