import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const getOrdinal = n => n > 0 ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : ""
export const getShortDate = (unix) => {
    const date = new Date(unix * 1000)
    const month = months[date.getMonth()].slice(0, 3)
    const day = date.getDate()
    const ordinal = getOrdinal(day)
    return `${month} ${day}${ordinal}`
}

export const Calendar = ({ data: {title, events} }) => (
    <section id="calendar" className="calendar">
        <section className="calendar__container">
            <h2 className="section__title">{title}</h2>
            <div className="calendar__events">
                {events.map((item, index) => (
                    <div key={index} className="calendar__event">
                        <div className="calendar__event--date">{getShortDate(item.date)}</div>
                        <div className="calendar__event--details">
                            {item.bold ? 
                                <strong><p className={item.class} dangerouslySetInnerHTML={{ __html: item.event }}></p></strong> : 
                                <p className={item.class}>{item.event}</p>
                            }
                            <p>{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
)

const mapStateToProps = state => ({
    data: state.calendar
})

Calendar.propTypes = {
    data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Calendar)