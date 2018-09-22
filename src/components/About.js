import React from "react"

export const About = ({ data }) => (
    <section className="about" id="about">
        <h2 className="section__title">{data.title}</h2>
        <p className="about__content" dangerouslySetInnerHTML={{ __html: data.content}}></p>
    </section>
)

export default About