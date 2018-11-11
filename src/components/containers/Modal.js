import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WestIndies from '../WestIndies';
import SpecialEventPayment from '../payments/SpecialEventPayment';
import SpecialEventFlyer from '../payments/SpecialEventFlyer';
import { setModal } from '../../redux/actions';

const Modal = ({ modal, setModalClose }) => {
    let mode;
    switch (modal) {
        case 1:
            mode = <WestIndies />;
            break;
        case 2:
            mode = <SpecialEventPayment />;
            break;
        case 3:
            mode = <SpecialEventFlyer />;
            break;
        default:
            mode = null;
    }

    return mode ? (
        <div className="modal" onClick={setModalClose}>
            {mode}
        </div>
    ) : null;
};

Modal.propTypes = {
    modal: PropTypes.number,
    setModalClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    modal: state.modal
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
