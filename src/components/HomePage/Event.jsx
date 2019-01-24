import React from 'react';
import ReactMarkdown from 'react-markdown';
import { isAuth } from '../../redux/selectors/users';
import { getShortDate } from '../../utilities/dates';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModal } from '../../redux/actions/common';
import { setEvent } from '../../redux/actions/events';

const Event = ({ isAuth, event, updateEvent }) => {
    return (
        <div className="calendar__event">
            <div className="calendar__event--date">
                {isAuth && (
                    <svg
                        className="icon icon--edit pointer"
                        onClick={() => updateEvent(event)}
                        viewBox="0 0 32 32"
                    >
                        <title>Edit Event</title>
                        <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z" />
                    </svg>
                )}
                {getShortDate(event.date)}
            </div>
            <div className="calendar__event--details">
                <ReactMarkdown>{event.title}</ReactMarkdown>
                <ReactMarkdown>{event.details}</ReactMarkdown>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: isAuth(state.user, 2)
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => {
        dispatch(setModal(2));
        dispatch(setEvent(event));
    }
});

Event.propTypes = {
    isAuth: PropTypes.bool,
    event: PropTypes.object.isRequired,
    updateEvent: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);
