import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducerCreator from './reducers/common';
import homeReducerCreator from './reducers/home';
import eventsReducerCreator from './reducers/events';
import userReducerCreator from './reducers/user';
import feedReducerCreator from './reducers/feed';
import subscribe from './subscribe';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async isServer => {
    const commonReducer = await commonReducerCreator();
    const homeReducer = await homeReducerCreator();
    const userReducer = await userReducerCreator();
    const eventsReducer = await eventsReducerCreator();
    const feedReducer = await feedReducerCreator();

    const reducer = combineReducers({
        common: commonReducer,
        user: userReducer,
        events: eventsReducer,
        home: homeReducer,
        feed: feedReducer
    });

    let store;
    if (isServer && typeof window === 'undefined') {
        store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    } else {
        store = window.storen
            ? window.store
            : (window.store = createStore(
                  reducer,
                  composeEnhancers(applyMiddleware(thunk))
              ));
    }

    subscribe(store);
    return store;
};
