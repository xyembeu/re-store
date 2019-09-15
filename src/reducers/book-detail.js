import {
    FETCH_BOOK_LOADED,
    FETCH_BOOK_REQUESTED,
    FETCH_BOOK_ERROR
} from '../sagas/book-detail';

const initialState = {
    product: {},
    loading: true,
    error: null
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_REQUESTED:
            return {
                ...state,
                product: {},
                loading: true,
                error: null
            };
        case FETCH_BOOK_LOADED:
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: null
            };
        case FETCH_BOOK_ERROR:
            return {
                ...state,
                product: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
