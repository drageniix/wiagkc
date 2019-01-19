import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Router from './routes/Router';

configureStore().then(store => {
    const App = () => (
        <Provider store={store}>
            <Router />
        </Provider>
    );

    ReactDOM.render(<App />, document.getElementById('content'));
});
