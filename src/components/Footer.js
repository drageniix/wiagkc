import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import { connect } from 'react-redux'

export const Footer = ({ data }) => (
    <section className="footer" id="footer">
        <div className="footer__logobox">
            <ResponsiveImage className="footer__logobox--logo" image={data.logo} />
            <h2 className="section__title">{data.title}</h2>
        </div> 
        <div className="footer__data">
            <p><a href={`https://twitter.com/${data.twitter}`}>@{data.twitter}</a></p>
            <p><a href={"mailto:" + data.email}>{data.email}</a></p>
            <p><a href={"tel:" + data.phone.replace("-", "")}>{data.phone}</a></p>
            <p><a href={data.geo} target="_blank">{data.address}</a></p>
        </div>
    </section>
)

const mapStateToProps = state => ({
    data: state.marginals
})

export default connect(mapStateToProps)(Footer)