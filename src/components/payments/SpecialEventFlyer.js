import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { setModal } from '../../redux/actions';

export const SpecialEventFlyer = ({ flyer, setModalTicket }) => (
    <div className="specialEvent">
        <div onClick={setModalTicket}>
            <ResponsiveImage className="specialEvent__details" image={flyer} />
            <div className="specialEvent__banner--modal">
                <p className="specialEvent__banner">Buy Tickets</p>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    flyer: state.specialEvent.flyer
});

const mapDispatchToProps = dispatch => ({
    setModalTicket: () => dispatch(setModal(2))
});

SpecialEventFlyer.propTypes = {
    flyer: PropTypes.object,
    setModalTicket: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialEventFlyer);
