import React, {Component} from 'react';
import BookDetail from "../containers/book-detail-container/book-detail-container";

class OrderDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <BookDetail/>
                </div>
            </div>
        );
    }
}

export default OrderDetailPage;