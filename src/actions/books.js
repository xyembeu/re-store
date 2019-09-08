import {customHistory} from '../history';
import queryString from 'query-string';
import pickBy from 'lodash.pickby';
import identity from 'lodash.identity';

export const FETCH_BOOKS_LOADED = 'FETCH_BOOKS_LOADED';
export const FETCH_BOOKS_REQUESTED = 'FETCH_BOOKS_REQUESTED';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';


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

export const booksFilter = (filter) => {
    return () => {

        if (!Object.keys(filter).length) {
            customHistory.push(`/orders`);
            return;
        }
        const cleanedFilters = pickBy(filter, identity);
        const queryParams = queryString.stringify(cleanedFilters);

        customHistory.push(`/orders?${queryParams}`);
    };
};



