import React from 'react'

const Membership = ({ data }) => (
    <section id="membership" className="membership">
        <h2 className="section__title">{data.title}</h2>
        <p>{data.abstract}</p>
        <p>{data.meetingFrequency.prefix}</p>
        <p>{data.meetingFrequency.normal}</p>
        <p>{data.meetingFrequency.exceptions}</p>
        <p>{data.details}</p>
    </section>
)

export default Membership