import BookstoreService from "../services/bookstore-service";
import {call, put, takeLatest} from 'redux-saga/effects';

export const FETCH_BOOK_LOADED = 'FETCH_BOOK_LOADED';
export const FETCH_BOOK_REQUESTED = 'FETCH_BOOK_REQUESTED';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
export const FETCH_BOOK_GET_BY_ID = 'FETCH_BOOK_GET_BY_ID';


export const bookRequested = () => {
    return {
        type: FETCH_BOOK_REQUESTED
    }
};

export const bookLoaded = (data) => {
    return {
        type: FETCH_BOOK_LOADED,
        payload: data
    }
};

export const bookError = (error) => {
    return {
        type: FETCH_BOOK_ERROR,
        payload: error
    }
};

export const bookGetById = (id) => {
    return {
        type: FETCH_BOOK_GET_BY_ID,
        payload: id
    }
};


function* fetchBook({payload}) {
    try {
        yield put(bookRequested());
        const bookstoreService = new BookstoreService();
        const data = yield call(bookstoreService.getBookDetail, payload);
        yield put(bookLoaded(data));
    } catch (error) {
        yield put(bookError(error));
    }
}

export function* watchBook() {
    yield takeLatest(FETCH_BOOK_GET_BY_ID, fetchBook);
}




