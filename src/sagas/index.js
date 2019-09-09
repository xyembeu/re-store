import {all} from 'redux-saga/effects';
import {watchBooks} from "./books";
import {watchBook} from "./book-detail";
import {watchAuth} from "./auth";
import {watchConstructor} from "./constructor";

export default function* rootSaga() {
    yield all([
        watchBooks(),
        watchBook(),
        watchAuth(),
        watchConstructor()
    ])
}
