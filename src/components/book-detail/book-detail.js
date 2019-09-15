import React from "react";

const BookDetail = ({data: {id, title, author, price}, onAddToCart}) => {
    return (
        <div>
            <h3>Товар - {title}</h3>
            <ul>
                <li>Автор: {author}</li>
                <li>Цена: {price} тг</li>
            </ul>
            <button onClick={() => onAddToCart({id, title, price})}>В корзину</button>
        </div>
    );
};

export default BookDetail;
