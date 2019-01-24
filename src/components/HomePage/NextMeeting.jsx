import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLongDate } from '../../utilities/dates';
import { getNextMeeting } from '../../redux/selectors/events';
import ReactMarkdown from 'react-markdown';

export const NextMeeting = ({ nextMeeting }) => (
    <section id="nextMeeting" className="nextMeeting">
        <ReactMarkdown className="nextMeeting__title">
            {nextMeeting.title}
        </ReactMarkdown>
        <p className="nextMeeting__date">
            {nextMeeting.date && getLongDate(nextMeeting.date)}
        </p>
    </section>
);

const mapStateToProps = state => ({
    nextMeeting: getNextMeeting(state.events.events)
});

NextMeeting.propTypes = {
    nextMeeting: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(NextMeeting);
