import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/containers/Loading';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import Modal from '../components/containers/Modal';
import Footer from '../components/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HomePage = Loadable({
    loader: () => import('../pages/HomePage'),
    loading: Loading
});

const AccountPage = Loadable({
    loader: () => import('../pages/AccountPage'),
    loading: Loading
});

const FeedPage = Loadable({
    loader: () => import('../pages/FeedPage'),
    loading: Loading
});

const authRoutes = (
    <Switch>
        <Route path="/feed" component={FeedPage} />
        <Route path="/account" component={AccountPage} />
        <Route component={HomePage} />
    </Switch>
);

const standardRoutes = (
    <Switch>
        <Route path="/feed" component={FeedPage} />
        <Route component={HomePage} />
    </Switch>
);

const Router = ({ isAuth }) => (
    <BrowserRouter>
        <div>
            <Modal />
            <Navigation />
            <div className="main-layout">
                <main className="main-layout__body">
                    {(isAuth && authRoutes) || standardRoutes}
                </main>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

const mapStateToProps = state => ({
    isAuth: !!state.user.user
});

Router.propTypes = {
    isAuth: PropTypes.bool
};

export default connect(mapStateToProps)(Router);
