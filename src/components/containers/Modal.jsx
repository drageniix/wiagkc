import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Loading from './Loading';
import { setModalClose } from '../../redux/actions/modals';

const WestIndies = Loadable({
    loader: () => import('../Modals/WestIndies'),
    loading: Loading
});

const EventForm = Loadable({
    loader: () => import('../HomePage/EventForm'),
    loading: Loading
});

const Signup = Loadable({
    loader: () => import('../Modals/Signup'),
    loading: Loading
});

const Login = Loadable({
    loader: () => import('../Modals/Login'),
    loading: Loading
});

const UpdateUser = Loadable({
    loader: () => import('../Modals/UpdateUser'),
    loading: Loading
});

class Modal extends Component {
    static propTypes = {
        modal: PropTypes.number,
        setModalClose: PropTypes.func.isRequired
    };

    keyDown = e => {
        this.props.modal && e.key === 'Escape' && this.props.setModalClose();
    };

    componentDidMount = () => {
        window.addEventListener('keydown', this.keyDown);
    };

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.keyDown);
    };

    render() {
        const { modal, setModalClose } = this.props;
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
                mode = <UpdateUser />;
                break;
            default:
                mode = null;
        }

        return mode ? (
            <div className="modal" onClick={setModalClose}>
                <div className="modal__content">{mode}</div>
            </div>
        ) : null;
    }
}

const mapStateToProps = state => ({
    modal: state.common.modal
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModalClose());
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
