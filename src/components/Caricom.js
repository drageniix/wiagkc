import React from "react"
import ResponsiveImage from './ResponsiveImage'

const Caricom = ({ data }) => (
    <section id="caricom" className="caricom">
        <section className="caricom__map">
            <ResponsiveImage className="caricom__map--image" image={data.map.image} />
            <caption className="caricom__map--caption">{data.map.caption}</caption>
        </section>    
        <h2 className="section__title">{data.title}</h2>
        <p className="caricom__text">{data.blurb}</p>
    </section>
)

export default Caricom