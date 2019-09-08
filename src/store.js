import {createStore, applyMiddleware} from "redux";
import combineReducers from './reducers';
import {saveState, loadState} from './localstorage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState("state");

const store = createStore(combineReducers, initialState, applyMiddleware(sagaMiddleware));

store.subscribe((initialState) => {
    saveState({
        cart: {
            cartItems: store.getState()['cart']['cartItems']
        },
        auth:{
            user: store.getState()['auth']['user']
        }
    });
});

sagaMiddleware.run(rootSaga);

export default store;

