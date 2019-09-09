import { combineReducers } from 'redux';
import { reducer as formReducer }   from 'redux-form';

import { booksReducer } from './books';
import { bookReducer } from './book-detail';
import { cartReducer } from './cart';
import {authReducer} from "./auth";
import {constructorReducer} from "./constructor";


export default combineReducers({
    books: booksReducer,
    book: bookReducer,
    cart: cartReducer,
    auth: authReducer,
    form:formReducer,
    steps: constructorReducer
});
