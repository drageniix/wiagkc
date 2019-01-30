import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents, setEvent } from '../../redux/actions/events';
import { isAuth } from '../../redux/selectors/users';
import LoadingIcon from '../LoadingIcon';
import Event from './Event';
import { openEventFormModal } from '../../redux/actions/modals';

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
            loading
        } = this.props;

        return (
            <section id="calendar" className="section calendar">
                <section className="calendar__container">
                    <h2 className="section__title">
                        {title}
                        {isAuth && (
                            <svg
                                className="icon icon--add pointer"
                                onClick={() => addEvent()}
                                viewBox="0 0 448 512"
                            >
                                <title>Add Event</title>
                                <path d="M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
                            </svg>
                        )}
                    </h2>
                    <div className="calendar__events">
                        {(loading && <LoadingIcon />) ||
                            (events.length === 0 && 'No events found.') ||
                            (events.length > 0 &&
                                events.map((event, index) => (
                                    <Event key={index} event={event} />
                                )))}
                    </div>
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: isAuth(state.user, 2),
    data: state.home.calendar,
    loading: state.common.loading,
    events: state.events.events
});

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(getEvents()),
    addEvent: () => {
        dispatch(openEventFormModal());
        dispatch(setEvent(null));
    }
});

Calendar.propTypes = {
    isAuth: PropTypes.bool,
    data: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    addEvent: PropTypes.func.isRequired,
    getEvents: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
