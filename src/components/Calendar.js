import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShortDate } from '../redux/selectors';

export const Calendar = ({ data: { title, events } }) => (
    <section id="calendar" className="calendar">
        <section className="calendar__container">
            <h2 className="section__title">{title}</h2>
            <div className="calendar__events">
                {events.map((item, index) => (
                    <div key={index} className="calendar__event">
                        <div className="calendar__event--date">
                            {getShortDate(item.date)}
                        </div>
                        <div className="calendar__event--details">
                            {item.bold ? (
                                <strong>
                                    <p
                                        className={item.class}
                                        dangerouslySetInnerHTML={{
                                            __html: item.event
                                        }}
                                    />
                                </strong>
                            ) : (
                                <p className={item.class}>{item.event}</p>
                            )}
                            <p>{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
);

const mapStateToProps = state => ({
    data: state.calendar
});

Calendar.propTypes = {
    data: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Calendar);
