import BookListItem from "../book-list-item/book-list-item";
import React, {PureComponent} from "react";
import * as PropTypes from "prop-types";



class BookList extends PureComponent {

    state = {
        open: false
    };

    toggle = () => {
        this.setState(({open}) => ({open: !open}));
    };


    render() {

        const {data, onAddToCart, toggle} = this.props;

        return (
            <table className={'table'}>
                <tbody>
                {
                    data.map((item) => {
                        return (
                            <BookListItem key={item.id} item={item} onAddToCart={onAddToCart} toggle={this.toggle}/>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

BookList.propTypes = {
    data: PropTypes.any,
    onAddToCart: PropTypes.any,
    toggle: PropTypes.any
};

export default BookList;
