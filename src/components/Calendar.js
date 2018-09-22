import React from "react"
import moment from 'moment'

export const Calendar = ({ data }) => (
    <section id="calendar" className="calendar">
        <section className="calendar__container">
            <h2 className="section__title">{data.title}</h2>
            <div className="calendar__events">
                {data.events.map((item, index) => (
                    <div key={index} className="calendar__event">
                        <div className="calendar__event--date">{moment.unix(item.date).format("MMM Do")}</div>
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

export default Calendar