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
            })),
            total: '$0.00'
        };
    }

    setFlyer = event => {
        event.preventDefault();
        this.setState({ flyer: !this.state.flyer });
    };

    onQuantityChange = (index, event) => {
        const value = event.target.value;
        this.setState(prevState => {
            prevState.tickets[index].quantity = value;
            return {
                tickets: prevState.tickets,
                total: `$${prevState.tickets.reduce(
                    (prev, current) => prev + current.quantity * current.price,
                    0
                )}.00`
            };
        });
    };

    render() {
        return (
            <div className="modal" onClick={this.props.setModal}>
                <div className="specialEvent">
                    {this.state.flyer ? (
                        <div onClick={this.setFlyer}>
                            <ResponsiveImage
                                className="specialEvent__details"
                                image={this.props.data.flyer}
                            />
                        </div>
                    ) : (
                        <div>
                            <div onClick={this.setFlyer}>
                                <ResponsiveImage
                                    onClick={this.setFlyer}
                                    className="specialEvent__details"
                                    image={this.props.data.banner}
                                />
                                <div className="specialEvent__banner--modal">
                                    <p
                                        onClick={setModal}
                                        className="specialEvent__banner"
                                    >
                                        View Flyer
                                    </p>
                                </div>
                            </div>
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
                            <div className="specialEvent__total">
                                {this.state.total}
                            </div>
                            <p className="specialEvent__ticket--header">
                                Part proceeds to emergency relief.
                            </p>
                            <PayPalForm
                                tickets={this.state.tickets.filter(
                                    ticket => ticket.quantity > 0
                                )}
                            />
                        </div>
                    )}
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
