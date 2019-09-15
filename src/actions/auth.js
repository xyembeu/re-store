export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_REQUESTED = 'FETCH_AUTH_REQUESTED';
export const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';
export const FETCH_AUTH_MIDDLEWARE = 'FETCH_AUTH_MIDDLEWARE';


export const authRequested = () => {
    return {
        type: FETCH_AUTH_REQUESTED
    }
};

export const authSuccess = (data) => {
    return {
        type: FETCH_AUTH_SUCCESS,
        payload: data
    }
};

export const authError = (error) => {
    return {
        type: FETCH_AUTH_ERROR,
        payload: error
    }
};

export const logIn = (data) => {
    return {
        type: FETCH_AUTH_MIDDLEWARE,
        payload: data
    }
};

export const logOut = () => {
    return {
        type: FETCH_AUTH_SUCCESS,
        payload: {}
    }
};
