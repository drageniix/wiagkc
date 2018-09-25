import React from "react"
import { connect } from 'react-redux'

export const About = ({ data }) => (
    <section className="about" id="about">
        <h2 className="section__title">{data.title}</h2>
        <p className="about__content" dangerouslySetInnerHTML={{ __html: data.content}}></p>
    </section>
)

const mapStateToProps = state => ({
    data: state.about
})

export default connect(mapStateToProps)(About)