import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {booksLoaded, booksRequested} from "../../actions/books";


import BookList from "../../components/book-list/book-list";
import {productsReSelector} from "../../selectors/books";
import isEqual from 'lodash.isequal'

class BookListContainer extends Component {

    componentDidMount() {

        this.props.booksRequested();

        setTimeout(() => {
            this.props.booksLoaded();
        }, 300)

    }


    render() {
        const {products, loading} = this.props;

        if (loading) {
            return <div>123</div>
        }
        if (!!products.length && !loading) {
            console.log(products)
            return (
                <BookList data={products} toggle={this.props.toggle}/>
            )
        }
        return null

    }
}

const mapStateToProps = (state) => {


    return {
        products: productsReSelector(state),
        loading: state.books.loading

    }
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};


export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
