import React from 'react'

const Activities = ({ data }) => (
    <section className="activities" id="activities">
        <section className="activities__box">
            {data.types.map((item, index) => (
                <div key={index} className="activities__activity">
                    <div className="activities__activity--icon">
                        <div className={`icon--${item.icon}`} />
                    </div>
                    <h4 className="activities__activity--header">{item.type}</h4>
                    <ul className="activities__activity--exampleList">
                        {item.examples.map((ex, exIndex) => (
                            <li key={exIndex} className="activities__activity--example">
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