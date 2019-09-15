import {createStore, applyMiddleware, compose} from "redux";
import combineReducers from './reducers';
import {saveState, loadState} from './localstorage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState("state");


const createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(combineReducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
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

