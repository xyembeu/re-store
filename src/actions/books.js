export const FETCH_BOOKS_LOADED = 'FETCH_BOOKS_LOADED';
export const FETCH_BOOKS_REQUESTED = 'FETCH_BOOKS_REQUESTED';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const FETCH_BOOKS_FILTER = 'FETCH_BOOKS_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';


export const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUESTED
    }
};

export const booksLoaded = (data) => {
    return {
        type: FETCH_BOOKS_LOADED,
        payload: data
    }
};

export const booksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
};

export const booksFetch = () => {
    return {
        type: FETCH_BOOKS
    }
};

export const booksFilter = (filter) => {
    return {
        type: FETCH_BOOKS_FILTER,
        payload: filter
    }
};

