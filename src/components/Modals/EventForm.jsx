//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';

import 'flatpickr/dist/themes/material_green.css';
import { addEvent, updateEvent, deleteEvent } from '../../redux/actions/events';
import { getErrors } from '../../redux/selectors/common';

export class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:
                (this.props.event && this.props.event.date * 1000) ||
                Date.now(),
            title: (this.props.event && this.props.event.title) || '',
            details: (this.props.event && this.props.event.details) || '',
            emphasis: (this.props.event && this.props.event.emphasis) || false
        };
    }

    onSumbit = type => e => {
        e.preventDefault();

        const parsedDate = {
            date: this.state.date / 1000,
            title: this.state.title,
            details: this.state.details,
            emphasis: this.state.emphasis
        };

        switch (type) {
            case 0:
                this.props.addEvent(parsedDate);
                break;
            case 1:
                this.props.updateEvent(parsedDate);
                break;
            case 2:
                this.props.deleteEvent();
                break;
        }
    };

    render() {
        return (
            <div className="event">
                <label className="event__major">
                    <strong>Major Event</strong>
                    <input
                        type="checkbox"
                        className="event__major--input"
                        checked={this.state.emphasis}
                        onChange={e =>
                            this.setState({
                                emphasis: e.target.checked
                            })
                        }
                        name="emphasis"
                    />
                </label>
                <div className="event__date">
                    <Flatpickr
                        data-enable-time
                        value={this.state.date}
                        options={{
                            altInput: true,
                            altFormat: 'M J, h:iK'
                        }}
                        onChange={date =>
                            this.setState({ date: date[0].getTime() })
                        }
                    />
                </div>
                <div className="event__title">
                    <input
                        className="event__title--input"
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="Event Title"
                        name="title"
                    />
                </div>
                <textarea
                    className="event__details"
                    onChange={e => this.setState({ details: e.target.value })}
                    type="text"
                    placeholder="Description"
                    name="details"
                    value={this.state.details}
                />
                {(this.props.event && (
                    <div className="event__buttons">
                        <button
                            className="event__submit event__submit--update"
                            onClick={this.onSumbit(1)}
                        >
                            Update Event
                        </button>
                        <button
                            className="event__submit event__submit--delete"
                            onClick={this.onSumbit(2)}
                        >
                            Delete Event
                        </button>
                    </div>
                )) || (
                    <div className="event__buttons">
                        <button
                            className="event__submit event__submit--add"
                            onClick={this.onSumbit(0)}
                        >
                            Add Event
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: getErrors(state.common.errors), //TODO: add validation
    event: state.events.event
});

const mapDispatchToProps = {
    addEvent: data => addEvent(data),
    updateEvent: data => updateEvent(data),
    deleteEvent
};

AddEvent.propTypes = {
    event: PropTypes.object,
    addEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEvent);
