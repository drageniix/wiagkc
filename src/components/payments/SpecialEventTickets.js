import React from 'react';
import PropTypes from 'prop-types';
import { setQuantity } from '../../redux/actions';
import { connect } from 'react-redux';

export const SpecialEventTickets = ({ tickets, onQuantityChange }) => (
    <div>
        {tickets.map((ticket, index) => (
            <div key={index} className="specialEvent__ticket">
                <div className="specialEvent__ticket--title">
                    {ticket.title.split('-').map((part, index) => (
                        <p key={index}>{part.trim()}</p>
                    ))}
                </div>
                <span className="specialEvent__ticket--price">
                    ${ticket.price}.00
                </span>
                <select
                    className="specialEvent__ticket--select"
                    onChange={event => onQuantityChange(index, event)}
                    value={ticket.quantity}
                >
                    <option value={0}>None</option>
                    {[...Array(6).keys()].map(index => (
                        <option value={index + 1} key={index}>
                            {index + 1} Ticket{index === 0 ? '' : 's'}
                        </option>
                    ))}
                </select>
            </div>
        ))}
    </div>
);

SpecialEventTickets.propTypes = {
    tickets: PropTypes.array.isRequired,
    onQuantityChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    tickets: state.payment.tickets
});

const mapDispatchToProps = dispatch => ({
    onQuantityChange: (index, event) => {
        if (event.target === event.currentTarget) {
            const quantity = event.target.value;
            dispatch(setQuantity(quantity, index));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialEventTickets);
