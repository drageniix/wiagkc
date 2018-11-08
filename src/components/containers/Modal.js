import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WestIndies from '../WestIndies';
import SpecialEvent from '../SpecialEvent';

const Modal = ({ modal }) => {
    switch (modal) {
        case 1:
            return <WestIndies />;
        case 2:
            return <SpecialEvent />;
        default:
            return null;
    }
};

Modal.propTypes = {
    modal: PropTypes.number
};

const mapStateToProps = state => ({
    modal: state.modal
});

export default connect(mapStateToProps)(Modal);
