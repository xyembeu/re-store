import {call, put, takeLatest} from 'redux-saga/effects';
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

export function* watchBooks() {
    yield takeLatest('FETCH_BOOKS_REQUESTED', fetchBooks);
}
