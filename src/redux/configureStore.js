import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer';
import { setCalendar } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (isServer) => {
    let store
    if (isServer && typeof window === 'undefined') {
        store = createStore(
            reducer, 
            composeEnhancers(applyMiddleware(thunk)))
    } else {
        store = window.store ? 
            window.store : window.store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    }

    store.dispatch(setCalendar())
    return store
}