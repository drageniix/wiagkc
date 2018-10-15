import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducerCreator from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (isServer) => reducerCreator().then(reducer => {
    let store
    if (isServer && typeof window === "undefined") {
        store = createStore(
            reducer,
            composeEnhancers(applyMiddleware(thunk)))
    } else {
        store = window.store ?
            window.store : window.store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    }

    return store
})
