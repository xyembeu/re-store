import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {booksFetch} from "../../actions/books";

import {bookAddToCart} from "../../actions/cart";

import BookList from "../../components/book-list/book-list";

import {productsReSelector} from "../../selectors/books";
import {withRouter} from "react-router-dom";


function BookListContainer(props) {
    const {loading, error} = useSelector((state) => state.books);

    const products = useSelector(state => productsReSelector(state, props));
    const dispatch = useDispatch();
    const addCart = useCallback(
        (item) => dispatch(bookAddToCart(item)),
        [dispatch]
    );

    useEffect(() => {
        dispatch(booksFetch(true));
        return () => {
            dispatch(booksFetch(false));
        }
    }, [dispatch]);


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

    console.log('render');

    return (
        <>
            <BookList data={products} onAddToCart={addCart}/>
        </>
    )

}

export default withRouter(BookListContainer);
