import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShortDate } from '../../utilities/dates';
import { setModal } from '../../redux/actions/common';
import { getEvents, setEvent } from '../../redux/actions/events';
import { isAuth } from '../../redux/selectors/users';
import LoadingIcon from '../LoadingIcon';

export class Calendar extends React.Component {
    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const {
            data: { title },
            events,
            isAuth,
            addEvent,
            updateEvent
        } = this.props;

        return (
            <section id="calendar" className="section calendar">
                <section className="calendar__container">
                    <h2 className="section__title">
                        {title}
                        {isAuth && (
                            <svg
                                className="icon icon--s pointer"
                                onClick={() => addEvent()}
                                viewBox="0 0 448 512"
                            >
                                <title>Add Event</title>
                                <path d="M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
                            </svg>
                        )}
                    </h2>
                    <div className="calendar__events">
                        {(events.length > 0 &&
                            events.map((event, index) => (
                                <div key={index} className="calendar__event">
                                    <div className="calendar__event--date">
                                        {isAuth && (
                                            <svg
                                                className="icon icon--xs pointer"
                                                onClick={() =>
                                                    updateEvent(event)
                                                }
                                                viewBox="0 0 32 32"
                                            >
                                                <title>Edit Event</title>
                                                <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z" />
                                            </svg>
                                        )}
                                        {getShortDate(event.date)}
                                    </div>
                                    <div className="calendar__event--details">
                                        <p>
                                            {event.emphasis ? (
                                                <strong>{event.title}</strong>
                                            ) : (
                                                event.title
                                            )}
                                        </p>
                                        <p>{event.details}</p>
                                    </div>
                                </div>
                            ))) || <LoadingIcon />}
                    </div>
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: isAuth(state.user, 2),
    data: state.home.calendar,
    events: state.events.events
});

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(getEvents()),
    addEvent: () => {
        dispatch(setModal(2));
        dispatch(setEvent(null));
    },
    updateEvent: event => {
        dispatch(setModal(2));
        dispatch(setEvent(event));
    }
});

Calendar.propTypes = {
    isAuth: PropTypes.bool,
    data: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    addEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    getEvents: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
