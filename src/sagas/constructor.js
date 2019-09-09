import BookstoreService from "../services/bookstore-service";
import {call, put, takeLatest} from 'redux-saga/effects';
import {constructorError, constructorRequested, constructorSuccess} from "../actions/constructor";

const bookstoreService = new BookstoreService();

function* fetchConstructorGet() {
    try {
        yield put(constructorRequested());
        const data = yield call(bookstoreService.getConstructor);
        yield put(constructorSuccess(data));
    } catch (error) {
        yield put(constructorError(error.message));
    }
}

function* fetchConstructorSet({payload}) {
    try {
        yield put(constructorRequested());
        const data = yield call(bookstoreService.setConstructor, payload);
        yield put(constructorSuccess(data));
    } catch (error) {
        yield put(constructorError(error.message));
    }
}

export function* watchConstructor() {
    yield takeLatest('FETCH_CONSTRUCTOR_GET', fetchConstructorGet);
    yield takeLatest('FETCH_CONSTRUCTOR_SET', fetchConstructorSet);
}




