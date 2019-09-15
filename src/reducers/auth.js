import {
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_REQUESTED,
    FETCH_AUTH_ERROR
} from '../actions/auth';

const initialState = {
    user: {},
    loading: false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTH_REQUESTED:
            return {
                user: {},
                loading: true,
                error: null
            };
        case FETCH_AUTH_SUCCESS:
            return {
                user: {...action.payload},
                loading: false,
                error: null
            };
        case FETCH_AUTH_ERROR:
            return {
                user: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
