import BookListItem from "../book-list-item/book-list-item";
import React from "react";

const BookList = ({data, onAddToCart}) =>{
    return (
        <table className={'table'}>
            <tbody>
            {
                data.map((item) => {
                    return (
                        <BookListItem key={item.id} item={item} onAddToCart={onAddToCart}/>
                    );
                })
            }
            </tbody>
        </table>
    );
};

export default BookList;
