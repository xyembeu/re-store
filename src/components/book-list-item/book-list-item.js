import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BookListItem extends Component {
    render() {
        const {item: {id, title, author, price}, onAddToCart} = this.props;
        return (
            <tr>
                <td><Link to={`/orders/${id}`}>{title}</Link></td>
                <td>{author}</td>
                <td>{price}тг</td>
                <td>
                    <button onClick={() => {
                        onAddToCart({id, title, price})
                    }}>
                        В корзину
                    </button>
                </td>
            </tr>
        );
    }
}

export default BookListItem;