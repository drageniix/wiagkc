import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const getOrdinal = n => n > 0 ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : ""

export const getLongDate = (unix) => {
    const date = new Date(unix * 1000)
    const month = months[date.getMonth()]
    const dayOfWeek = days[date.getDay()]
    const day = date.getDate()
    const ordinal = getOrdinal(day)
    const year = date.getFullYear()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? "pm" : "am"
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes
    return `${dayOfWeek}, ${month} ${day}${ordinal} ${year}, ${hours}:${minutes} ${ampm}`
}

export const NextMeeting = ({ data }) => { 
    const next = data.events.filter(item => parseInt(item.date) > Date.now() / 1000)[0]

    return (
        <section id="nextMeeting" className="nextMeeting">
            <p className="nextMeeting__title">{next.event}</p>
            <p className="nextMeeting__date">{getLongDate(next.date)}</p>
        </section>
    )
}

const mapStateToProps = state => ({
    data: state.calendar
})

NextMeeting.propTypes = {
    data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(NextMeeting)