import {
    FETCH_BOOKS_LOADED,
    FETCH_BOOKS_REQUESTED,
    FETCH_BOOKS_ERROR
} from '../actions/books';

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUESTED:
            return {
                products: [],
                loading: true,
                error: null
            };
        case FETCH_BOOKS_LOADED:
            return {
                products: action.payload,
                loading: false,
                error: null
            };
        case FETCH_BOOKS_ERROR:
            return {
                products: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
