import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../../redux/actions/common';
import Loadable from 'react-loadable';
import Loading from './Loading';

const WestIndies = Loadable({
    loader: () => import('../Modals/WestIndies'),
    loading: Loading
});

const EventForm = Loadable({
    loader: () => import('../Modals/EventForm'),
    loading: Loading
});

const Account = Loadable({
    loader: () => import('../Modals/Account'),
    loading: Loading
});

const Signup = Loadable({
    loader: () => import('../UserPage/Signup'),
    loading: Loading
});

const Login = Loadable({
    loader: () => import('../UserPage/Login'),
    loading: Loading
});

const Modal = ({ modal, setModalClose }) => {
    let mode;
    switch (modal) {
        case 1:
            mode = <WestIndies />;
            break;
        case 2:
            mode = <EventForm />;
            break;
        case 3:
            mode = <Login />;
            break;
        case 4:
            mode = <Signup />;
            break;
        case 5:
            mode = <Account />;
            break;
        default:
            mode = null;
    }

    return mode ? (
        <div className="modal" onClick={setModalClose}>
            <div className="modal__content">{mode}</div>
        </div>
    ) : null;
};

Modal.propTypes = {
    modal: PropTypes.number,
    setModalClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    modal: state.common.modal
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModal(0));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
