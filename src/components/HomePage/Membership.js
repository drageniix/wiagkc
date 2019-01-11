import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Membership = ({ data }) => (
    <section id="membership" className="section membership">
        <div className="membership__container">
            <div className="membership__frequency">
                <h2 className="section__title">
                    {data.meetingFrequency.prefix}
                </h2>
                <p className="membership__frequency--main">
                    <strong> 🏝️ {data.meetingFrequency.normal} </strong>
                </p>
                <p className="membership__frequency--exception">
                    {data.meetingFrequency.exceptions}
                </p>
            </div>

            <p className="membership__detail">{data.abstract}</p>
            <p className="membership__detail">{data.details}</p>
        </div>
    </section>
);

const mapStateToProps = state => ({
    data: state.home.membership
});

Membership.propTypes = {
    data: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Membership);
