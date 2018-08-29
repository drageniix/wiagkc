import React from 'react'

const Activities = ({ data }) => (
    <section className="activities">
        <section className="activities__box">
            {data.types.map((item, index) => (
                <div key={index} className="activity">
                    <div className="activity__icon">
                        <div className={`icon--${item.icon}`} />
                    </div>
                    <h4 className="activity__header">{item.type}</h4>
                    <ul className="activity__exampleList">
                        {item.examples.map((ex, exIndex) => (
                            <li key={exIndex} className="activity__example">
                                {ex}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    </section>
)

export default Activities