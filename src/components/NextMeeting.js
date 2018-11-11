import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../redux/actions';
import { getLongDate } from '../utilities/dates';

export const NextMeeting = ({ nextMeeting, setModalClose }) => (
    <section id="nextMeeting" className="nextMeeting">
        <p className="nextMeeting__title">{nextMeeting.event}</p>
        <p className="nextMeeting__date">
            {nextMeeting.date && getLongDate(nextMeeting.date)}
        </p>
        <p onClick={setModalClose} className="specialEvent__banner">
            Buy Tickets
        </p>
    </section>
);

const mapStateToProps = state => ({
    nextMeeting: (state.calendar.events.length > 0 &&
        state.calendar.events.filter(
            item => parseInt(item.date) > Date.now() / 1000
        )[0]) || { event: '2019 Events Coming Soon!' }
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModal(2));
        }
    }
});

NextMeeting.propTypes = {
    nextMeeting: PropTypes.object.isRequired,
    setModalClose: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextMeeting);
