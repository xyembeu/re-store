import {
    FETCH_CONSTRUCTOR_SUCCESS,
    FETCH_CONSTRUCTOR_REQUESTED,
    FETCH_CONSTRUCTOR_ERROR
} from '../actions/constructor';

const initialState = {
    data: [],
    loading: true,
    error: null
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONSTRUCTOR_REQUESTED:
            return {
                data: [],
                loading: true,
                error: null
            };
        case FETCH_CONSTRUCTOR_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null
            };
        case FETCH_CONSTRUCTOR_ERROR:
            return {
                data: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
