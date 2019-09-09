export const FETCH_CONSTRUCTOR_SUCCESS = 'FETCH_CONSTRUCTOR_SUCCESS';
export const FETCH_CONSTRUCTOR_REQUESTED = 'FETCH_CONSTRUCTOR_REQUESTED';
export const FETCH_CONSTRUCTOR_ERROR = 'FETCH_CONSTRUCTOR_ERROR';
export const FETCH_CONSTRUCTOR_GET = 'FETCH_CONSTRUCTOR_GET';
export const FETCH_CONSTRUCTOR_SET = 'FETCH_CONSTRUCTOR_SET';


export const constructorRequested = () => {
    return {
        type: FETCH_CONSTRUCTOR_REQUESTED
    }
};

export const constructorSuccess = (data) => {
    return {
        type: FETCH_CONSTRUCTOR_SUCCESS,
        payload: data
    }
};

export const constructorError = (error) => {
    return {
        type: FETCH_CONSTRUCTOR_ERROR,
        payload: error
    }
};

export const constructorFetchGet = () => {
    return {
        type: FETCH_CONSTRUCTOR_GET
    }
};

export const constructorFetchSet = (id) => {
    return {
        type: FETCH_CONSTRUCTOR_SET,
        payload: id
    }
};
