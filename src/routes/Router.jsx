import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import adminRoutes from './AdminRoutes';
import authRoutes from './AuthRoutes';
import standardRoutes from './StandardRoutes';

import Navigation from '../components/Navigation';
import Modal from '../components/containers/Modal';
import Footer from '../components/Footer';

import { BrowserRouter } from 'react-router-dom';
import { closeModal } from '../redux/actions/modals';

class Router extends Component {
    static propTypes = {
        isAuth: PropTypes.bool,
        isAdmin: PropTypes.bool,
        modal: PropTypes.number,
        closeModal: PropTypes.func
    };

    componentDidMount = () => {
        window.addEventListener(
            'keydown',
            e =>
                this.props.modal &&
                e.key === 'Escape' &&
                this.props.closeModal()
        );
    };

    componentWillMount() {
        window.removeEventListener('keydown');
    }

    render() {
        const { isAuth, isAdmin } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Modal />
                    <Navigation />
                    <div className="main-layout">
                        <main className="main-layout__body">
                            {(isAdmin && adminRoutes) ||
                                (isAuth && authRoutes) ||
                                standardRoutes}
                        </main>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: !!state.user.user,
    isAdmin: !!state.user.user && state.user.user.privilege >= 3,
    modal: state.common.modal
});

const mapDispatchToProps = {
    closeModal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);
