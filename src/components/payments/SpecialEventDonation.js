import React from 'react';
import PropTypes from 'prop-types';
import { setDonation } from '../../redux/actions';
import { connect } from 'react-redux';

export const DonationOption = ({ donation, onDonationChange }) => (
    <div className="specialEvent__ticket">
        <div className="specialEvent__ticket--title">
            {'Donation - 2018'.split('-').map((part, index) => (
                <p key={index}>{part.trim()}</p>
            ))}
        </div>
        <div />
        <select
            className="specialEvent__ticket--select"
            onChange={onDonationChange}
            value={donation}
        >
            <option value={0}>None</option>
            <option value={1}>$1.00</option>
            <option value={5}>$5.00</option>
            <option value={10}>$10.00</option>
            <option value={25}>$25.00</option>
            <option value={50}>$50.00</option>
            <option value={100}>$100.00</option>
        </select>
    </div>
);

DonationOption.propTypes = {
    donation: PropTypes.number.isRequired,
    onDonationChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    donation: state.payment.donation
});

const mapDispatchToProps = dispatch => ({
    onDonationChange: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            const donation = event.target.value;
            dispatch(setDonation(donation));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DonationOption);
