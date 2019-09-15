import {
    FETCH_BOOKS_LOADED,
    FETCH_BOOKS_REQUESTED,
    FETCH_BOOKS_ERROR
} from '../actions/books';

const initialState = {
    products: [],
    loading: true,
    error: null
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUESTED:
            return {
                ...state,
                products: [],
                loading: true,
                error: null
            };
        case FETCH_BOOKS_LOADED:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error:null
            };
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
