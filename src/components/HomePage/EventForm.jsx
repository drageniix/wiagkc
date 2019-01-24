//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { addEvent, updateEvent, deleteEvent } from '../../redux/actions/events';
import { getErrors } from '../../redux/selectors/common';
import TextareaAutosize from 'react-autosize-textarea/lib';

export class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:
                (this.props.event && this.props.event.date * 1000) ||
                new Date().setHours(19, 0, 0, 0),
            title: (this.props.event && this.props.event.title) || '',
            details: (this.props.event && this.props.event.details) || ''
        };
    }

    onSumbit = type => e => {
        e.preventDefault();

        const parsedDate = {
            date: this.state.date / 1000,
            title: this.state.title,
            details: this.state.details
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
        const { date, title, details } = this.state;
        const { errors, event } = this.props;
        return (
            <div className="event-form">
                <div className="event-form__date">
                    <Flatpickr
                        data-enable-time
                        value={date}
                        options={{
                            altInput: true,
                            altFormat: 'M J, h:iK'
                        }}
                        onChange={date =>
                            this.setState({ date: date[0].getTime() })
                        }
                    />
                </div>
                <div className="event-form__title">
                    <input
                        className="event-form__title--input"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="Event Title"
                        name="title"
                    />
                    {errors && errors.title && (
                        <p className="event-form__invalid">{errors.title}</p>
                    )}
                </div>
                <TextareaAutosize
                    rows={4}
                    className="event-form__details"
                    onChange={e => this.setState({ details: e.target.value })}
                    type="text"
                    placeholder="Description"
                    name="details"
                    value={details}
                />
                {errors && errors.details && (
                    <p className="event-form__invalid">{errors.details}</p>
                )}

                {(event && (
                    <div className="buttons">
                        <button
                            className="btn btn--update"
                            onClick={this.onSumbit(1)}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn--delete"
                            onClick={this.onSumbit(2)}
                        >
                            Delete
                        </button>
                    </div>
                )) || (
                    <div className="buttons">
                        <button
                            className="btn btn--add"
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
