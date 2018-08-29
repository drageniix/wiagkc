import React from 'react'
import ResponsiveImage from './ResponsiveImage'

const Footer = ({ data }) => (
    <section className="footer">
        <div className="footer__logobox">
            <ResponsiveImage className="footer__logo" image={data.logo} />
            <h2 className="section__title">{data.title}</h2>
        </div>
        <div className="footer__data">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
        </div>
    </section>
)

export default Footer