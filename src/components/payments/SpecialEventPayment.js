import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModal } from '../../redux/actions';
import {
    getSpecialEventTotal,
    getSpecialEventPaypal
} from '../../redux/selectors';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import PayPalForm from './PayPalForm';
import DonationOption from './SpecialEventDonation';
import SpecialEventTickets from './SpecialEventTickets';

export const SpecialEventPayment = ({
    setModalFlyer,
    banner,
    total,
    getSpecialEventPaypal
}) => (
    <div className="specialEvent">
        <div onClick={setModalFlyer}>
            <ResponsiveImage image={banner} />
            <div className="specialEvent__banner--modal">
                <p className="specialEvent__banner">View Flyer</p>
            </div>
        </div>
        <SpecialEventTickets />
        <DonationOption />
        <div className="specialEvent__total">{total()}</div>
        <p className="specialEvent__ticket--header">
            Part proceeds to emergency relief.
        </p>
        <PayPalForm tickets={getSpecialEventPaypal()} />
    </div>
);

SpecialEventPayment.propTypes = {
    banner: PropTypes.object.isRequired,
    total: PropTypes.func.isRequired,
    getSpecialEventPaypal: PropTypes.func.isRequired,
    setModalFlyer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    banner: state.specialEvent.banner,
    getSpecialEventPaypal: () =>
        getSpecialEventPaypal(state.payment.tickets, state.payment.donation),
    total: () =>
        getSpecialEventTotal(state.payment.tickets, state.payment.donation)
});

const mapDispatchToProps = dispatch => ({
    setModalFlyer: () => dispatch(setModal(3))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialEventPayment);
