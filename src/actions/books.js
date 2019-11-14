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

export const booksLoaded = () => {
    return {
        type: FETCH_BOOKS_LOADED, payload: [
                {id: 1, title: 'Book 1', author: 'Susan J.', price: 1000},
                {id: 2, title: 'Book 2', author: 'Michael K.', price: 2000}
            ]}

};

export const booksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
};


