import React from "react"
import moment from 'moment'

const Calendar = ({ data }) => (
    <section id="calendar" className="calendar">
        <section className="calendar__container">
            <h2 className="section__title">{data.title}</h2>
            <div className="calendar__events">
                {data.events.map((item, index) => (
                    <div key={index} className="calendar__event">
                        <div className="calendar__event--date">{moment.unix(item.date).format("MMM Do")}</div>
                        <div className="calendar__event--details">
                            {item.bold ? 
                                <p><strong>{item.event}</strong></p> : 
                                <p>{item.event}</p>
                            }
                            <p>{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
)

export default Calendar