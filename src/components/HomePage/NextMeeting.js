import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLongDate } from '../../utilities/dates';
import { getNextMeeting } from '../../redux/common/selectors';

export const NextMeeting = ({ nextMeeting }) => (
    <section id="nextMeeting" className="nextMeeting">
        <p className="nextMeeting__title">{nextMeeting.title}</p>
        <p className="nextMeeting__date">
            {nextMeeting.date && getLongDate(nextMeeting.date)}
        </p>
    </section>
);

const mapStateToProps = state => ({
    nextMeeting: getNextMeeting(state.common.events)
});

NextMeeting.propTypes = {
    nextMeeting: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(NextMeeting);
