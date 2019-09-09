import {call, put, takeLatest} from 'redux-saga/effects';
import {customHistory} from '../history';
import queryString from 'query-string';
import pickBy from 'lodash.pickby';
import identity from 'lodash.identity';
import BookstoreService from "../services/bookstore-service";
import {booksError, booksLoaded} from "../actions/books";

const bookstoreService = new BookstoreService();

function* fetchBooks() {
    try {
        const data = yield call(bookstoreService.getBooks);
        yield put(booksLoaded(data));
    } catch (error) {
        yield put(booksError(error));
    }
}

function* filterBooks({payload}) {
    if (!Object.keys(payload).length) {
        customHistory.push(`/orders`);
        return;
    }
    const cleanedFilters = pickBy(payload, identity);
    const queryParams = queryString.stringify(cleanedFilters);

    yield call(customHistory.push, '/orders?' + queryParams);
}

export function* watchBooks() {
    yield takeLatest('FETCH_BOOKS', fetchBooks);
    yield takeLatest('FETCH_BOOKS_FILTER', filterBooks);
}
