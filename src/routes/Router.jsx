import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authRoutes from './AuthRoutes';
import standardRoutes from './StandardRoutes';

import Navigation from '../components/Navigation';
import Modal from '../components/containers/Modal';
import Footer from '../components/Footer';

import { BrowserRouter } from 'react-router-dom';

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
