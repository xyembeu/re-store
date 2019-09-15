import BookstoreService from "../services/bookstore-service";
import {call, put, takeLatest} from 'redux-saga/effects';
import {authError, authRequested, authSuccess} from "../actions/auth";


function* fetchAuth({payload}) {
    try {
        yield put(authRequested());
        const bookstoreService = new BookstoreService();
        yield call(bookstoreService.auth, payload);
        yield put(authSuccess(payload));
    } catch (error) {
        yield put(authError(error.message));
    }
}

export function* watchAuth() {
    yield takeLatest('FETCH_AUTH_MIDDLEWARE', fetchAuth);
}




