import React, {Component} from 'react';
import BookList from "../containers/BookList/book-list-container";
import BookFilter from "../containers/book-filter-container/book-filter-container";
import {withRouter} from "react-router-dom";

class OrdersPage extends Component {

    render() {


        return (
            <div className="container">
                <div className="col-md-12">
                    <h4>Товары</h4>
                    {/*<BookFilter/>*/}
                    <BookList s={'button__icon'}/>
                </div>
            </div>
        );
    }
}

export default OrdersPage;
