import React from "react"

const AboutPage = ({ data }) => (
    <section className="about" id="about">
        <h2 className="section__title">{data.title}</h2>
        <p className="about__content">{data.content}</p>
    </section>
)

export default AboutPage