import React, {Component} from 'react';
import BookList from "../containers/book-list-container/book-list-container";

class OrdersPage extends Component {
    render() {

        return (
            <div className="container">
                <div className="col-md-12">
                    <h4>Товары</h4>
                    <BookList/>
                </div>
            </div>
        );
    }
}

export default OrdersPage;
