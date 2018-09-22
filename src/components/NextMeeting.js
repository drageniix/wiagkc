import React from 'react'
import moment from 'moment'

export const NextMeeting = ({ data }) => { 
    const now = moment().unix();
    const next = data.events.filter(item => parseInt(item.date) > now)[0]

    return (
        <section id="nextMeeting" className="nextMeeting">
            <p className="nextMeeting__title">{next.event}</p>
            <p className="nextMeeting__date">{moment.unix(next.date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
        </section>
    )
}

export default NextMeeting