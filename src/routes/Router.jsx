import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/containers/Loading';

import Navigation from '../components/Navigation';
import Modal from '../components/containers/Modal';
import Footer from '../components/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HomePage = Loadable({
    loader: () => import('../pages/HomePage'),
    loading: Loading
});

const Router = () => (
    <BrowserRouter>
        <div>
            <Modal />
            <Navigation />
            <div className="main-layout">
                <main className="main-layout__body">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

export default Router;
