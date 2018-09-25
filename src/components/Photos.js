import React from "react"
import ResponsiveImage from './ResponsiveImage'
import { connect } from 'react-redux'

export const Photos = ({ data }) => (
    <section className="photos" id="photos">
        <section className="photos__images">
            {data.images.map((item, index) => (
                <ResponsiveImage image={item} key={index}/>
            ))}
        </section>
    </section>
)


const mapStateToProps = state => ({
    data: state.photos
})

export default connect(mapStateToProps)(Photos)