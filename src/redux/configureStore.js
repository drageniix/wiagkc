import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducerCreator from './common/reducer';
import homeReducerCreator from './home/reducer';
import userReducerCreator from './user/reducer';
import subscribe from './subscribe';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async isServer => {
    const commonReducer = await commonReducerCreator();
    const userReducer = await userReducerCreator();
    const homeReducer = await homeReducerCreator();

    const reducer = combineReducers({
        common: commonReducer,
        user: userReducer,
        home: homeReducer
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
