import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PayPalForm from './PayPalForm';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { setModal } from '../redux/actions';

const TicketOption = ({ ticket, index, onQuantityChange }) => (
    <div className="specialEvent__ticket">
        <div className="specialEvent__ticket--title">
            {ticket.title.split('-').map((part, index) => (
                <p key={index}>{part.trim()}</p>
            ))}
        </div>
        <span className="specialEvent__ticket--price">${ticket.price}.00</span>
        <select
            className="specialEvent__ticket--select"
            key={index}
            onChange={onQuantityChange}
        >
            <option value="0" defaultValue>
                None
            </option>
            {[...Array(6).keys()].map(index => (
                <option value={index + 1} key={index}>
                    {index + 1} Ticket{index === 0 ? '' : 's'}
                </option>
            ))}
        </select>
    </div>
);

TicketOption.propTypes = {
    ticket: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func.isRequired
};

class SpecialEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: props.data.tickets.map((ticket, index) => ({
                ...ticket,
                quantity: 0,
                index: index + 1
            }))
        };
    }

    onQuantityChange(index, event) {
        const value = event.target.value;
        this.setState(prevState => {
            prevState.tickets[index].quantity = value;
            return { tickets: prevState.tickets };
        });
    }

    render() {
        return (
            <div className="modal" onClick={this.props.setModal}>
                <div className="specialEvent">
                    <ResponsiveImage
                        image={this.props.data.banner}
                        className="specialEvent__header"
                    />
                    <p className="specialEvent__date">
                        {this.props.data.date} {this.props.data.time}
                    </p>
                    <iframe
                        src={this.props.data.venue.gmaps}
                        className="specialEvent__venue"
                        frameBorder="0"
                        allowFullScreen
                    />
                    <p className="specialEvent__ticket--header">
                        Part proceeds to emergency relief.
                    </p>
                    {this.state.tickets.map((ticket, index) => (
                        <TicketOption
                            onQuantityChange={this.onQuantityChange.bind(
                                this,
                                index
                            )}
                            ticket={ticket}
                            index={index}
                            key={index}
                        />
                    ))}
                    <PayPalForm
                        tickets={this.state.tickets.filter(
                            ticket => ticket.quantity > 0
                        )}
                    />
                </div>
            </div>
        );
    }
}

SpecialEvent.propTypes = {
    data: PropTypes.object,
    setModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.specialEvent
});

const mapDispatchToProps = dispatch => ({
    setModal: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModal(0));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialEvent);
