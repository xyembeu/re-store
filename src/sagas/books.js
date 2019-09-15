import {call, put, takeLatest} from 'redux-saga/effects';

import BookstoreService from "../services/bookstore-service";
import {booksError, booksLoaded, booksRequested} from "../actions/books";

const bookstoreService = new BookstoreService();

function* fetchBooks() {
    try {
        yield put(booksRequested());
        const data = yield call(bookstoreService.getBooks);
        yield put(booksLoaded(data));
    } catch (error) {
        yield put(booksError(error));
    }
}

export function* watchBooks() {
    yield takeLatest('FETCH_BOOKS', fetchBooks);
}
