import React from 'react'

const Membership = ({ data }) => (
    <section id="membership" className="membership">
        <div className="membership__container">
            <div className="membership__frequency">
                <h2 className="section__title">
                    {data.meetingFrequency.prefix}
                </h2>
                <p className="membership__frequency--main">
                    <strong> 🏝️ {data.meetingFrequency.normal} </strong>
                </p>
                <p className="membership__frequency--exception">{data.meetingFrequency.exceptions}</p>
            </div>

            <p className="membership__detail">{data.abstract}</p>
            <p className="membership__detail">{data.details}</p>
        </div>
    </section>
)

export default Membership