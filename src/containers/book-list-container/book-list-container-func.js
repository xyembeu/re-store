import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";

import BookList from "../../components/book-list/book-list";
import BookFilter from "../../components/book-filter/book-filter";

import {filterReSelector, productsReSelector} from "../../selectors/books";
import pickBy from "lodash.pickby";
import identity from "lodash.identity";
import queryString from "query-string";
import {withRouter} from "react-router-dom";


function BookListContainer(props) {
    const {loading, error} = useSelector((state) => state.books);

    const products = useSelector(state => productsReSelector(state, props.history));
    const filter = useSelector(state => filterReSelector(state, props.history));

    const dispatch = useDispatch();

    const fetchGet = useCallback(
        () => dispatch(booksFetch()),
        [dispatch]
    );

    const filterGet = useCallback(
        (filter) => {
            if (!Object.keys(filter).length) {
                props.history.push(`/orders`);
                return;
            }
            const cleanedFilters = pickBy(filter, identity);
            const queryParams = queryString.stringify(cleanedFilters);
            props.history.push('/orders?' + queryParams);
        },
        []
    );

    const addCart = useCallback(
        (item) => dispatch(bookAddToCart(item)),
        [dispatch]
    );

    useEffect(() => {
        fetchGet();
    }, []);


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
            <BookFilter setFilter={filterGet} filter={filter}/>
            <br/>
            <BookList data={products} onAddToCart={addCart}/>
        </>
    )

}

export default withRouter(BookListContainer);
