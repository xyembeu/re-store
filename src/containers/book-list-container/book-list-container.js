import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {booksFilter, booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";
import {customHistory} from '../../history';

import BookList from "../../components/book-list/book-list";
import BookFilter from "../../components/book-filter/book-filter";

import {filterReSelector, productsReSelector} from "../../selectors/books";


function BookListContainer() {
    const {loading, error} = useSelector((state) => state.books);

    const products = useSelector(state => productsReSelector(state, customHistory) );
    const filter = useSelector(state => filterReSelector(state, customHistory));

    const dispatch = useDispatch();

    const fetchGet = useCallback(
        () => dispatch(booksFetch()),
        [dispatch]
    );

    const filterGet = useCallback(
        (filter) => {
           return dispatch(booksFilter(filter))
        },
        [dispatch]
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

    console.log('render')


    return (
        <>
            <BookFilter setFilter={filterGet} filter={filter}/>
            <br/>
            <BookList data={products} onAddToCart={addCart}/>
        </>
    )

}

export default BookListContainer;

